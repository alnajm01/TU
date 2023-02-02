using TeamUtility.Service.Dtos;
using TeamUtility.Service.Models;

namespace TeamUtility.Service.Services;

public interface IEmployeeService
{
    Task<AfmeEmployee> GetUserProfileByUserName(string userName);
    Task<IEnumerable<AfmeEmployee>> SearchForEmployees(EmployeeSearchCriteria employeeSearchCriteria);
}