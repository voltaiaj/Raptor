namespace Raptor.Register {
    'use strict';

    export interface IRegisterDetailsController {
        register(): void;
    }

    export class RegisterDetailsController implements IRegisterDetailsController {
        public title: string;
        constructor() {
            this.activate();
        }

        public register(): void {

        }

        private activate(): void {
            this.title = "Register Page";
        }
    }

    angular.module('raptor.register')
        .controller('registerDetailsController', RegisterDetailsController);
}