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
        template: '<div ng-repeat="question in multipleChoice">'
                     +'<div class="radio" name="{{$index}}"> {{$index + 1}}) {{question.text}}'
                        +'<div ng-repeat="choice in question.decoys | limitTo:4" class="alert">'
                            +'<label><input name="{{$parent.$index}}" value="{{choice}}" type="radio"/>{{choice}}</label>'
                        +'</div>'
                    +'</div>'  
                  +'</div>',
        replace: true
    }
});



