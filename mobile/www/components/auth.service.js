(function () {
    angular.module('starter.services').service('AuthService', AuthService);
    AuthService.$inject = ['$resource', 'host', 'UserService', '$state', 'localStorageService'];

    function AuthService($resource, host, UserService, $state, localStorageService) {
        var currentUser = {};
        var loginResource = $resource(host + '/auth/local', {}, {});
        var service = {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            getToken: getToken,
            createUser: createUser,
            getCurrentUser: getCurrentUser
        };
        return service;

        function login(user, callback) {
            var cb = callback || angular.noop;
            loginResource.save(user).$promise.then(function (data) {
                localStorageService.set('login-info', user);
                localStorageService.set('token', data.token);
                currentUser = UserService.get();
                $state.go('dashboard.overview');
                return cb();
            }, function (err) {
                return cb(err);
            });
        };


        /**
         * Delete access token and user info
         *
         * @param  {Function}
         */
        function logout() {
            localStorageService.clearAll();
            currentUser = {};
            $state.go('home');
        };

        /**
         * Check if a user is logged in
         *
         * @return {Boolean}
         */
        function isLoggedIn() {
            return currentUser.hasOwnProperty('role');
        };

        /**
         * Get auth token
         */
        function getToken() {
            return localStorageService.get('token');
        };

        /**
         * Create a new user
         *
         * @param  {Object}   user     - user info
         * @return {Promise}
         */
        function createUser(user) {
            return UserService.save(user,
                function (data) {
                    localStorageService.set('token', data.token);
                    currentUser = UserService.get();
                },
                function () {
                    service.logout();
                }.bind(this)).$promise;
        };

        /**
         * Gets all available info on authenticated user
         *
         * @return {Object} user
         */
        function getCurrentUser() {
            return currentUser;
        };
    }


})();
