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

            function getCompaniesFailed(error) {
            }
        }

        createCompany(company) {
            return this.resource.save(company).$promise
                .then(createCompanyComplete)
                .catch(createCompanyFailed);

            function createCompanyComplete(response) {
                return response;
            }

            function createCompanyFailed(error) {
            }
        }

        updateCompany(company) {
            return this.resource.update({id: company._id}, company).$promise
                .then(updateCompanyComplete)
                .catch(updateCompanyFailed);

            function updateCompanyComplete(response) {
                return response;
            }

            function updateCompanyFailed(error) {
            }
        }

        getCompany(id) {
            return this.resource.get({id: id}).$promise
                .then(getCompanyComplete)
                .catch(getCompanyFailed);
            function getCompanyComplete(response) {
                return response;
            }

            function getCompanyFailed(error) {
            }

        }
    }
    angular.module('corporateChallengeApp').service('companyService', companyService);
})();
