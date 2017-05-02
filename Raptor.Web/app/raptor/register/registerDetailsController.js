var Raptor;
(function (Raptor) {
    var Register;
    (function (Register) {
        'use strict';
        var RegisterDetailsController = (function () {
            function RegisterDetailsController() {
                this.title = "Register Page";
            }
            return RegisterDetailsController;
        }());
        Register.RegisterDetailsController = RegisterDetailsController;
        angular.module('raptor.register')
            .controller('registerDetailsController', RegisterDetailsController);
    })(Register = Raptor.Register || (Raptor.Register = {}));
})(Raptor || (Raptor = {}));
