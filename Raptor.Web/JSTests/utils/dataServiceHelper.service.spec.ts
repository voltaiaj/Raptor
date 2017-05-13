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

    describe('getWithKey', () => {
        let fulfilledCallbackSpy,
            rejectedCallbackSpy,
            response,
            expectedUrl = 'myUrl/7',
            expectedSuccessResponse = { somePropery: 'bob' },
            expectedErrorResponse = 'There was an errror...';

        beforeEach(() => {
            fulfilledCallbackSpy = sinon.spy();
            rejectedCallbackSpy = sinon.spy();
            actual = sut.getWithKey('myUrl/', 7)
                .then(fulfilledCallbackSpy, rejectedCallbackSpy);
        });

        afterEach(() => {
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        });

        it('should be defined on the service and GET from the expected URL with expected key value at end', () => {
            expect(sut.getWithKey).toBeDefined();
            $httpBackend.expectGET(expectedUrl).respond(true);
            $httpBackend.flush();
        });

        it('should execute the on fulfilled callback of the promise when the request is successful', () => {
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

        it('should execute the error callback of the promise when the request is NOT successful', () => {
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

    describe('getWithStringKey', () => {
        let fulfilledCalledbackSpy,
            rejectedCallbackSpy,
            response,
            expectedUrl = 'myUrl/7',
            expectedSuccessResonse = { someProperty: 'jane' },
            expectedErrorResponse = 'There was an error...';

        beforeEach(() => {
            fulfilledCalledbackSpy = sinon.spy();
            rejectedCallbackSpy = sinon.spy();
            actual = sut.getWithStringKey('myUrl/', '7')
                .then(fulfilledCalledbackSpy, rejectedCallbackSpy);
        });

        afterEach(() => {
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        });

        it('should be defined on the service and GET from the expected URL with expected key value at end', () => {
            expect(sut.getWithStringKey).toBeDefined();
            $httpBackend.expectGET(expectedUrl).respond(true);
            $httpBackend.flush();
        });

        it('should execute the on fulfilled callback of the promise when the request is successful', () => {
            $httpBackend.expectGET(expectedUrl).respond(200, expectedSuccessResonse);
            $httpBackend.flush();

            expect(fulfilledCalledbackSpy.calledOnce).toBe(true);
            expect(rejectedCallbackSpy.called).toBe(false);

            response = fulfilledCalledbackSpy.getCall(0).args[0];
            expect(response.status).toBeDefined();
            expect(response.status).toBe(200);
            expect(response.data).toBeDefined();
            expect(response.data).toEqual(expectedSuccessResonse);
            expect(response.data).not.toEqual(expectedErrorResponse);
        });

        it('should execute the error callback of the promise when the request is NOT successful', () => {
            $httpBackend.expectGET(expectedUrl).respond(400, expectedErrorResponse);
            $httpBackend.flush();

            expect(rejectedCallbackSpy.calledOnce).toBe(true);
            expect(fulfilledCalledbackSpy.called).toBe(false);

            response = rejectedCallbackSpy.getCall(0).args[0];
            expect(response.status).toBeDefined();
            expect(response.status).toBe(400);
            expect(response.data).toBeDefined();
            expect(response.data).toEqual(expectedErrorResponse);
            expect(response.data).not.toEqual(expectedSuccessResonse);
        });
    });

    describe('getWithQuerystring', () => {
        let fulfilledCallbackSpy,
            rejectedCallbackSpy,
            response,
            expectedUrl = new RegExp('myModel/mySearch\\?page=5&searchText=blah&sord=DESC'),
            expectedSuccessResponse = { blah: 'moreBlah' },
            expectedErrorResponse = 'There was an error...';

        beforeEach(() => {
            fulfilledCallbackSpy = sinon.spy();
            rejectedCallbackSpy = sinon.spy();
            actual = sut.getWithQuerystring('myModel/mySearch', { searchText: 'blah', page: 5, sord: 'DESC' })
                .then(fulfilledCallbackSpy, rejectedCallbackSpy);
        });

        afterEach(() => {
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        });

        it('should be defined on the service and GET from the expected URL with expected key value at the end', () => {
            expect(sut.getWithQuerystring).toBeDefined();
            $httpBackend.expectGET(expectedUrl).respond(true);
            $httpBackend.flush();
        });

        it('should execute the on fulfilled callback of the promise when the request is successful', () => {
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

        it('should execute the error callback of the promise when the request is NOT successful', () => {
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

    describe('postWithoutParameters', () => {
        let fulfilledCallbackSpy,
            rejectedCallbackSpy,
            response,
            expectedUrl = 'myUrl/whichIsPostingData',
            expectedSuccessResponse = { id: 42 },
            expectedErrorResponse = { ModelState: ['server side validation error1'] };

        beforeEach(() => {
            fulfilledCallbackSpy = sinon.spy();
            rejectedCallbackSpy = sinon.spy();

            actual = sut.postWithoutParameters('myUrl/whichIsPostingData')
                .then(fulfilledCallbackSpy, rejectedCallbackSpy);
        });

        afterEach(() => {
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        });

        it('should be defined on the service and POST to the expected URL', () => {
            expect(sut.postWithoutParameters).toBeDefined();
            $httpBackend.expectPOST(expectedUrl).respond(true);
            $httpBackend.flush();
        });

        it('should execute the on fulfilled callback of the promise when the request is successful', () => {
            $httpBackend.expectPOST(expectedUrl).respond(200, expectedSuccessResponse);
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

        it('should execute the error callback of the promise when the request is NOT successful', () => {
            $httpBackend.expectPOST(expectedUrl).respond(400, expectedErrorResponse);
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