var Utils;
(function (Utils) {
    'use strict';
    var UrlHelper = (function () {
        function UrlHelper() {
        }
        UrlHelper.prototype.addTrailingSlashOnUrl = function (url) {
            return url.replace(/\/?$/, '/');
        };
        UrlHelper.prototype.removeTrailingSlashOnUrl = function (url) {
            return url.replace(/\/+$/, '');
        };
        return UrlHelper;
    }());
    Utils.UrlHelper = UrlHelper;
    angular.module('rsis')
        .service('urlHelper', UrlHelper);
})(Utils || (Utils = {}));
