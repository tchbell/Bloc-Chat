(function () {
    function RoomCtrl(Messages, Room, $uibModal, $log, $document) {
        this.rooms = Room.all;
        this.roomAdd = Room.roomAdd;
        this.selectedRoom="None Selected";
        this.selectedRoomId="None";
        this.getMessages = Messages.getByRoomId(this.selectedRoomId);
        
        



        
        
        
        
        //open modal window to create new chat room
         this.open = function (size) {
             var modalInstance = $uibModal.open({
                 templateUrl: '/templates/modal.html',
                 controller:'ModalCtrl',
                 controllerAs:'modal',
                 size: size,
                 resolve: {
                     items: function () {
                         
                    }
                }
             })
        };
};

    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Messages', 'Room', '$uibModal', '$log', '$document', RoomCtrl]);
})();