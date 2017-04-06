(function () {
    function RoomCtrl(Messages, Room, $uibModal, $log, $document) {
        //Room Service
        this.rooms = Room.all;
        this.roomAdd = Room.roomAdd;
        
        
        //Messages Service
        
        //Setting Current Room
        this.selectedRoom="None";
        this.selectedRoomId="";
        
        //Getting messages for current room
        this.getMessages = function(roomId){
            this.roomMessages = Messages.getByRoomId(roomId);
        };
        this.roomMessages = this.getMessages(this.selectedRoomId);
        
        this.select = function(room){
            this.selectedRoom=room.room;
            this.selectedRoomId=room.$id;
            this.getMessages(this.selectedRoomId);
        };
        
        //Sending messages
        //var value = element(by.binding('example.value | date: "HH:mm:ss"'));
        
        this.time = new Date();
        this.setTime = function(time){
            var newTime = time.toString();
            return newTime;
        };
        
        
        
        
        this.send = function(message, Id, time){ 
            Messages.send(message, this.selectedRoomId, this.setTime(this.time));
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