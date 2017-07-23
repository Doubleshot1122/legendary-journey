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

        vm.$onInit = onInit
        // vm.$contributionTotal = contributionTotal
        // vm.$googleChart = googleChart

        function onInit() {
            $http.get('/api/dashboard/1')
                .then(response => vm.userData = response.data)

            // $http.get('/api/quests')
            //     .then(response => {
            //       vm.chartOptions = {
            //         chartType: 'PieChart',
            //         dataTable: contributionTotal(response.data, 1)
            //       }
            //     })
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

}())
