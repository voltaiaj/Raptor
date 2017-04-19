using System.Data.Entity;
using Raptor.Models.Models;

namespace Raptor.Models
{
    public interface IRaptorContext
    {
        IDbSet<BarberLicensee> BarberLicensees { get; set; }
    }

    public class RaptorContext : DbContext, IRaptorContext
    {
        internal const string AppSchemaName = "Raptor";

        public RaptorContext()
            : this("name=Raptor")
        {
        }

        private RaptorContext(string nameOrConnectionString)
            : base(nameOrConnectionString)
        {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public IDbSet<BarberLicensee> BarberLicensees { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<RaptorContext>(null);
            base.OnModelCreating(modelBuilder);
        }
    }
}
