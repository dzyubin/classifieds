angular
    .module("classifieds", ["ngMaterial", "ui.router", "firebase"])
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('orange');

        $urlRouterProvider.when('', '/classifieds');

        $stateProvider
            .state('/', {
                url: '/classifieds',
                templateUrl: 'components/classifieds/classifieds.tpl.html',
                controller: 'classifiedsCtrl as vm'
            })
            .state('classifieds', {
                url: '/classifieds',
                templateUrl: 'components/classifieds/classifieds.tpl.html',
                controller: 'classifiedsCtrl as vm'
            })
            .state('classifieds.new', {
                url: '/new',
                templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
                controller: 'newClassifiedsCtrl as vm'
            })
            .state('classifieds.edit', {
                url: '/edit/:id',
                templateUrl: 'components/classifieds/edit/classifieds.edit.tpl.html',
                controller: 'editClassifiedsCtrl as vm',
                params: {
                    classified: null
                }
            })
    });