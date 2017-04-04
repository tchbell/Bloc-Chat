(function () {
    function RoomCtrl(Messages, Room, $uibModal, $log, $document) {
        this.rooms = Room.all;
        this.roomAdd = Room.roomAdd;
        this.selectedRoom="None";
        this.selectedRoomId="";
        this.getMessages = function(roomId){
            this.roomMessages = Messages.getByRoomId(roomId);
        };
        this.roomMessages = this.getMessages(this.selectedRoomId);
        
        this.select = function(room){
            this.selectedRoom=room.room;
            this.selectedRoomId=room.$id;
            this.getMessages(this.selectedRoomId);
        };

        
        
        
        
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