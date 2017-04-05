(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase:false
        });
        
        $stateProvider
            .state('landing',{
            url:'/',
            templateUrl:'/templates/landing.html'
        })
        
            .state('home',{
            url:'/home',
            controller:'RoomCtrl',
            controllerAs:'room',
            templateUrl:'/templates/home.html'
        });

    }
    
    
    
    angular
        .module('blocChat', ['ui.router','firebase', 'ui.bootstrap', 'ngAnimate','ngCookies'])
        .config(config);
    
})();