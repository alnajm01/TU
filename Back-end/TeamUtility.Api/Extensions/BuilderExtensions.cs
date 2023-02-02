using System.Reflection;
using TeamUtility.Dal.Repositories;
using TeamUtility.Service.Services;

namespace TeamUtility.Api.Extensions;

public static class BuilderExtensions
{
    public static void RegisterServices(this IServiceCollection services)
    {
        services.AddScoped<IGenericRepositroy, GenericRepositroy>();
        services.AddScoped<IEmployeeService, EmployeeService>();
        services.AddScoped<IMarketService, MarketService>();
    }
}