---
--- Created by Administrator.
--- DateTime: 2017/12/14 11:06
---

local print = print
local tconcat = table.concat
local tinsert = table.insert
local type = type
local pairs = pairs
local tostring = tostring
local next = next

local function pr (t, name, indent)
	local tableList = {}
	local function table_r (t, name, indent, full)
		local id = not full and name or type(name) ~= "number" and tostring(name) or '[' .. name .. ']'
		local tag = indent .. id .. ' = '
		local out = {}  -- result
		if type(t) == "table" then
			if tableList[t] ~= nil then
				tinsert(out, tag .. '{} -- ' .. tableList[t] .. ' (self reference)')
			else
				tableList[t] = full and (full .. '.' .. id) or id
				if next(t) then
					-- Table not empty
					tinsert(out, tag .. '{')
					for key, value in pairs(t) do
						tinsert(out, table_r(value, key, indent .. '|  ', tableList[t]))
					end
					tinsert(out, indent .. '}')
				else
					tinsert(out, tag .. '{}')
				end
			end
		else
			local val = type(t) ~= "number" and type(t) ~= "boolean" and '"' .. tostring(t) .. '"' or tostring(t)
			tinsert(out, tag .. val)
		end
		return tconcat(out, '\n')
	end
	return table_r(t, name or 'Value', indent or '')
end
local function print_r (t, name)
	fprint(pr(t, name))
end


local KeyDict = {
	ClassName = "%$%$clsName%$%$",
	CompsAwake = "%$%$compsAwake%$%$",
	CompsDestroy = "%$%$compsDestroy%$%$",
	PackName = "%$%$packName%$%$",
	UiResName = "%$%$uiResName%$%$",	
	CompsDefine = "%$%$compsDefine%$%$",
	FuiAttribut = "%$%$fuiAttribut%$%$",
	NamespaceName = "%$%$namespaceName%$%$",
	SuperClassName = "%$%$superClassName%$%$",
	UiURL = "%$%$uiURL%$%$",
	FuiPackageDef = "%$%$fuiPackageDef%$%$",
	FuiTypeDef = "%$%$fuiTypeDef%$%$",
}

---@param handler CS.FairyEditor.PublishHandler
---@param pTemplateTable CsTemplate
local function genCode(handler, pTemplateTable)
	local _uiClsTp = nil
	local _pkgClsTp = pTemplateTable.pkgClsTp
	local _typeClsTp = pTemplateTable.typeClsTp
	
	local _className, _compsAwake, _compsDestroy, _packName, _uiResName, _compsDefine, _fuiAttribut, _namespaceName, _superClassName, _uiURL
	
	----@type CS.FairyEditor.GlobalPublishSettings.CodeGenerationConfig
	local settings = handler.project:GetSettings("Publish").codeGeneration
	_packName = handler:ToFilename(handler.pkg.name); --convert chinese to pinyin, remove special chars etc.
	local exportCodePath = handler.exportCodePath .. '/' .. _packName
	_namespaceName = settings.packageName
	
	--CollectClasses(stripeMemeber, stripeClass, fguiNamespace)
	local classes = handler:CollectClasses(settings.ignoreNoname, settings.ignoreNoname, nil)
	handler:SetupCodeFolder(exportCodePath, "cs") --check if target folder exists, and delete old files
	
	local classNamePrefix = settings.classNamePrefix
	local getMemberByName = settings.getMemberByName
	local hasClassNamePrefix = classNamePrefix and string.len(classNamePrefix) > 0
	
	---默认是不能生成跨包的组件类型，这里查找component的正确类型保存到字典，供生成代码字段时检测
	local _typeDict = {}
	for i = 0, handler.pkg.items.Count - 1 do
		---@type CS.FairyEditor.FPackageItem
		local _item = handler.pkg.items[i]
		if string.find(_item.file, "xml") then
			local _itemXml = CS.FairyEditor.XMLExtension.Load(_item.file)
			if _itemXml then
				local displayList = _itemXml:GetNode("displayList")
				if displayList then
					local _itemName = _item.name
					if hasClassNamePrefix then
						_itemName = classNamePrefix .. _item.name --这里拼接一下全局设置里面类名前缀
					end
					_typeDict[_itemName] = _typeDict[_itemName] or {}
					---@type CS.FairyGUI.Utils.XML
					local _elem = displayList:Elements():Filter("component")
					for j = 0, _elem.Count - 1 do
						---@type CS.FairyGUI.Utils.XML
						local comp = _elem.rawList[j]
						local compNameKey = comp:GetAttribute("name")
						local compType = comp:GetAttribute("fileName")
						if compNameKey then
							compType = string.sub(compType, 1, string.len(compType) - 4)
							if hasClassNamePrefix then
								compType = classNamePrefix .. compType --这里拼接一下全局设置里面类名前缀
							end
							_typeDict[_itemName][compNameKey] = compType
						end
					end
				end
			end
		end
	end
	-- --print_r(_typeDict)
	
	local classCnt = classes.Count
	local writer = CodeWriter.new()
	for i = 0, classCnt - 1 do
		writer:reset()
		_uiClsTp = tostring(pTemplateTable.uiClsTp)

		---@type CS.FairyEditor.PublishHandler.ClassInfo
		local classInfo = classes[i]
		local members = classInfo.members

		_className = classInfo.className
		_uiResName = classInfo.resName
		_superClassName = classInfo.superClassName
		_uiURL = string.format("%s%s", handler.pkg.id, classInfo.resId)

		--如果是收藏的组件，生成[FUI]属性 用这个区分哪些是UI面板
		if classInfo.res.exported
				and classInfo.res.type == "component"
				and classInfo.res.favorite then
			_fuiAttribut = string.format("[FUI(typeof(%s), UIPackageName, UIResName)]", _className)
		end
		
		_compsDefine = ""
		local memberCnt = members.Count
		for j = 0, memberCnt - 1 do
			local memberInfo = members[j]
			_typeDict[classInfo.className] = _typeDict[classInfo.className] or {}
			local type = _typeDict[classInfo.className][memberInfo.varName] or memberInfo.type
			_compsDefine = _compsDefine .. string.format("\t\tpublic %s %s { get; set; }\n", type, memberInfo.varName)
		end

		_compsAwake = ""
		for j = 0, memberCnt - 1 do
			local memberInfo = members[j]
			
			_typeDict[classInfo.className] = _typeDict[classInfo.className] or {}
			local typeName = _typeDict[classInfo.className][memberInfo.varName] or memberInfo.type
			local isCustomComponent = _typeDict[classInfo.className][memberInfo.varName] ~= nil
			
			if memberInfo.group == 0 then
				if getMemberByName then
					if isCustomComponent then
						_compsAwake = _compsAwake .. string.format("\t\t\t\t\tself.%s = CreateFUICompInst<%s>(self, com.GetChildAt(%s));\n", memberInfo.varName, typeName, memberInfo.index)
					else
						_compsAwake = _compsAwake .. string.format("\t\t\t\t\tself.%s = (%s)com.GetChild(\"%s\");\n", memberInfo.varName, typeName, memberInfo.name)
					end
				else
					if isCustomComponent then
						_compsAwake = _compsAwake .. string.format("\t\t\t\t\tself.%s = CreateFUICompInst<%s>(self, com.GetChildAt(%s));\n", memberInfo.varName, typeName, memberInfo.index)
					else
						_compsAwake = _compsAwake .. string.format("\t\t\t\t\tself.%s = (%s)com.GetChildAt(%s);\n", memberInfo.varName, typeName, memberInfo.index)
					end
				end
			elseif memberInfo.group == 1 then
				if getMemberByName then
					_compsAwake = _compsAwake .. string.format("\t\t\t\t\tself.%s = com.GetController(\"%s\");\n", memberInfo.varName, memberInfo.name)
				else
					_compsAwake = _compsAwake .. string.format("\t\t\t\t\tself.%s = com.GetControllerAt(%s);\n", memberInfo.varName, memberInfo.index)
				end
			else
				if getMemberByName then
					_compsAwake = _compsAwake .. string.format("\t\t\t\t\tself.%s = com.GetTransition(\"%s\");\n", memberInfo.varName, memberInfo.name)
				else
					_compsAwake = _compsAwake .. string.format("\t\t\t\t\tself.%s = com.GetTransitionAt(%s);\n", memberInfo.varName, memberInfo.index)
				end
			end
		end
		
		_compsDestroy = ""
		for j = 0, memberCnt - 1 do
			local memberInfo = members[j]
			local typeName = memberInfo.type
			if memberInfo.group == 0 then
				if string.find(typeName, 'FUI') then
					_compsDestroy = _compsDestroy .. string.format("\t\t\t\tself.%s.Dispose();\n", memberInfo.varName)
					-- writer:writeln('\t\t%s.Dispose();', memberInfo.varName)
				end
			end
			_compsDestroy = _compsDestroy .. string.format("\t\t\t\tself.%s = null;\n", memberInfo.varName)
		end

		_uiClsTp = string.gsub(_uiClsTp, KeyDict.ClassName, _className)
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.CompsAwake, _compsAwake)
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.CompsDefine, _compsDefine)
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.CompsDestroy, _compsDestroy)
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.FuiAttribut, _fuiAttribut or "")
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.NamespaceName, _namespaceName)
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.PackName, _packName)
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.SuperClassName, _superClassName)
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.UiResName, _uiResName)
		_uiClsTp = string.gsub(_uiClsTp, KeyDict.UiURL, _uiURL)

		-- fprint(_uiClsTp)
		writer:writeln(_uiClsTp)
		writer:save(exportCodePath .. '/' .. classInfo.className .. '.cs')
	end
	

	-- -----写入fuipackage
	writer:reset()
	local _fuiPackDef = string.format('\t\tpublic const string %s = "%s";\n', _packName, _packName)
	-- 生成所有的
	local itemCount = handler.items.Count
	for i = 0, itemCount - 1 do
		_fuiPackDef = _fuiPackDef .. string.format('\t\tpublic const string %s_%s = "ui://%s/%s";\n', _packName, handler.items[i].name, _packName, handler.items[i].name)
		-- writer:writeln('public const string %s_%s = "ui://%s/%s";', _packName, handler.items[i].name, _packName, handler.items[i].name)
	end
	_pkgClsTp = string.gsub(_pkgClsTp, KeyDict.NamespaceName, _namespaceName)
	_pkgClsTp = string.gsub(_pkgClsTp, KeyDict.FuiPackageDef, _fuiPackDef)
	
	-- fprint(_pkgClsTp)
	writer:writeln(_pkgClsTp)
	local binderPackageName = 'Package' .. _packName
	writer:save(exportCodePath .. '/' .. binderPackageName .. '.cs')
	

	-- ------写入Fui Type
	writer:reset()
	-- 生成所有的Type
	local itemCount = handler.items.Count
	local _genClassNameList = {}
	for i = 0, itemCount - 1 do
		---@type CS.FairyEditor.FPackageItem
		local _item = handler.items[i]
		if _item.exported and _item.type == "component" and _item.favorite then
			local _className = _item.name
			if hasClassNamePrefix then
				_className = classNamePrefix .. _className
			end
			table.insert(_genClassNameList, _className)
		end
	end
	if #_genClassNameList > 0 then
		local _fuiTypeDef = ""
		for i = 1, #_genClassNameList do
			_fuiTypeDef = _fuiTypeDef .. string.format('\t\tpublic static readonly Type %s = typeof(%s);\n', _genClassNameList[i], _genClassNameList[i])
			-- writer:writeln('public static readonly Type %s = typeof(%s);', _genClassNameList[i], _genClassNameList[i])
		end
		_typeClsTp = string.gsub(_typeClsTp, KeyDict.NamespaceName, _namespaceName)
		_typeClsTp = string.gsub(_typeClsTp, KeyDict.FuiTypeDef, _fuiTypeDef)
		
		-- fprint(_typeClsTp)
		writer:writeln(_typeClsTp)
		local binderPackageName = 'FUIType' .. _packName
		writer:save(exportCodePath .. '/' .. binderPackageName .. '.cs')
	end
end

return genCode