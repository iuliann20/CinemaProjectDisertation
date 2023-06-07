using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using System.Data;
using System;
using CinemaProject.Common.Settings;

namespace CinemaProject.DataAccessLayer
{
    public class UnitOfWork : IUnitOfWork
    {
        private IDbConnection _connection;
        private IDbTransaction _transaction;
        private bool _disposed;


        private readonly AppSettings _appSettings;

        public UnitOfWork(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;

            //_connection = new SqlConnection(_appSettings);
            _connection.Open();
            _transaction = _connection.BeginTransaction();
        }

        public void Commit()
        {
            try
            {
                _transaction.Commit();
            }
            catch
            {
                _transaction.Rollback();
                throw;
            }
            finally
            {
                _transaction.Dispose();
                _transaction = _connection.BeginTransaction();
                ResetRepositories();
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    if (_transaction != null)
                    {
                        _transaction.Dispose();
                        _transaction = null;
                    }
                    if (_connection != null)
                    {
                        _connection.Dispose();
                        _connection = null;
                    }
                }

                _disposed = true;
            }
        }

        private void ResetRepositories()
        {
        }

        ~UnitOfWork()
        {
            Dispose(false);
        }
    }
}
