(function () {

    "use strict";

    angular
        .module('classifieds')
        .controller('newClassifiedsCtrl', function ($mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

            var vm = this;

            $timeout(function () {
                $mdSidenav('left').open();
            })
        })

}());