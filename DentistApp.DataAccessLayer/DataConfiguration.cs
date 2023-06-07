using Microsoft.Extensions.DependencyInjection;

namespace CinemaProject.DataAccessLayer
{
    public static class DataConfiguration
    {
        public static void RegisterDependencies(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
