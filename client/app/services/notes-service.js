angular.module('notely')
.service('NotesService', NotesService);

NotesService.$inject = ['$http'];
function NotesService($http){
  var self = this;

  self.notes = [];

  self.fetch = function(){
     return $http.get('http://localhost:3000/notes')
    .then(
      //Success
      function(response){
      self.notes = response.data;

    },
    //Fail
    function(response){
      //TODO: Handle failure
    });
  };

  self.get = function(){
    return self.notes;
  };

  self.findById = function(noteId){

    for(var i = 0; i < self.notes.length; i++)
    {
      if(self.notes[i]._id === noteId)
      {
        //angular.copy will do a deep copy
        return angular.copy(self.notes[i]);

      }
    }
    return {};
  };

  self.save = function(note){

    $http.post('http://localhost:3000/notes', { "note": note})
   .then(
     //Success
     function(response){

       self.notes.unshift(response.data.note);
   },
   //Fail
   function(response){
     //TODO: Handle failure
   });
 };


};
