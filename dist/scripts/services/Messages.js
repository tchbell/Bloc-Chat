(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        
        return{
            getByRoomId: function(roomId){
            
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
    
})();