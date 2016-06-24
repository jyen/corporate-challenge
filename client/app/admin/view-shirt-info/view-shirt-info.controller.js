'use strict';

(function () {
    class ViewShirtInfoCtrl {
        /*@ngInject*/
        constructor(User) {
            this.User = User;
            this.users = [];
            this.counts = {};
            this.counts['S'] = 0;
            this.counts['M'] = 0;
            this.counts['L'] = 0;
            this.counts['XL'] = 0;
            this.counts['XXL'] = 0;
            this.counts['XXXL'] = 0;
            this.getUsers();
        }

        getUsers() {
            return this.User.query().$promise.then(data => {
                this.users = data;
                this.getShirtCounts(this.users);
                return this.users;
            });
        }

        getShirtCounts(users) {

            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                console.log(user);
                if (user.shirtSize === 'S') {
                    this.counts['S']++;
                } else if (user.shirtSize === 'M') {
                    this.counts['M']++;
                } else if (user.shirtSize === 'L') {
                    this.counts['L']++;
                } else if (user.shirtSize === 'XL') {
                    this.counts['XL']++;
                } else if (user.shirtSize === 'XXL') {
                    this.counts['XXL']++;
                } else if (user.shirtSize === 'XXXL') {
                    this.counts['XXXL']++;
                }
            }
            console.log(this.counts);

        }

    }
    angular.module('corporateChallengeApp').controller('ViewShirtInfoCtrl', ViewShirtInfoCtrl);

})();
