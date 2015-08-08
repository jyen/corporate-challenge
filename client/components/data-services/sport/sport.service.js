'use strict';

(function () {
    angular.module('corporateChallengeApp').factory('sportService', sportService);
    sportService.$inject = ['$resource'];
    function sportService($resource) {
        var resource = $resource('/api/sports/:id', null, {
            'update': {method: 'PUT'}
        });

        return {
            getSports: getSports,
            setupSports: setupSports,
            getSport: getSport,
            updateSport: updateSport
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

        function updateSport(sport) {
            return resource.update({id: sport._id}, sport).$promise
                .then(updateSportComplete)
                .catch(updateSportFailed);

            function updateSportComplete(response) {
                return response;
            }

            function updateSportFailed(error) {
            }
        }
    }
})();
