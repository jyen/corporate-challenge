(function () {
  'use strict';

  angular.module('starter.services').service('UserService', UserService);
  UserService.$inject = ['$resource', 'host'];
  function UserService($resource, host) {

    return $resource(host + '/api/users/:id/:controller', {
        id: '@_id'
      },
      {
        changePassword: {
          method: 'PUT',
          params: {
            controller: 'password'
          }
        },
        get: {
          method: 'GET',
          params: {
            id: 'me'
          }
        }
      });
  }

})();
