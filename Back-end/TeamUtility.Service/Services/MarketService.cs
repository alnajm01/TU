using Microsoft.Extensions.Configuration;
using TeamUtility.Dal.Repositories;
using TeamUtility.Service.Models;

namespace TeamUtility.Service.Services;

public sealed class MarketService : IMarketService
{
    private readonly IGenericRepositroy _repo;

    public MarketService(IGenericRepositroy repo, IConfiguration config)
    {
        _repo = repo;
        _repo.ConnectionString = config["ConnectionStrings:AfmeBasicData"];
    }

    public async Task<IEnumerable<AfmeMarket>> GetMarketsByRegion(string region)
        => await _repo.GetALlByParameters<AfmeMarket>(
            "AfmeBasicData_SP_GetMarketsByRegion @Region",
        new
        {
            Region = region
        });
}