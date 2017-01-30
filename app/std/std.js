'use strict';

angular.module('myApp.std', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/std', {
    templateUrl: 'std/std.html',
    controller: 'StdCtrl'
  });
}])
 .controller('StdCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
   
     var rootRef = firebase.database().ref();

        
    $scope.std = $firebaseArray(rootRef);

   $scope.addStd = function () {
        console.log('Adding Student Detail...');

       $scope.std.$add({
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email,
            gender: $scope.gender,
            dob: $scope.dob,
            contact: $scope.contact,
            RollNumber: $scope.RollNumber
        }).then(function (rootRef) {

            var id = rootRef.key;
            console.log('Added std ' + id);

            $scope.firstname='';
            $scope.lastname='';
            $scope.email='';
            $scope.gender='';
            $scope.dob='';
            $scope.contact='';
            $scope.RollNumber='';

        }) 
       
    }

}]);
