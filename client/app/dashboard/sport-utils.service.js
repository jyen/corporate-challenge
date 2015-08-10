'use strict';

(function () {
    angular.module('corporateChallengeApp').service('sportUtils', sportUtils);
    sportUtils.$inject = [];
    function sportUtils() {
        var service = {
            getSportsByUser: getSportsByUser
        };

        return service;

        function getSportsByUser(allSports, user) {
            return _.filter(allSports, function (n) {
                return _.find(n.members, {'email': user.email}) ? true : false;
            });

        }

    }
})();
