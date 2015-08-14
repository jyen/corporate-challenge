'use strict';

(function () {

    class companyService {
        /*@ngInject*/
        constructor($resource) {
            this.resource = $resource('/api/companies/:id', null, {
                'update': {method: 'PUT'}
            });
        }

        getCompanies() {
            return this.resource.query().$promise
                .then(getCompaniesComplete)
                .catch(getCompaniesFailed);

            function getCompaniesComplete(response) {
                return response;
            }

            function getCompaniesFailed() {
            }
        }

        createCompany(company) {
            return this.resource.save(company).$promise
                .then(createCompanyComplete)
                .catch(createCompanyFailed);

            function createCompanyComplete(response) {
                return response;
            }

            function createCompanyFailed() {
            }
        }

        updateCompany(company) {
            return this.resource.update({id: company._id}, company).$promise
                .then(updateCompanyComplete)
                .catch(updateCompanyFailed);

            function updateCompanyComplete(response) {
                return response;
            }

            function updateCompanyFailed() {
            }
        }

        getCompany(id) {
            return this.resource.get({id: id}).$promise
                .then(getCompanyComplete)
                .catch(getCompanyFailed);
            function getCompanyComplete(response) {
                return response;
            }

            function getCompanyFailed() {
            }

        }
    }
    angular.module('corporateChallengeApp').service('companyService', companyService);
})();
