(function () {
    function RoomCtrl(Room, $uibModal, $log, $document) {
        this.rooms = Room.all;
        this.roomAdd = Room.roomAdd;
        
        
        this.animationsEnabled = true;
        
        //open modal window to create new chat room
         this.open = function (size) {
             var modalInstance = $uibModal.open({
                 templateUrl: '/templates/modal.html',
                 size: size,
                 resolve: {
                     items: function () {
                         
                    }
                }
             })
        };
    }

    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', '$log', '$document', RoomCtrl]);
})();