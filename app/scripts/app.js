(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase:false
        });
        
        $stateProvider
            .state('home', {
            url:'/',
            templateUrl:'/templates/pages.html'
        });
    }
    
    
    
    angular
        .module('blocChat', ['ui-router', 'firebase'])
        .config(config);
    
    
})();