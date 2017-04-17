using System;
using System.Data.Entity;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Raptor.BusinessLogic.Tests.Extensions
{
    public static class DbContextExtensions
    {
        public static void RunWithRollback<T>(this T dbContext, Action<T> lambda) where T : DbContext
        {
            using (var scope = dbContext.Database.BeginTransaction())
            {
                try
                {
                    lambda(dbContext);
                }
                catch (Exception exception)
                {
                    Assert.Fail(exception.ToString());
                }
                finally
                {
                    scope.Rollback();
                }
            }
        }
    }
}
