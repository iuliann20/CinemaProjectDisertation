using System;

namespace CinemaProject.DataAccessLayer
{
    public interface IUnitOfWork : IDisposable
    {

        void Commit();
    }
}
