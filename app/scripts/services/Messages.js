(function(){
    function Messages($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        


        
        return{
            
            getByRoomId: function(roomId){
                var ref = firebase.database().ref().child("messages").orderByChild('roomId').equalTo(roomId);
                var messages = $firebaseArray(ref);
                return messages;
                
                
                
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', Messages]);
    
})();