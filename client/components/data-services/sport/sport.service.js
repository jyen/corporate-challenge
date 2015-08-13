'use strict';

(function () {

    class sportService {
        /*@ngInject*/
        constructor($resource) {
            this.resource = $resource('/api/sports/:id', null, {
                'update': {method: 'PUT'}
            });
        }

        getSports(year, enabled) {
            var queryParams = {};
            queryParams.year = year;
            queryParams.enabled = enabled;
            return this.resource.query(queryParams).$promise
                .then(getSportsComplete)
                .catch(getSportsFailed);

            function getSportsComplete(response) {
                return response;
            }

            function getSportsFailed(error) {
            }
        }

        setupSports() {
            return this.resource.save({id: 'all'}, {}).$promise
                .then(setupSportsComplete)
                .catch(setupSportsFailed);

            function setupSportsComplete(response) {
                return response;
            }

            function setupSportsFailed(error) {
            }
        }

        getSport() {

        }

        updateSport(sport, participate) {
            var params = {};
            params.id = sport._id;

            if (typeof participate !== 'undefined') {
                params.participate = participate;
            }
            return this.resource.update(params, sport).$promise
                .then(updateSportComplete)
                .catch(updateSportFailed);

            function updateSportComplete(response) {
                return response;
            }

            function updateSportFailed(error) {
            }
        }
    }
    angular.module('corporateChallengeApp').service('sportService', sportService);
})();
