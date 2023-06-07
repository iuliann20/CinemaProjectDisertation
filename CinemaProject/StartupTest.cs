using CinemaProject.Common.Settings;
using CinemaProject.DataAccessLayer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;

namespace CinemaProject
{
    public class StartupTest
    {
        private static readonly byte[] Key = { 146, 107, 170, 10, 234, 49, 239, 10, 51, 92, 98, 232, 114, 43, 163, 203, 43, 186, 147, 133, 188, 239, 152, 83, 202, 186, 185, 169, 186, 215, 204, 209 };
        private static readonly byte[] Vector = { 254, 215, 14, 71, 197, 118, 200, 163, 69, 49, 161, 137, 168, 241, 187, 28 };

        public StartupTest(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            RegisterServices(services);

            services.AddMvc();
            services.AddHttpContextAccessor();
            services.AddControllersWithViews();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseDeveloperExceptionPage();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSerilogRequestLogging();
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");

                endpoints.MapControllerRoute(
                  name: "cautare",
                  pattern: "cautare/{**everything}",
                  defaults: new { controller = "Home", action = "Index" });
            });
        }

        private void RegisterServices(IServiceCollection services)
        {
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
