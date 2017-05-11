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
        let fulfilledCallbackSpy,
            rejectedCallbackSpy,
            response,
            expectedUrl = 'myUrl',
            expectedSuccessResponse = { someProperty: 'jane' },
            expectedErrorResponse = 'There was an error...';

        beforeEach(() => {
            fulfilledCallbackSpy = sinon.spy();
            rejectedCallbackSpy = sinon.spy();
            actual = sut.get('myUrl/')
                .then(fulfilledCallbackSpy, rejectedCallbackSpy);
        });

        afterEach(() => {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should be defined on the service and GET from the expected URL', () => {
            expect(sut.get).toBeDefined();
            $httpBackend.expectGET(expectedUrl).respond(true);
            $httpBackend.flush();
        });

        it('should execute the onFulFulled callback of the promise when the request is successful', () => {
            $httpBackend.expectGET(expectedUrl).respond(200, expectedSuccessResponse);
            $httpBackend.flush();

            expect(fulfilledCallbackSpy.calledOnce).toBe(true);
            expect(rejectedCallbackSpy.called).toBe(false);

            response = fulfilledCallbackSpy.getCall(0).args[0];
            expect(response.status).toBeDefined();
            expect(response.status).toBe(200);
            expect(response.data).toBeDefined();
            expect(response.data).toEqual(expectedSuccessResponse);
            expect(response.data).not.toEqual(expectedErrorResponse);
        });

        it('should execute the error callback of the promise when the request when the request is NOT successful', () => {
            $httpBackend.expectGET(expectedUrl).respond(400, expectedErrorResponse);
            $httpBackend.flush();

            expect(rejectedCallbackSpy.calledOnce).toBe(true);
            expect(fulfilledCallbackSpy.called).toBe(false);

            response = rejectedCallbackSpy.getCall(0).args[0];
            expect(response.status).toBeDefined();
            expect(response.status).toBe(400);
            expect(response.data).toBeDefined();
            expect(response.data).toEqual(expectedErrorResponse);
            expect(response.data).not.toEqual(expectedSuccessResponse);

        });
    });
});