(function () {
    function RoomCtrl(Room) {
        this.rooms = Room.Room();
    }
    
    angular
        .module('blocChat', [])
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();