using Microsoft.AspNetCore.Mvc;
using TeamUtility.Service.Services;

namespace TeamUtility.Api.Controllers;

// [Authorize]
[ApiController]
[Route("[Controller]")]
public sealed class MarketController : ControllerBase
{
    private readonly IMarketService _service;

    public MarketController(IMarketService service)
        => _service = service;

    [HttpGet]
    [Route("[action]")]
    public async Task<IActionResult> GetMarketsByRegion([FromQuery] string region = "AFME")
    => Ok(
        await _service.GetMarketsByRegion(region)
    );
}