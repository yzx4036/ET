local genHotfix = require(PluginPath..'/GenHotfix')
local genRuntime = require(PluginPath..'/GenRuntime')
local csTemplateString = require(PluginPath..'/CsTemplate')

function onPublish(handler)
    if not handler.genCode then 
        handler.genCode = false
        genHotfix(handler, csTemplateString)
    else
        handler.genCode = false
        genRuntime(handler)
    end
end