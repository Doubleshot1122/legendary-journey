(function() {

  angular.module('app')
    .component('app', {
      templateUrl: '/javascripts/app/app.template.html',
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
