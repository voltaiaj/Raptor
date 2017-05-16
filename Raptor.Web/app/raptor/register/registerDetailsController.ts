namespace Raptor.Register {
    'use strict';

    export interface IRegisterDetailsController {
        register(): void;
    }

    export class RegisterDetailsController implements IRegisterDetailsController {
        public title: string;
        constructor() {
            this.title = "Register Page";
        }

        public register(): void {

        }
    }

    angular.module('raptor.register')
        .controller('registerDetailsController', RegisterDetailsController);
}