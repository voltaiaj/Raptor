using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Raptor.Models.Models;

namespace Raptor.Models.ContextConfiguration
{
    public class BarberLicenseeConfiguration: EntityTypeConfiguration<BarberLicensee>
    {
        public BarberLicenseeConfiguration()
        {
            this.ToTable("BarberLicensee", RaptorContext.AppSchemaName);
            this.HasKey(x => x.Id);
            this.Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
        }
    }
}
