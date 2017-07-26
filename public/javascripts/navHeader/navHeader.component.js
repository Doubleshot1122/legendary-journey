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
    vm.refreshData = refreshData
    vm.refreshDashboard = refreshDashboard

    function onInit() {
      console.log(UserService);

    }

    function refreshData() {
      console.log("started");
      $http.get('/api/datasync/stories')
        .then(responce => {
          console.log("===DONE===");
          console.log(responce);
        })
    }

    function refreshDashboard() {
      $window.location.reload();
    }
  }

}());
