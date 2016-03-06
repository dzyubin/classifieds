(function () {

    "use strict";

    angular
        .module('classifieds')
        .controller('loginClassifiedsCtrl', function ($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

            this.sidenavOpen = true;

            $scope.login = function () {
                $scope.message = "Welcome " + $scope.user.email;
            };
        });
}());