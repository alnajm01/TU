using TeamUtility.Service.Models;

namespace TeamUtility.Service.Services;
public interface IMarketService
{
    Task<IEnumerable<AfmeMarket>> GetMarketsByRegion(string region);
}