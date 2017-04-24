using Microsoft.VisualStudio.TestTools.UnitTesting;
using Raptor.BusinessLogic.Services;
using Raptor.BusinessLogic.Tests.Extensions;
using Raptor.Models;
using Should;

namespace Raptor.BusinessLogic.Tests.Services
{
    [TestClass]
    public class StylistLicenseeDataServiceTests
    {
        [TestCategory("Integration")]
        [TestMethod]
        public void GetAllStylistLicenseesHappyPathSubCutaneous()
        {
            var context = new RaptorContext();

            context.RunWithRollback((ctx) =>
                                    {
                                        var sut = new StylistLicenseeDataService(ctx);

                                        var actual = sut.GetAllStylistLicensees();

                                        actual.ShouldNotBeNull();
                                        actual.ShouldBeEmpty();
                                    });
        }
    }
}
