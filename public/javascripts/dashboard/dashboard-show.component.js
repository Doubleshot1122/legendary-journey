(function() {
    angular.module('app')
        .component('dashboard', {
            templateUrl: './javascripts/dashboard/dashboard.html',
            controller: controller
        })

    controller.$inject = ['$http']

    function controller($http) {
        const vm = this

        vm.$onInit = onInit
        vm.generateLowProgress = generateLowProgress

        function onInit() {
            $http.get('/api/dashboard/1')
                .then(response => vm.userData = response.data)
        }

        function generateLowProgress(currXP, currLevel) {
          console.log("currXP", currXP);
          console.log("currLevel", currLevel);
          return currXP-(currLevel-200)
        }

        function contributionTotal(projects, ownerID) {
            let results = []
            let projectObj = {
                'All Other Projects': 0
            }
            projects.forEach(proj => {
                if (proj.type === 'Main') {
                    if (proj.owner_id === ownerID) {
                        if (projectObj[proj.name]) {
                            projectObj[proj.name]++
                        } else {
                            projectObj[proj.name] = 1
                        }
                    } else {
                        projectObj['All Other Projects']++
                    }
                }
            })

            for (proType in projectObj) {
                let subArray = []
                subArray[0] = proType
                subArray[1] = parseInt(`${projectObj[proType]}`)
                results.push(subArray)
            }

            return results
        }

    }

})();
