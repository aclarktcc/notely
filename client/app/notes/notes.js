(function(){
  angular.module('notely.notes',[
    'ui.router'
  ])
  .controller('NotesController', NotesController)
  .config(notesConfig);

  notesConfig['$inject'] = ['$stateProvider'];
  function notesConfig($stateProvider){
    $stateProvider

      .state('notes', {
        url: '/notes',
        templateUrl: '/notes/notes.html',
        controller: NotesController
      })
      .state('notes.form',
        {
          url: '/:noteId',
          templateUrl: '/notes/notes-form.html'

        });
  }
  NotesController['$inject'] = ['$scope', '$state','NotesService'];
  function NotesController($scope, $state, NotesService)
  {
    $scope.note = {
      title : "",
      body_html : ""
    };
    $scope.save = function(){

        NotesService.save($scope.note);
    };


    NotesService.fetch().then(
      function(){
      $scope.notes = NotesService.get();
    });

    $state.go('notes.form');

  }
})();
