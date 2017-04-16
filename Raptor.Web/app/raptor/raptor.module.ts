namespace Raptor {
    'use strict';

    export interface IUtilRootScope extends angular.IRootScopeService {
        pageTitle: string;
    }

    export class UpdateTitle {
        public static $inject: string[] = ['$rootScope'];

        constructor($rootScope: IUtilRootScope) {
            $rootScope.$on('$stateChangeSuccess', (event: angular.IAngularEvent, toState: angular.ui.IState) => {
                $rootScope.pageTitle = toState.data.pageTitle;
            });
        }
    }

    angular.module('raptor', [
        'ui.router',
        'raptor.home'
    ]);

    angular.module('raptor')
        .run(UpdateTitle);
}