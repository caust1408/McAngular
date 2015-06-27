var myApp = angular.module('myApp',['ngRoute']);
myApp.controller('mainController',['$scope','$http',function($scope,$http) {
    console.log("from controller");
    
     
        $http.get('/multipleChoice').success(function(response) {
            console.log("got mutiplechoice data");
            $scope.multipleChoice = response;
            $scope.question = "";
            
        });
}]);

myApp.controller('secondController',['$scope','$http',function($scope,$http) {
            
        $http.get('/match').success(function(response) {
            console.log("got match data");
            $scope.match = response;
            $scope.choice = "";
            

        });
    
            $scope.random = function(ansChoice) {
                return Math.random();
            };
            
    
    
}]);

myApp.directive('questionGroup', function() {
    return {
        replace: true,
        compile: function(telm, attrs) {
                var name = telm.attrs;
                //console.log(name);
        }
    }
});

myApp.directive('navigationBar', function() {
    return {
        template:   '<nav class="navbar navbar-default">'
                        +'<div class="container-fluid">'
                            +'<div class="navbar-header">'
                                +'<a class="navbar-brand" href="#">Exam</a>'
                            +'</div>'
                            +'<div>'
                                +'<ul class="nav navbar-nav">'
                                    +'<li class="active"><a href="#">Home</a></li>'
                                    +'<li><a href="#/match">Matching</a></li>'
                                    +'<li><a href="#/true_false">True and False</a></li>' 
                                    +'<li><a href="#/multiple_choice">Multiple Choice</a></li>' 
                                +'</ul>'
                            +'</div>'
                        +'</div>'
                    +'</nav>'
    }
});

myApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/multiple_choice', {
        templateUrl: 'pages/multiplechoice.html',
        controller: 'mainController'
        
    })
    
    .when('/true_false',  {
        templateUrl: 'pages/true_false.html',
        controller: 'mainController'
    })
    
    .when('/match', {
        templateUrl: 'pages/match.html',
        controller: 'secondController'
    })
          
});



