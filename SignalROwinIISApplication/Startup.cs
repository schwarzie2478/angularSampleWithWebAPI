using System.Net.Http.Formatting;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Owin;
using SignalROwinIISApplication;
using Swashbuckle.Application;
using System.Net.Http.Headers;

[assembly: Microsoft.Owin.OwinStartup(typeof(Startup))]

namespace SignalROwinIISApplication
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            appBuilder.MapSignalR();

            var httpConfiguration = new HttpConfiguration();
            
            httpConfiguration.Formatters.Clear();
            httpConfiguration.Formatters.Add(new JsonMediaTypeFormatter());
            
            httpConfiguration.Formatters.JsonFormatter.SerializerSettings = 
                new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            httpConfiguration.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            httpConfiguration.Formatters.Remove(httpConfiguration.Formatters.XmlFormatter);
            httpConfiguration.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional });

            httpConfiguration
                .EnableSwagger(c => c.SingleApiVersion("v1", "SignalROwinIISApplication"))
                .EnableSwaggerUi();

            appBuilder.UseWebApi(httpConfiguration);

            log4net.Config.XmlConfigurator.Configure();
        }
    }
}
