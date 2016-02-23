(function () {

    "use strict";

    angular
        .module("classifieds")
        .controller("classifiedsCtrl", function ($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

            classifiedsFactory.getClassifieds().then(function (classifieds) {
                $scope.classifieds = classifieds.data;
                $scope.categories = getCategories($scope.classifieds);
            });

            var contact = {
                name: "Ryan",
                phone: 555555,
                email: 'sdfg@dfg.com'
            };

            $scope.openSidebar = function () {
                $mdSidenav('left').open();
            };

            $scope.closeSidebar = function () {
                $mdSidenav('left').close();
            };

            $scope.saveClassified = function (classified) {
                if (classified) {
                    classified.contact = contact;
                    $scope.classifieds.push(classified);
                    $scope.classified = {};
                    $scope.closeSidebar();
                    showToast("Товар Додано!");
                }
            };

            $scope.editClassified = function (classified) {
                $scope.editing = true;
                $scope.openSidebar();
                $scope.classified = classified;
            };

            $scope.saveEdit = function () {
                $scope.editing = false;
                $scope.classified = {};
                $scope.closeSidebar();
                showToast("Редагування збережено!");
            };

            $scope.deleteClassified = function (event, classified) {
                console.log(classified);
                var confirm = $mdDialog.confirm()
                    .title('Ви справді хочете видалити ' + classified.title + '?')
                    .ok('Так')
                    .cancel('Ні')
                    .targetEvent(event);

                $mdDialog.show(confirm).then(function () {
                    var index = $scope.classifieds.indexOf(classified);
                    $scope.classifieds.splice(index, 1);
                }, function () {

                });
            };

            function showToast(message) {
                $mdToast.show(
                    $mdToast.simple()
                        .content(message)
                        .position('top, right')
                        .hideDelay(3000)
                );
            }

            function getCategories(classifieds) {

                var categories = [];

                angular.forEach(classifieds, function (item) {
                    angular.forEach(item.categories, function (category) {
                        categories.push(category)
                    });
                });

                return _.uniq(categories);
            }

        })
}());