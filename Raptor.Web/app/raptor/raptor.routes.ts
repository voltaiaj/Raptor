namespace Raptor {
    'use strict';

    class RouteConfig {
        public static $inject: string[] = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

        constructor($stateProvider: angular.ui.IStateProvider,
                    $urlRouteProvider: angular.ui.IUrlRouterProvider,
                    $locationProvider: angular.ILocationProvider) {
            $urlRouteProvider.otherwise('/');

            $stateProvider.state('homeIndex',
                {
                    url: '/',
                    templateUrl: 'app/raptor/home/homeIndex.html',
                    controller: 'homeIndexController as vm',
                    data: { pageTitle: 'Home'}
                });

            $locationProvider.html5Mode(false);
        }
    }

    angular.module('raptor')
        .config(RouteConfig);
}