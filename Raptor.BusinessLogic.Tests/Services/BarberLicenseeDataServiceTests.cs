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

                                        var sut = new BarberLicenseeDataService(ctx);

                                        var actual = sut.GetAllBarberLicensees();

                                        actual.ShouldNotBeNull();
                                        actual.Count().ShouldBeGreaterThan(1);
                                    });
        }
    }
}
