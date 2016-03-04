'use strict';
(function () {
    'use strict';

    angular.module('starter.services').service('companyService', companyService);
    companyService.$inject = ['$resource'];
    function companyService($resource) {

        var service = {
            getCompanies: getCompanies

        };
        var resource = $resource('http://localhost:9000/api/companies/:id', {}, {
            'update': {method: 'PUT'}
        });
        return service;

        function getCompanies() {
            return resource.query();
        };


    }

})();