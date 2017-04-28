using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace Raptor.BusinessLogic.DataAccess
{
    public class DbSetRepository<TEntity>
        where TEntity : class
    {
        public DbSetRepository()
        {
        }

        protected IDbSet<TEntity> DbSet { get; set; }
        public IQueryable<TEntity> All { get { return this.DbSet.AsQueryable(); } }

        public IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> expression, params Expression<Func<TEntity, object>>[] includes)
        {
            if ((includes == null) || (includes.Length == 0))
            {
                return this.All.Where(expression);
            }

            return includes.Aggregate(this.All.Where(expression), (current, include) => current.Include(include));
        }

        public TEntity FirstOrDefault(Expression<Func<TEntity, bool>> expression, params Expression<Func<TEntity, object>>[] includes)
        {
            if ((includes == null) || (includes.Length == 0))
            {
                return this.All.FirstOrDefault(expression);
            }

            return includes.Aggregate(this.All.Where(expression), (current, include) => current.Include(include)).FirstOrDefault();
        }

        public TEntity SingleOrDefault(Expression<Func<TEntity, bool>> expression, params Expression<Func<TEntity, object>>[] includes)
        {
            if ((includes == null) || (includes.Length == 0))
            {
                return this.All.SingleOrDefault(expression);
            }

            return includes.Aggregate(this.All.Where(expression), (current, include) => current.Include(include)).FirstOrDefault();
        }

        public TEntity Add(TEntity item)
        {
            return this.DbSet.Add(item);
        }

        public TEntity Remove(TEntity item)
        {
            return this.DbSet.Remove(item);
        }

        public int Count(Expression<Func<TEntity, bool>>  expression)
        {
            return this.DbSet.Count(expression);
        }
    }
}
