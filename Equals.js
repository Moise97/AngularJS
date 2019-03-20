/*      ///// Eqals /////
    Determines if two objects or two values are equivalent. Supports value types,
    regular expressions, arrays and objects.
*/


(function(angular) {
    'use strict';
    angular
        .module('myApp', [])
        .controller('exampleController', ['$scope', function($scope) {
            $scope.user1 = {};
            $scope.user2 = {};
            $scope.compare = function() {
                $scope.result = angular.equals($scope.user1, $scope.user2);
            };
        }]);
})(window.angular);