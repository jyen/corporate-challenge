'use strict';

(function () {
    angular.module('corporateChallengeApp').factory('companyService', companyService);
    companyService.$inject = ['$resource'];
    function companyService($resource) {
        var resource = $resource('/api/companies/:id');

        return {
            getCompanies: getCompanies,
            createCompany: createCompany,
            updateCompany: updateCompany,
            getCompany: getCompany
        };

        function getCompanies() {
            return resource.query().$promise
                .then(getCompaniesComplete)
                .catch(getCompaniesFailed);

            function getCompaniesComplete(response) {
                return response;
            }

            function getCompaniesFailed(error) {
            }
        }

        function createCompany(company) {
            return resource.save(company).$promise
                .then(createCompanyComplete)
                .catch(createCompanyFailed);

            function createCompanyComplete(response) {
                return response;
            }

            function createCompanyFailed(error) {
            }
        }

        function updateCompany() {

        }

        function getCompany(id) {
            return resource.get({id: id}).$promise
                .then(getCompanyComplete)
                .catch(getCompanyFailed);
            function getCompanyComplete(response) {
                return response;
            }

            function getCompanyFailed(error) {
            }

        }
    }
})();
