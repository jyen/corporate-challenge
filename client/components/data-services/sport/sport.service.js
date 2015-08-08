'use strict';

(function () {
    angular.module('corporateChallengeApp').factory('sportService', sportService);
    sportService.$inject = ['$resource'];
    function sportService($resource) {
        var resource = $resource('/api/sports/:id');

        return {
            getSports: getSports,
            setupSports: setupSports,
            getSport: getSport
        };

        function getSports(year, enabled) {
            var queryParams = {}
            queryParams.year = year;
            queryParams.enabled = enabled;
            return resource.query(queryParams).$promise
                .then(getSportsComplete)
                .catch(getSportsFailed);

            function getSportsComplete(response) {
                return response;
            }

            function getSportsFailed(error) {
            }
        }

        function setupSports() {
            return resource.save({id: 'all'}, {}).$promise
                .then(setupSportsComplete)
                .catch(setupSportsFailed);

            function setupSportsComplete(response) {
                return response;
            }

            function setupSportsFailed(error) {
            }
        }

        function getSport() {

        }
    }
})();
