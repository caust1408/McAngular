var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http) {
    console.log("from controller");
    
     
        $http.get('/multipleChoice').success(function(response) {
            console.log("got data");
            $scope.multipleChoice = response;
            $scope.question = "";
        });
}]);



