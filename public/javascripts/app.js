// Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Projects');
   data.addColumn('number', 'Slices');
   data.addRows([
     ['All Projects', 20],
     ['Synergy', 3],
     ['Grow Sales', 2],
     ['Initative 1', 3]
   ]);

   var contribution = Math.round(((8/28)*100));
   // Set chart options
   var options = {
                'chartArea': {width: '100%', height: '90%'},
                 'backgroundColor': 'transparent',
                 'pieSliceTextStyle':{'color': 'black', 'fontSize': '18'},
                  'width':435,
                  'height':400,
                  'legend':'none',
                  'pieSliceText': 'percentage',
                 'is3D':false,
                  'slices':{
                     0: {'color': 'transparent',
                        'textStyle': {'color': '#73CEF5'}},
                  }
   };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }
