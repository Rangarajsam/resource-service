angular.module('movieApp.services',[])
.factory('Movie',function($resource){
    return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',{id:'@_id'},{
        update:{
            method:'PUT'
        }
        
    });
})
.factory('popupService',function(){
    return{
        showPopup:function(quest){
            var confirmDelete=confirm(quest);
            console.log(confirmDelete);
            return confirmDelete;
        }
    }
});