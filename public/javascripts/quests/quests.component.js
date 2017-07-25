(function functionName() {
    angular.module('app')
        .component('quests', {
            templateUrl: './javascripts/quests/quests.html',
            controller: controller
        })

    controller.$inject = ['$http', 'UserService'];

    function controller($http, UserService) {
        const vm = this

        vm.$onInit = onInit

        function onInit() {
          $http.get('/api/quests')
            .then(response => {
              console.log("---hi---");
              console.log("-UserService-", UserService.user.id);
              console.log(response.data);
              vm.userData = response.data.filter(el => {
                if (el.owner_id === UserService.user.id) {
                  return true
                }
              })
            })
        }

}}())
