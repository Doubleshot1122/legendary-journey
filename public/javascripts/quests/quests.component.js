(function functionName() {
    angular.module('app')
        .component('quests', {
            require: {
                layout: '^app'
            },
            templateUrl: '/javascripts/quests/quests.html',
            controller: controller
        })

    controller.$inject = ['$http']

    function controller($http) {
        const vm = this

        vm.$onInit = onInit

        function onInit() {
        
        }

}}())
