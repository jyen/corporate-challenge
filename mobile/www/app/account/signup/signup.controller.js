(function () {
    angular.module('starter.controllers').controller('SignUpController', SignUpController);
    SignUpController.$inject = ['AuthService', 'companyService'];

    function SignUpController(AuthService, companyService) {
        var vm = this;
        vm.companyService = companyService;
        vm.createUser = AuthService.createUser;
        console.log(companyService);

        vm.user = {email: '', password: '', name: ''};

        vm.companies = companyService.getCompanies();
    }


    function init() {
        return getCompanies();
    }

    function getCompanies() {
        return companyService.getCompanies()
            .then(function (data) {
                vm.companies = data;
                return vm.companies;
            });
    }

})();
