using ET;


namespace ILRuntime
{
    public class ILRuntimeHelper
    {
        public static void Init(ILRuntime.Runtime.Enviorment.AppDomain app)
        {
            if (app == null)
            {
                // should log error
                return;
            }

			// adaptor register 
               

			// interface adaptor register
			            
			app.RegisterCrossBindingAdaptor(new IAwakeSystemAdaptor());

			// delegate register 
			

			// delegate convertor
            
        }
    }
}