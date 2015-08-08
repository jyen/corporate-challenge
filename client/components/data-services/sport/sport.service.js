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

        function updateSport(sport, participate) {
            var params = {};
            params.id = sport._id;

            if (typeof participate !== 'undefined') {
                params.participate = participate;
            }
            return resource.update(params, sport).$promise
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
