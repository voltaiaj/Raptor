using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Raptor.Models.Models;

namespace Raptor.Models.ContextConfiguration
{
    public class StylistLicenseeConfiguration: EntityTypeConfiguration<StylistLicensee>
    {
        public StylistLicenseeConfiguration()
        {
            this.ToTable("StylistLicensee", RaptorContext.AppSchemaName);
            this.HasKey(x => x.Id);
            this.Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
        }
    }
}
