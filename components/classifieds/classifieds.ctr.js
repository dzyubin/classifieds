(function () {

    "use strict";

    angular
        .module("classifieds")
        .controller("classifiedsCtrl", function ($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

            var vm = this;

            vm.categories;
            vm.classified;
            vm.classifieds;
            vm.closeSidebar = closeSidebar;
            vm.deleteClassified = deleteClassified;
            vm.editing;
            vm.editClassified = editClassified;
            vm.openSidebar = openSidebar;
            vm.saveClassified = saveClassified;
            vm.saveEdit = saveEdit;

            classifiedsFactory.getClassifieds().then(function (classifieds) {
                vm.classifieds = classifieds.data;
                vm.categories = getCategories(vm.classifieds);
            });

            var contact = {
                name: "Ryan",
                phone: 555555,
                email: 'sdfg@dfg.com'
            };

            function openSidebar() {
                $state.go('classifieds.new');
            }

            function closeSidebar() {
                $mdSidenav('left').close();
            }

            function saveClassified(classified) {
                if (classified) {
                    classified.contact = contact;
                    vm.classifieds.push(classified);
                    vm.classified = {};
                    closeSidebar();
                    showToast("Товар Додано!");
                }
            }

            function editClassified(classified) {
                vm.editing = true;
                openSidebar();
                vm.classified = classified;
            }

            function saveEdit() {
                vm.editing = false;
                vm.classified = {};
                closeSidebar();
                showToast("Редагування збережено!");
            }

            function deleteClassified(event, classified) {
                console.log(classified);
                var confirm = $mdDialog.confirm()
                    .title('Ви справді хочете видалити ' + classified.title + '?')
                    .ok('Так')
                    .cancel('Ні')
                    .targetEvent(event);

                $mdDialog.show(confirm).then(function () {
                    var index = $scope.classifieds.indexOf(classified);
                    vm.classifieds.splice(index, 1);
                }, function () {

                });
            }

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