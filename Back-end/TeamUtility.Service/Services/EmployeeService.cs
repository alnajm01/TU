using Microsoft.Extensions.Configuration;
using TeamUtility.Dal.Repositories;
using TeamUtility.Service.Dtos;
using TeamUtility.Service.Extensions;
using TeamUtility.Service.Models;

namespace TeamUtility.Service.Services;

public class EmployeeService : IEmployeeService
{
    private readonly IGenericRepositroy _repo;

    public EmployeeService(IGenericRepositroy repo, IConfiguration config)
    {
        _repo = repo;
        _repo.ConnectionString = config["ConnectionStrings:AfmeBasicData"];
    }

    public async Task<AfmeEmployee> GetUserProfileByUserName(string userName)
    {
        int index;
        if (userName.Contains("\\")) index = userName.IndexOf("\\");
        else index = userName.IndexOf("/");
        userName = userName.Substring(index + 1, userName.Length - index - 1);

        var viewEmployee = await _repo.GetByParamters<AfmeEmployeeView>(
            "AfmeBasicData_SP_GetEmployeeProfile @NTLogin",
                new { NTLogin = userName }
                );
        if (viewEmployee is null) return null;
        return viewEmployee.MapToAfmeEmployee();
    }

    public async Task<IEnumerable<AfmeEmployee>> SearchForEmployees(EmployeeSearchCriteria employeeSearchCriteria)
    {
        var viewEmployees = await _repo.GetALlByParameters<AfmeEmployeeView>(
                "TU_SearchForEmployees @firstName, @lastName, @userName, @peopleSoftId, @email, @market",
            new
            {
                firstName = employeeSearchCriteria.FirstName,
                lastName = employeeSearchCriteria.LastName,
                userName = employeeSearchCriteria.UserName,
                peopleSoftId = employeeSearchCriteria.PeopleSoftId,
                email = employeeSearchCriteria.Email,
                market = employeeSearchCriteria.Market
            });
        return viewEmployees.MapToAfmeEmployees();
    }
}
