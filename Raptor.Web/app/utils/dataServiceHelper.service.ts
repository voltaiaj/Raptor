namespace Utils {
    'use strict';

    export interface IDataServiceHelper {
        get(url: string): angular.IHttpPromise<any>;
        getWithKey(url: string, key: number): angular.IHttpPromise<any>;
        getWithStringKey(url: string, key: string): angular.IHttpPromise<any>;
        getWithQuerystring(url: string, params: any): angular.IHttpPromise<any>;
        postWithParameters(url: string, params: any): angular.IHttpPromise<any>;
        postWithParametersForFileUpload(url: string, params: any): angular.IHttpPromise<any>;
        postWithoutParameters(url: string): any;
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

        public getWithKey(url: string, key: number) {
            let fullUrl: string = this.urlHelper.addTrailingSlashOnUrl(url) + key;
            return this.$http.get(fullUrl);
        }

        public getWithStringKey(url: string, key: string) {
            let fullUrl: string = this.urlHelper.addTrailingSlashOnUrl(url) + key;
            return this.$http.get(fullUrl);
        }

        public getWithQuerystring<T>(url: string, params: T) {
            return this.$http.get(this.urlHelper.removeTrailingSlashOnUrl(url), { params: params });
        }

        public postWithParameters<T>(url: string, params: T) {
            return this.$http.post(this.urlHelper.removeTrailingSlashOnUrl(url), params);
        }

        public postWithoutParameters(url: string) {
            return this.$http.post(this.urlHelper.removeTrailingSlashOnUrl(url), {});
        }

        public postWithParametersForFileUpload<T>(url: string, params: T) {
            return this.$http.post(this.urlHelper.removeTrailingSlashOnUrl(url),
                params,
                {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                });
        }
    }

    angular.module('utils')
        .service('dataServiceHelper', DataServiceHelper);
}