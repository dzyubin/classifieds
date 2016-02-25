(function (){

    "use strict";

    angular
        .module("classifieds")
        .factory("classifiedsFactory", function ($http, $firebaseArray) {

            var ref = new Firebase('https://class1f1eds.firebaseio.com/');

            return {
                ref: $firebaseArray(ref)
            }
        });
}());