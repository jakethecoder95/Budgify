using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Budgify.Startup))]
namespace Budgify
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
