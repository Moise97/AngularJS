/*          ///// Bootstrap /////

    Use this function to manually start up AngularJS applications.
    Protractor based end-to-end tests cannot use this function to bootstrap manually.
    They must use ngApp!
*/

var App = angular.module("myApp", [])
    .controller('welcomeController', function($scope){
        $scope.message = "Welcome to AngularJS";
    });

angular.bootstrap(document, ['myApp']);