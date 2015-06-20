var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http) {
    console.log("from controller");
    
     
        $http.get('/multipleChoice').success(function(response) {
            console.log("got data");
            $scope.multipleChoice = response;
            $scope.question = "";
            
        });
    
        
    


    
    
}]);

myApp.directive('questionGroup', function() {
    return {
        template: '<div ng-repeat="question in multipleChoice"> <div> {{$index + 1}}) {{question.text}} <div ng-repeat="choice in question.decoys | limitTo:2" class="alert" ><label><input value="{{choice}}" type="radio" name="{{$index}}"/>{{choice}}</label></div></div>  </div>'
                }
    
});



