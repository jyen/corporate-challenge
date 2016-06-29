'use strict';

(function () {
    class LoginCtrl {
        /*@ngInject*/
        constructor(Auth, $location, $window) {
            this.Auth = Auth;
            this.$location = $location;
            this.$window = $window;

            this.init();
        }

        init() {
            this.user = {};
            this.errors = {};
        }

        login (form) {
            this.submitted = true;

            if (form.$valid) {
                this.Auth.login({
                    email: this.user.email,
                    password: this.user.password
                })
                    .then(() => {
                        // Logged in, redirect to home
                        this.$location.path('/dashboard/sports');
                    })
                    .catch((err) => {
                        this.errors.other = err.message;
                        form['email'].$setValidity('mongoose', false);
                    });
            }
        }

        loginOauth (provider) {
            this.$window.location.href = '/auth/' + provider;
        }
    }
    angular.module('corporateChallengeApp').controller('LoginCtrl', LoginCtrl);
})();