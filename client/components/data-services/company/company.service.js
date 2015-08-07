'use strict';

(function () {
    angular.module('corporateChallengeApp').factory('companyService', companyService);
    companyService.$inject = ['$resource'];
    function companyService($resource) {
        var resource = $resource('/api/companies')

        return {
            getCompanies: getCompanies,
            createCompany: createCompany,
            updateCompany: updateCompany
        };

        function getCompanies() {
            return resource.query('/api/companies').$promise
                .then(getCompaniesComplete)
                .catch(getCompaniesFailed);

            function getCompaniesComplete(response) {
                return response;
            }

            function getCompaniesFailed(error) {
                logger.error('XHR Failed for getCompanies.' + error.data);
            }
        }

        function createCompany() {

        }

        function updateCompany() {

        }
    }
})();
