angular.module('notely')
  .service('UsersService', ['$http','API_BASE', ($http, API_BASE) => {

    class UsersService{
      create(user) {
        let userCreatePromise = $http.post(`${API_BASE}users`, {
          user: user
        });
        userCreatePromise.then((response) => {
          console.log(response.data.user);
        });
        return userCreatePromise;
      };

    }
    return new UsersService();
  }]);


  //
