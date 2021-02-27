using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace ETHotfix
{
    public class ServerListInfo 
    {
        public int id;
        public string name;
        public int state;
        public string ip;
        public int port;

    }

    public class ServerList : Object
    {
        [BsonIgnore]
        public Dictionary<string, ServerListInfo> ServerListInfo = new Dictionary<string, ServerListInfo>();

        public override void EndInit()
        {
            base.EndInit();

        }
    }
}
