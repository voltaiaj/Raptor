'use strict';

describe('Utils dataServiceHelper', () => {
    let sut: Utils.IDataServiceHelper,
        $httpBackend: angular.IHttpBackendService,
        actual;

    beforeEach(() => {
        angular.mock.module('utils');

        inject((_dataServiceHelper_: Utils.IDataServiceHelper, _$httpBackend_: angular.IHttpBackendService) => {
            sut = _dataServiceHelper_;
            $httpBackend = _$httpBackend_;
        });
    });

    describe('get', () => {
        
    });
});