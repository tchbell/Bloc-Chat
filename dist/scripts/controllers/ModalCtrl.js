(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        //Holds new room Name
        this.roomName=null;
        
        //Closes modal window
        this.ok =function(){
            $uibModalInstance.close();
        };
        

        
        this.roomAdd = Room.roomAdd;
        
    };
                                                
                                                
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room','$uibModalInstance', ModalCtrl])
})();