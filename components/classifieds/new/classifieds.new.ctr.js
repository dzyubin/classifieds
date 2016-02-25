(function () {

    "use strict";

    angular
        .module('classifieds')
        .controller('newClassifiedsCtrl', function ($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

            var vm = this;
            vm.closeSidebar = closeSidebar;
            vm.saveClassified = saveClassifeid;
            $timeout(function () {
                $mdSidenav('left').open();
            });

            $scope.$watch('vm.sidenavOpen', function (sidenav) {
                if (sidenav === false) {
                    $mdSidenav('left')
                        .close()
                        .then(function () {
                            $state.go('classifieds');
                        });
                }
            });

            function closeSidebar() {
                vm.sidenavOpen = false;
            }

            function saveClassifeid(classified) {
                if (classified) {
                    classified.contact = {
                        name: "Ryan",
                        phone: 555555,
                        email: 'sdfg@dfg.com'
                    };

                    $scope.$emit('newClassified', classified);
                    vm.sidenavOpen = false;
                }
            }
        });
}());