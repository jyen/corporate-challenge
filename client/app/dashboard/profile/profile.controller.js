'use strict';

(function () {
    class ProfileCtrl {
        /*@ngInject*/
        constructor(Auth, userService) {
            this.userService = userService;
            this.Auth = Auth;
            
            this.currentUser = Auth.getCurrentUser();
            this.readOnly = true;
            this.availableSize = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
            this.participantTypes = ['Employee', 'Contractor', 'Retiree', 'Spouse'];
        }

        edit() {
            this.readOnly = false;
        }

        save(user) {
            this.userService.updateUser(user).then(() => {
                this.currentUser = this.Auth.getCurrentUser();
                this.readOnly = true;
            });

        }

        cancel() {
            this.readOnly = true;
        }
    }
    angular.module('corporateChallengeApp').controller('ProfileCtrl', ProfileCtrl);
})();
