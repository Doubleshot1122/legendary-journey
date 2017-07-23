(function(){
$.ajax({
  url:'/api/quests',
  method: 'GET'
}).then(function(result) {
  contributionTotal(result, 1)
})

function contributionTotal(projects, ownerID) {
            let projectsFormatted = []
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
                projectsFormatted.push(subArray)
            }

 // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {

   // Create the data table.
   let data = new google.visualization.DataTable();
   data.addColumn('string', 'Projects');
   data.addColumn('number', 'Slices');
   data.addRows(projectsFormatted);

   let contribution = Math.round(((8/28)*100));
   // Set chart options
   let options = {
                'chartArea': {width: '100%', height: '90%'},
                 'backgroundColor': 'transparent',
                 'pieSliceTextStyle':{'color': 'black', 'fontSize': '18'},
                  'width':435,
                  'height':400,
                  'legend':'none',
                  'pieSliceText': 'percentage',
                 'is3D': false,
                  'slices':{
                     0: {'color': 'transparent',
                        'textStyle': {'color': 'transparent'},
                        // 'offset': 0.05
                      },
                  }
   };

   // Instantiate and draw our chart, passing in some options.
   let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }

 }
 })();
