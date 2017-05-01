using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace Raptor.BusinessLogic.DataAccess
{
    public abstract class DataServiceBase<TEntity>
        where TEntity : class
    {
        protected DataServiceBase(IDbSet<TEntity> dbSet)
        {
            Repository = new DbSetRepository<TEntity>(dbSet);
        }

        protected DbSetRepository<TEntity> Repository { get; private set; }

        protected IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> expression, params Expression<Func<TEntity, object>>[] includes)
        {
            return Repository.Find(expression, includes);
        }

        protected int Count(Expression<Func<TEntity, bool>> expression)
        {
            return Repository.Count(expression);
        }

        protected TEntity FirstOfDefault(Expression<Func<TEntity, bool>> expression)
        {
            return Repository.FirstOrDefault(expression);
        }

        protected TEntity SingleOrDefault(Expression<Func<TEntity, bool>> expression, params Expression<Func<TEntity, object>>[] includes)
        {
            return Repository.SingleOrDefault(expression, includes);
        }

        protected TEntity Add(TEntity entity)
        {
            return Repository.Add(entity);
        }
    }
}
