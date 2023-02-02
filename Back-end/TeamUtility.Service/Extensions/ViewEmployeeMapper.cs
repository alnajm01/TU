using TeamUtility.Service.Models;

namespace TeamUtility.Service.Extensions;
public static class employeeViewMapper
{
    public static IEnumerable<AfmeEmployee> MapToAfmeEmployees(this IEnumerable<AfmeEmployeeView> employeeViews)
    {
        var afmeEmployees = new List<AfmeEmployee>();
        foreach (var emp in employeeViews)
        {
            afmeEmployees.Add(emp.MapToAfmeEmployee());
        }
        return afmeEmployees;
    }

    public static AfmeEmployee MapToAfmeEmployee(this AfmeEmployeeView employeeView)
    {
        var tmp_emp = new AfmeEmployee();
        tmp_emp.EmployeeDomain = employeeView.EmployeeDomain;
        tmp_emp.DataOfHiring = employeeView.HIRE_DATE;
        tmp_emp.DepartmentName = employeeView.DEPT_DESCR;
        tmp_emp.DisplayName = employeeView.DISPLAY_NAME;
        tmp_emp.EmailAddress = employeeView.EMAIL_ADDR;
        tmp_emp.Id = employeeView.EMPLID;
        tmp_emp.FirstName = employeeView.FIRST_NAME;
        tmp_emp.JobTitle = employeeView.POSITION_DESCR;
        tmp_emp.LastName = employeeView.LAST_NAME;
        tmp_emp.ManagerEmailAddress = employeeView.ManagerEmail;
        tmp_emp.ManagerName = employeeView.ManagerName;
        tmp_emp.ManagerNetworkID = employeeView.ManagerUserName;
        tmp_emp.MarketName = employeeView.MarketName;
        tmp_emp.MiddleName = employeeView.MIDDLE_NAME;
        tmp_emp.MobileNumber = employeeView.PHONE_BUSINESS_MOBILE;
        tmp_emp.FullName =
            employeeView.FIRST_NAME +
            " " +
            employeeView.MIDDLE_NAME +
            " " +
            employeeView.LAST_NAME +
            " - (" +
            employeeView.LOGON_ID +
            ")";
        tmp_emp.NetworkLoginId = employeeView.LOGON_ID;
        tmp_emp.PeopleSoftId = employeeView.EMPLID;
        tmp_emp.UserName =
            employeeView.EmployeeDomain + @"\" + employeeView.LOGON_ID;
        tmp_emp.BusinessUnit = employeeView.BUSINESS_UNIT_DESCR;
        tmp_emp.Country = employeeView.CountryName;
        tmp_emp.IsEmployee = employeeView.PER_STATUS_DESCR;
        if (employeeView.ACQ_DIV_FLAG == null)
        {
            employeeView.ACQ_DIV_FLAG = "";
        }
        if (employeeView.ELIG_CONFIG6 == null)
        {
            employeeView.ELIG_CONFIG6 = "";
        }
        if (employeeView.VENDOR_NAME == null)
        {
            employeeView.VENDOR_NAME = "";
        }
        if (
            employeeView.ACQ_DIV_FLAG.ToLower() == "div" &&
            (
            employeeView.ELIG_CONFIG6.ToLower() == "upj1" ||
            employeeView.ELIG_CONFIG6.ToLower() == "upj2" ||
            employeeView.ELIG_CONFIG6.ToLower() == "upj3" ||
            employeeView.ELIG_CONFIG6.ToLower() == "upj4"
            )
        )
        {
            tmp_emp.CompanyName = "Upjohn";
        }
        else if (
            employeeView.ACQ_DIV_FLAG.ToLower() == "div" &&
            employeeView.VENDOR_NAME.ToLower() == "upjohn"
        )
        {
            tmp_emp.CompanyName = "Upjohn";
        }
        else if (
            employeeView.ACQ_DIV_FLAG.ToLower() == "div" &&
            employeeView.ELIG_CONFIG6.ToLower() == "pch1"
        )
        {
            tmp_emp.CompanyName = "PCH";
        }
        else
        {
            tmp_emp.CompanyName = "PBG";
        }
        return tmp_emp;
    }
}