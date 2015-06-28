var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('mainController', ['$scope' ,'$http' ,'$route' ,function($scope,$http,$route) {
   
     $http.get('/multipleChoice').success(function(response) {
          $scope.multipleChoice = response;
          $scope.question = "";
          $scope.$route = $route;
     });   
}]);

myApp.controller('secondController',['$scope','$http','$route',function($scope,$http,$route) {
    
     $http.get('/match').success(function(response) {
          $scope.match = response;
          $scope.choice = "";
          $scope.$route = $route;
          $scope.random = function(ansChoice) {   
               return Math.random();
            };
            
        });
}]);

myApp.controller('thirdController',['$scope','$http','$route',function($scope,$http,$route) {

     $scope.$route = $route;
     
}]);

myApp.controller('fourthController',['$scope','$http','$route',function($scope,$http,$route) {
    
         $http.get('/truefalse').success(function(response) {
          $scope.tandf = response;
          $scope.choice = "";
          $scope.$route = $route; 

          $scope.$route = $route;
              
         });
         

}]);




/*myApp.directive('navigationBar', function() {
    return {
        template:   '<nav class="navbar navbar-default">'
                        +'<div class="container-fluid">'
                            +'<div class="navbar-header">'
                                +'<a class="navbar-brand" href="#">Exam</a>'
                            +'</div>'
                            +'<div>'
                                +'<ul class="nav navbar-nav">'
                                    +'<li ng-class="{active: $route.current.activeTab == "Home"}"><a href="#">Home</a></li>'
                                    +'<li ng-class="{active: $route.current.activeTab == "Match"}"><a href="#/match">Matching</a></li>'
                                    +'<li><a href="#/true_false">True and False</a></li>' 
                                    +'<li><a href="#/multiple_choice">Multiple Choice</a></li>' 
                                +'</ul>'
                            +'</div>'
                        +'</div>'
                    +'</nav>'
    }
});
*/


myApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/multiple_choice', {
        templateUrl: 'pages/multiplechoice.html',
        controller: 'mainController',
        activeTab: 'Multchoice'
        
    })
    
    .when('/truefalse',  {
        templateUrl: 'pages/truefalse.html',
        controller: 'fourthController',
        activeTab: 'True/False'
    })
    
    .when('/match', {
        templateUrl: 'pages/match.html',
        controller: 'secondController',
        activeTab: 'Match'
    })
    
    .when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'thirdController',
        activeTab: 'Home'
    })
    
    .otherwise({
        redirectTo:'/home'
    })
         
});





