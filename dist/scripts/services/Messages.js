(function(){
    function Messages($cookies, $firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        


        
        return{
            
            getByRoomId: function(roomId){
                var ref = firebase.database().ref().child("messages").orderByChild('roomId').equalTo(roomId);
                var messages = $firebaseArray(ref);
                return messages;

            },
            
            user: function(){
                return $cookies.get('blocChatCurrentUser');
            },
            
            send: function(newMessage, roomId, time) {
                //sets username stored in cookies
                var user = $cookies.get('blocChatCurrentUser');
                messages.$add({content: newMessage, roomId: roomId, sentAt: time, userName: user });
                
            
            }
            
        }
            
    };
    
    
    angular
        .module('blocChat')
        .factory('Messages', ['$cookies', '$firebaseArray', Messages]);
    
})();