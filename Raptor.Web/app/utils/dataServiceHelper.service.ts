namespace Utils {
    'use strict';

    export interface IDataServiceHelper {
        get(url: string): angular.IHttpPromise<any>;
    }

    export class DataServiceHelper implements IDataServiceHelper {
        public static $inject: string[] = ['$http', 'urlHelper'];

        constructor(private $http: angular.IHttpService,
                    private urlHelper: IUrlHelper) {
        }

        public get(url: string) {
            let fullUrl: string = this.urlHelper.removeTrailingSlashOnUrl(url);
            return this.$http.get(fullUrl);
        }


    }

    angular.module('utils')
        .service('dataServiceHelper', DataServiceHelper);
}