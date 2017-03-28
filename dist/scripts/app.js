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
        })
            .state('modal',{
            url:'/new-room',
            controller:'RoomCtrl',
            controllerAs:'room',
            templateUrl:'/templates/modal.html'
        });
        

    }
    
    
    
    angular
        .module('blocChat', ['ui.router','firebase', 'ui.bootstrap'])
        .config(config);
    
})();