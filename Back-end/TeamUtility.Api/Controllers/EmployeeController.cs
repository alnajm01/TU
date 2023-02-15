using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TeamUtility.Service.Dtos;
using TeamUtility.Service.Services;

namespace TeamUtility.Api.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]

public sealed class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _service;

    public EmployeeController(IEmployeeService service)
        => _service = service;

    [HttpGet]
    [Route("[action]")]
    public string GetCurrentUserName() => HttpContext.User.Identity.Name;


    [HttpGet]
    [Route("[action]")]
    public async Task<IActionResult> GetCurrentUserProfile()
        => Ok(
            await _service.GetUserProfileByUserName(HttpContext.User.Identity.Name)
        );

    [HttpGet]
    [Route("[Action]")]
    public async Task<IActionResult> SearchForEmployees([FromQuery] EmployeeSearchCriteria employeeSearchCriteria)
    => Ok(
        await _service.SearchForEmployees(employeeSearchCriteria)
    );

    [HttpGet]
    [Route("[Action]")]
    public async Task<IActionResult> GetEmployeeByUserName([FromQuery] string userName)
    => Ok(
        await _service.GetUserProfileByUserName(userName)
    );

    [HttpGet]
    [Route("[Action]")]
    public async Task<IActionResult> TestEP()
    {
        var dum = User.Identity?.IsAuthenticated;
        return Ok();
    }
}