using System.Collections.Generic;
using System.Threading.Tasks;

namespace TeamUtility.Dal.Repositories;

public interface IGenericRepositroy
{
    string? ConnectionString { get; set; }
    Task<IEnumerable<T>> GetAll<T>(string storedProcedure);
    Task<IEnumerable<T>> GetALlByParameters<T>(string storedProcedure, object parameters);
    Task<T> Get<T>(string storedProcedure);
    Task<T> GetByParamters<T>(string storedProcedure, object parameters);
    Task<int> AddRecord(string storedProcedure, object parameters);
    Task<int> AddRecords(string storedProcedure, IEnumerable<object> parameters);
    Task<int> UpdateRecord(string storedProcedure, object parameters);
    Task<int> DeleteRecord(string storedProcedure, object parameters);
}
