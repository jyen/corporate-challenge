'use strict';

(function () {
    class ViewParticipantsCtrl {
        /*@ngInject*/
        constructor(User) {
            this.User = User;

            this.users = [];
            this.initialized = false;
            this.init();
        }

        init() {
            this.getUsers();
        }

        getUsers() {
            return this.User.query().$promise.then((data) => {
                this.users = data;
                this.initialized = true;
                return this.users;
            });
        }

        getEmailList(members) {
            var emails = [];
            _.each(members, function (member) {
                emails.push(member.email);
            });
            var emailString = emails.join();
            return 'mailto:' + emailString;
        }
    }
    angular.module('corporateChallengeApp').controller('ViewParticipantsCtrl', ViewParticipantsCtrl);
})();