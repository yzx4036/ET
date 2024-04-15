/*----------------------------------------------------------------
// 文件名称：FUIGComponentAttr
// 创 建 者：yezhenxian
// 创建时间：2023年09月18日 星期一 11:24
//===============================================================
// 功能描述：
//		
//
//----------------------------------------------------------------*/

using System;

namespace ET.Client
{
    [AttributeUsage(AttributeTargets.Class)]
    public class FUIGComponentAttribute : BaseAttribute
    {
        public FUIGComponentInfo mFUIGComponentInfo;
        
        public FUIGComponentAttribute(string packageName, string resName)
        {
            mFUIGComponentInfo = new FUIGComponentInfo(packageName, resName);
        }
    }
    
    public class FUIGComponentInfo
    {
        public string PackageName;
        public string ResName;
        
        public FUIGComponentInfo(string packageName, string resName)
        {
            this.PackageName = packageName;
            this.ResName = resName;
        }
    }
}

