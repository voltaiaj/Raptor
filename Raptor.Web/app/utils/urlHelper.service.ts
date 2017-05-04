namespace Utils {
    'use strict';

    export interface IUrlHelper {
        addTrailingSlashOnUrl(url: string): string;
        removeTrailingSlashOnUrl(url: string): string;
    }

    export class UrlHelper implements IUrlHelper {
        constructor() { }

        public addTrailingSlashOnUrl(url: string): string {
            return url.replace(/\/?$/, '/');
        }

        public removeTrailingSlashOnUrl(url: string): string {
            return url.replace(/\/+$/, '');
        }
    }

    angular.module('rsis')
        .service('urlHelper', UrlHelper);
}