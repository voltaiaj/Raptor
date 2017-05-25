namespace Raptor.Register {
    'use strict';

    export interface IRegisterService {
    }

    export class RegisterService implements IRegisterService {
        public static $inject: string[] = [''];

        constructor() {

        }
    }

    angular.module('raptor.register')
        .service('registerService', RegisterService);
}