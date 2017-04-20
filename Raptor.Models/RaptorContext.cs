using System.Data.Entity;
using Raptor.Models.ContextConfiguration;
using Raptor.Models.Models;

namespace Raptor.Models
{
    public interface IRaptorContext
    {
        IDbSet<BarberLicensee> BarberLicensees { get; set; }
        IDbSet<StylistLicensee> StylistLicensees { get; set; }
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
        public IDbSet<StylistLicensee> StylistLicensees { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<RaptorContext>(null);
            modelBuilder.Configurations.Add(new BarberLicenseeConfiguration());
            modelBuilder.Configurations.Add(new StylistLicenseeConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}
