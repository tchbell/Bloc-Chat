(function(){
    function UserNameCtrl($cookies, $uibModalInstance){

        
        this.setUserName = function(name){
            $cookies.put('blocChatCurrentUser', name );
            $uibModalInstance.close();
        }

    }
    
    
    angular
        .module('blocChat')
        .controller('UserNameCtrl', ['$cookies', '$uibModalInstance', UserNameCtrl]);
})();