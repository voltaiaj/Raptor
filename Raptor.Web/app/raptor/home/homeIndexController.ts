namespace Raptor.Home {
    'use strict';

    export interface IHomeIndexController {
    }

    export class HomeIndexController implements IHomeIndexController {
        public title: string;
        public static $inject: string[] = ['$state'];

        constructor($state) {
            this.title = 'Hello World';
        }
    }

    angular.module('raptor.home')
        .controller('homeIndexController', HomeIndexController);
}