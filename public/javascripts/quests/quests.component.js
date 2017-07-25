(function functionName() {
    angular.module('app')
        .component('quests', {
            templateUrl: './javascripts/quests/quests.html',
            controller: controller
        })

    controller.$inject = ['$http'];

    function controller($http) {
        const vm = this

        vm.$onInit = onInit

        function onInit() {
          $http.get('/api/quests')
            .then(response => {
              console.log(response);
              vm.userData = response.data
            })
        }

}}())
