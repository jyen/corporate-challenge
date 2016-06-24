'use strict';

(function () {
    class sportUtils {
        constructor() {
            
        }
        getSportsByUser(allSports, user) {
            return _.filter(allSports, (n) => {
                return _.find(n.members, {'email': user.email}) ? true : false;
            });

        }
    }
    angular.module('corporateChallengeApp').service('sportUtils', sportUtils);
})();
