using Raptor.Models.Models;

namespace Raptor.Models.TestHelpers
{
    public static class ContextPopulator
    {
        public static BarberLicensee GetBarberLicensee(IRaptorContext context)
        {
            var barberLicensee = context.BarberLicensees.Add(new BarberLicensee());

            context.SaveChanges();
            return barberLicensee;
        }

        public static StylistLicensee GetStylistLicensee(IRaptorContext context)
        {
            var stylistLicensee = context.StylistLicensees.Add(new StylistLicensee());

            context.SaveChanges();
            return stylistLicensee;
        }
    }
}
