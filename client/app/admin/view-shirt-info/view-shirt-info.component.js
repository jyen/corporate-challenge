'use strict';
(function () {
    class viewShirtInfo {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/admin/view-shirt-info/view-shirt-info.html';
            this.controller = 'ViewShirtInfoCtrl as shirts';
        }
    }
    angular.module('corporateChallengeApp').component('viewShirtInfo', new viewShirtInfo());
})();
