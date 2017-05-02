namespace Raptor.Register {
    'use strict';

    export interface IRegisterDetailsController {
    }

    export class RegisterDetailsController implements IRegisterDetailsController {
        public title: string;
        constructor() {
            this.title = "Register Page"
        }
    }

    angular.module('raptor.register')
        .controller('registerDetailsController', RegisterDetailsController);
}