(function() {
    function ModalCtrl($uibMModal, $log, $document){
        
        //open modal window to create new chat room
         this.open = function (size, parentSelector) {
             var modalInstance = $uibModal.open({
                 templateUrl: '/templates/modal.html',
                 controller: function($scope, $modalInstance){},
                 size: size,
                 resolve: {
                     items: function () {
                         return $ctrl.items;
                    }
                }
             })
        };
    }
                                                
                                                
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$log', '$document', ModalCtrl])
})();