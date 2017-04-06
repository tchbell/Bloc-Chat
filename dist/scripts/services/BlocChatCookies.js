(function(){
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        if(!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl:"/templates/user-name-modal.html",
                controller:"UserNameCtrl",
                controllerAs:"user",
                size:'sm',
                backdrop:false
                
            });
        }
        
    }
    
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
    
})();