namespace Raptor.Home.Test {
    'use strict';

    describe('homeIndexController', () => {
        let sut: IHomeIndexController,
            $state: angular.ui.IStateService,
            $scope: angular.IScope,
            $controller: angular.IControllerService;

        beforeEach(() => {
            angular.mock.module('ui.router');
            angular.mock.module('utils');
            angular.mock.module('raptor.home');

            inject((_$controller_: angular.IControllerService,
                _$state_: angular.ui.IStateService,
                _$rootScope_: angular.IRootScopeService) => {
                $controller = _$controller_;
                $state = _$state_;
                $scope = _$rootScope_.$new();
            });

            sut = $controller('homeIndexController');
            $scope.$digest();
        });

        it('should be defined', () => {
            expect(sut).toBeDefined();
        });
    });
}