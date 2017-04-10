(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase:false
        });
        
        $stateProvider
        
            .state('home',{
            url:'/',
            controller:'RoomCtrl',
            controllerAs:'room',
            templateUrl:'/templates/home.html'
        });

    }
    
    
    
    angular
        .module('blocChat', ['ui.router','firebase', 'ui.bootstrap', 'ngAnimate','ngCookies'])
        .config(config);
    
})();