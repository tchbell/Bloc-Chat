(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        
        
        return {
            all: rooms,
            
            roomAdd: function(){
                rooms.$add({room4: "room4"}).then(function(ref) {
                    var id = ref.key;
                    console.log("added record with id " + id);
                    rooms.$indexFor(id);
                })
            }
        
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();