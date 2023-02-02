using System.Data;
using Dapper;
using Microsoft.Data.SqlClient;

namespace TeamUtility.Dal.Repositories;

public class GenericRepositroy : IGenericRepositroy
{
    public string? ConnectionString { get; set; }

    public async Task<int> AddRecord(string storedProcedure, object parameters)
    {
        using (IDbConnection connection = new SqlConnection(ConnectionString))
        {
            return await connection.ExecuteAsync(storedProcedure, parameters);
        }
    }

    public async Task<int> AddRecords(string storedProcedure, IEnumerable<object> parameters)
    {
        using (IDbConnection connection = new SqlConnection(ConnectionString))
        {
            return await connection.ExecuteAsync(storedProcedure, parameters);
        }
    }

    public async Task<int> DeleteRecord(string storedProcedure, object parameters)
    {
        using (IDbConnection connection = new SqlConnection(ConnectionString))
        {
            return await connection.ExecuteAsync(storedProcedure, parameters);
        }
    }

    public async Task<T> Get<T>(string storedProcedure)
    {
        using (IDbConnection connection = new SqlConnection(ConnectionString))
        {
            return await connection.QueryFirstOrDefaultAsync<T>(storedProcedure);
        }
    }

    public async Task<IEnumerable<T>> GetAll<T>(string storedProcedure)
    {
        using (IDbConnection connection = new SqlConnection(ConnectionString))
        {
            return await connection.QueryAsync<T>(storedProcedure);
        }
    }

    public async Task<IEnumerable<T>> GetALlByParameters<T>(string storedProcedure, object parameters)
    {
        using (IDbConnection connection = new SqlConnection(ConnectionString))
        {
            return await connection.QueryAsync<T>(storedProcedure, parameters);
        }
    }

    public async Task<T> GetByParamters<T>(string storedProcedure, object parameters)
    {
        using (IDbConnection connection = new SqlConnection(ConnectionString))
        {
            return await connection.QueryFirstOrDefaultAsync<T>(storedProcedure, parameters);
        }
    }

    public async Task<int> UpdateRecord(string storedProcedure, object parameters)
    {
        using (IDbConnection connection = new SqlConnection(ConnectionString))
        {
            return await connection.ExecuteAsync(storedProcedure, parameters);
        }
    }
}