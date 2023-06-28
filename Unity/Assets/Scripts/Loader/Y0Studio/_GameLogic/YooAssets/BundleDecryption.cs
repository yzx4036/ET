using System;
using System.IO;

namespace YooAsset
{
    public class BundleDecryption: IDecryptionServices
    {

        public ulong LoadFromFileOffset(DecryptFileInfo fileInfo)
        {
            return YooAssetConst.Offset;
        }

        public byte[] LoadFromMemory(DecryptFileInfo fileInfo)
        {
            throw new NotImplementedException();
        }

        public Stream LoadFromStream(DecryptFileInfo fileInfo)
        {
            throw new NotImplementedException();
        }

        public uint GetManagedReadBufferSize()
        {
            throw new NotImplementedException();
        }
    }
}