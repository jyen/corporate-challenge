'use strict';

(function () {
  angular.module('corporateChallengeApp').controller('ViewSportsCtrl', ViewSportsCtrl);
  ViewSportsCtrl.$inject = ['sportService'];
  function ViewSportsCtrl(sportService) {

    var vm = this;
    vm.sports = [];

    vm.getCountString = getCountString;
    vm.getEmailList = getEmailList;
    init();

    function init() {
      getSports();
    }

    function getSports() {
      var year = new Date().getFullYear();
      return sportService.getSports(year, true)
          .then(function (data) {
            vm.sports = data;
            return vm.sports;
          })
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
  };

})();
