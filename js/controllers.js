angular.module('movieApp.controllers', [])
    .controller('MovieListController', function ($scope, $state, popupService, $window, Movie) {
            
            $scope.movies = Movie.query();
            console.log($scope.movies);
            $scope.deleteMovie = function (movie) {
                if (popupService.showPopup('Really Delete this Movie?')) {

                    movie.$delete(function () {
                        $window.location.href = '';
                    });
                }
            };
            
})
.controller('MovieViewController',function($scope,$stateParams,Movie){
    
    $scope.movie=Movie.get({id:$stateParams.id});
    console.log($scope.movie);
})
.controller('MovieCreateController',function($scope,$state,$stateParams,Movie){
    
    $scope.movie=new Movie();
    $scope.addMovie=function(){
        $scope.movie.$save(function(){
            $state.go('movies');
        });
    };
})
.controller('MovieEditController',function($scope,$state,$stateParams,Movie){
    
    $scope.movie=new Movie();
    $scope.updateMovie=function(){
        $scope.movie.$update(function(){
            $state.go('movies');
        });
    };
    $scope.loadMovie=function(){
        $scope.movie=Movie.get({id:$stateParams.id});
    };
    $scope.loadMovie();
})

