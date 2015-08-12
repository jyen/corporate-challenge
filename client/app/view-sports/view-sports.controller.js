'use strict';

(function () {
  angular.module('corporateChallengeApp').controller('ViewSportsCtrl', ViewSportsCtrl);
  ViewSportsCtrl.$inject = ['sportService', 'Auth', '$stateParams'];
  function ViewSportsCtrl(sportService, Auth, $stateParams) {

    var vm = this;
    vm.sports = [];

    vm.getCountString = getCountString;
    vm.getEmailList = getEmailList;
    vm.currentUser = Auth.getCurrentUser();
    vm.initialized = false;
    init();

    function init() {
      getSports();
    }

    function getSports() {
      var year = new Date().getFullYear();
      return sportService.getSports(year, true)
          .then(function (data) {
            vm.sports = setDefaultOpen(data, $stateParams.id);
            vm.initialized = true;
            return vm.sports;
          });
    }

    function setDefaultOpen(sports, id) {
      var newSports = [];
      if (id) {
        _.each(sports, function (sport) {
          if (sport._id === id) {
            sport.isOpen = true;
          } else {
            sport.isOpen = false;
          }
          newSports.push(sport);

        });
      } else {
        newSports = sports;
      }

      return newSports;

    }

    function getCountString(members) {
      var genderCount = _.countBy(members, function (member) {
        return member.gender;
      });

      var maleCount = 0;
      var femaleCount = 0;
      if (genderCount['M']) {
        maleCount = genderCount['M'];
      }

      if (genderCount['F']) {
        femaleCount = genderCount['F'];
      }

      return 'Male: ' + maleCount + ' Female: ' + femaleCount;
    }

    function getEmailList(members) {
      var emails = [];
      _.each(members, function (member) {
        emails.push(member.email);
      });
      var emailString = emails.join();
      return 'mailto:' + emailString;
    }
  }

})();
