'use strict';

(function () {

    class userService {
        /*@ngInject*/
        constructor($resource) {
            this.resource = $resource('/api/users/:id', null, {
                'update': {method: 'PUT'}
            });
        }

        getUser(id) {
            return this.resource.get().$promise
                .then(getUserComplete)
                .catch(getUserFailed);

            function getUserComplete(response) {
                return response;
            }

            function getUserFailed() {
            }
        }
        
        updateUser(user) {
            return this.resource.update({id: user._id}, user).$promise
                .then(updateUserComplete)
                .catch(updateUserFailed);

            function updateUserComplete(response) {
                return response;
            }

            function updateUserFailed() {
            }
        }
    }
    angular.module('corporateChallengeApp').service('userService', userService);
})();
