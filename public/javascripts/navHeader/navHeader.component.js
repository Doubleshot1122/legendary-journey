(function() {

  angular.module('app')
    .component('navHeader', {
      templateUrl: './javascripts/navHeader/navHeader.html',
      controller: controller
    })

  controller.$inject = ['$http', 'UserService']
  function controller($http, UserService) {
    const vm = this

    vm.$onInit = onInit

    function onInit() {
      console.log(UserService);

    }
  }

}());
