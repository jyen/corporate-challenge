'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
    var sportService = (function () {
        /*@ngInject*/

        function sportService($resource) {
            _classCallCheck(this, sportService);

            this.resource = $resource('/api/sports/:id', null, {
                'update': { method: 'PUT' }
            });
        }

        _createClass(sportService, [{
            key: 'getSports',
            value: function getSports(year, enabled) {
                var queryParams = {};
                queryParams.year = year;
                queryParams.enabled = enabled;
                return this.resource.query(queryParams).$promise.then(getSportsComplete)['catch'](getSportsFailed);

                function getSportsComplete(response) {
                    return response;
                }

                function getSportsFailed(error) {}
            }
        }, {
            key: 'setupSports',
            value: function setupSports() {
                return this.resource.save({ id: 'all' }, {}).$promise.then(setupSportsComplete)['catch'](setupSportsFailed);

                function setupSportsComplete(response) {
                    return response;
                }

                function setupSportsFailed(error) {}
            }
        }, {
            key: 'getSport',
            value: function getSport() {}
        }, {
            key: 'updateSport',
            value: function updateSport(sport, participate) {
                var params = {};
                params.id = sport._id;

                if (typeof participate !== 'undefined') {
                    params.participate = participate;
                }
                return this.resource.update(params, sport).$promise.then(updateSportComplete)['catch'](updateSportFailed);

                function updateSportComplete(response) {
                    return response;
                }

                function updateSportFailed(error) {}
            }
        }]);

        return sportService;
    })();

    angular.module('corporateChallengeApp').service('sportService', sportService);
})();
//# sourceMappingURL=sport.service.js.map
