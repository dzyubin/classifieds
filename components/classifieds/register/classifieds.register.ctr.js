(function () {

    "use strict";

    angular
        .module('classifieds')
        .controller('registerClassifiedsCtrl', function ($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {
            this.sidenavOpen = true;
        });
}());