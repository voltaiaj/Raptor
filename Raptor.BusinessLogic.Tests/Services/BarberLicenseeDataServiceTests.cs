using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Raptor.BusinessLogic.Services;
using Raptor.BusinessLogic.Tests.Extensions;
using Raptor.Models;
using Raptor.Models.TestHelpers;
using Should;

namespace Raptor.BusinessLogic.Tests.Services
{
    [TestClass]
    public class BarberLicenseeDataServiceTests
    {
        [TestCategory("Integration")]
        [TestMethod]
        public void GetAllBarberLicenseesHappyPathSubcutaneous()
        {
            var context = new RaptorContext();

            context.RunWithRollback((ctx) =>
                                    {
                                        ContextPopulator.GetBarberLicensee(ctx);
                                        ContextPopulator.GetBarberLicensee(ctx);
                                        ContextPopulator.GetBarberLicensee(ctx);

                                        var sut = new BarberLicenseeDataService(ctx);

                                        var actual = sut.GetAllBarberLicensees();

                                        actual.ShouldNotBeNull();
                                        actual.Count().ShouldBeGreaterThan(1);
                                    });
        }

        [TestCategory("Integration")]
        [TestMethod]
        public void GetByIdHappyPathSubcutaneous()
        {
            var context = new RaptorContext();

            context.RunWithRollback((ctx) =>
                                    {
                                        var barberLicensee = ContextPopulator.GetBarberLicensee(ctx);

                                        var sut = new BarberLicenseeDataService(ctx);

                                        var actual = sut.GetById(barberLicensee.Id);

                                        actual.ShouldNotBeNull();
                                        actual.Id.ShouldEqual(barberLicensee.Id);
                                    });
        }

        [TestCategory("Integration")]
        [TestMethod]
        public void GetByNameHappyPathSubcutaneous()
        {
            var context = new RaptorContext();

            context.RunWithRollback((ctx) =>
                                    {
                                        var barberLicensee1 = ContextPopulator.GetBarberLicensee(ctx);
                                        var barberLicensee2 = ContextPopulator.GetBarberLicensee(ctx);
                                        barberLicensee1.FirstName = "Sean";
                                        barberLicensee2.LastName = "Sean";
                                        ctx.SaveChanges();

                                        var sut = new BarberLicenseeDataService(ctx);

                                        var actual = sut.GetByName("Sean");

                                        actual.ShouldNotBeNull();
                                        actual.Count().ShouldEqual(2);
                                        actual.Any(x => x.FirstName == "Sean").ShouldBeTrue();
                                        actual.Any(x => x.LastName == "Sean").ShouldBeTrue();
                                    });
        }
    }
}
