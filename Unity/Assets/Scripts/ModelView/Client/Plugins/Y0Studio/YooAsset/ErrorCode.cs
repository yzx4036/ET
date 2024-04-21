namespace ET.Client
{
    public static partial class ErrorCode
    {
        public const int ERR_Success = 0;
        
        public const int ERR_ResourceInitError = 300000;            // 资源初始化失败
        public const int ERR_ResourceUpdateVersionError = 300001;   // 资源更新版本号失败
        public const int ERR_ResourceUpdateManifestError = 300002;  // 资源更新清单失败
        public const int ERR_ResourceUpdateDownloadError = 300003;  // 资源更新下载失败
    }
}