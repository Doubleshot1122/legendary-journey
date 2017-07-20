(function functionName() {
  angular.module('app')
  .component('dashboard', {
    require: {
      layout: '^app'
    },
    templateUrl: '/javascripts/dashboard/dashboard-show.html',
    controller: controller
  })

  controller.$inject = ['$http']
  function controller($http) {
    const vm = this
  }

}())
