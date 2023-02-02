namespace TeamUtility.Service.Dtos;

public sealed record EmployeeSearchCriteria(
    string? UserName,
    int? PeopleSoftId,
    string? FirstName,
    string? LastName,
    string? Email,
    string? Market
);