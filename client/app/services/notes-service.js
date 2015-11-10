angular.module('notely')
.service('NotesService', NotesService);

NotesService.$inject = ['$http'];
function NotesService($http){
  this.notes = [];

  this.fetch = function(){
    $http.get('http://localhost:3000/notes')
    .success(function(notesData){
      console.log(notesData);
    });
  };
};
