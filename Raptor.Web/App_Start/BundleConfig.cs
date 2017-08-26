using System.Web.Optimization;

namespace Raptor.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                            "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularJS")
                            .Include("~/bower_components/angular/angular.js")
                            .Include("~/bower_components/angular-ui-router/release/angular-ui-router.js")
            );

            bundles.Add(new ScriptBundle("~/bundles/Raptor/js")
                            .Include("~/app/utils/utils.module.js")
                            .Include("~/app/utils/dataServiceHelper.service.js")
                            .Include("~/app/utils/urlHelper.service.js")
                            .Include("~/app/raptor/raptor.module.js")
                            .Include("~/app/raptor/raptor.routes.js")
                            .Include("~/app/raptor/home/home.module.js")
                            .Include("~/app/raptor/home/homeIndexController.js")
                            .Include("~/app/raptor/register/register.module.js")
                            .Include("~/app/raptor/register/registerDetailsController.js")
            );

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                            "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                            "~/Scripts/bootstrap.js",
                            "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                            "~/Content/bootstrap.css",
                            "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/bundles/d3")
                            .Include("~/Scripts/d3/d3.js"));
        }
    }
}
