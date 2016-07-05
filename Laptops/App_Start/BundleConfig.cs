using System.Web;
using System.Web.Optimization;

namespace Laptops
{
    public class BundleConfig
    {
        // Дополнительные сведения об объединении см. по адресу: http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Используйте версию Modernizr для разработчиков, чтобы учиться работать. Когда вы будете готовы перейти к работе,
            // используйте средство построения на сайте http://modernizr.com, чтобы выбрать только нужные тесты.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
            "~/app/js/lib/angular.js",
            "~/app/js/lib/angular-route.js",
            "~/app/app.js",
            "~/app/services/laptopListService.js",
            "~/app/services/laptopIdService.js",
            "~/app/js/controllers/laptopListController.js",
            "~/app/js/controllers/laptopIdController.js"));

            bundles.Add(new StyleBundle("~/app/css").Include(
                      "~/app/css/bootstrap.css",
                      "~/app/css/site.css"));
        }
    }
}
