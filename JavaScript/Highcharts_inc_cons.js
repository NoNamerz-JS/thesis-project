	function inc_con() {
	let all_inputs = JSON.parse(localStorage.getItem('obj')) || [];
	let all_inputs_cons = JSON.parse(localStorage.getItem('obj_cons')) || [];

	function sortByDate() {
	  all_inputs.sort((a, b) => a.item_date > b.item_date ? 1 : -1);
		all_inputs_cons.sort((a, b) => a.item_date_cons > b.item_date_cons ? 1 : -1);
		}
	sortByDate(all_inputs);
	sortByDate(all_inputs_cons);

	let date_item_date_cons = all_inputs_cons.map(function(all_inputs_cons) {
		return all_inputs_cons.item_date_cons;
	});
	let date_item_date = all_inputs.map(function(all_inputs) {
		return all_inputs.item_date;
	});

	let size_cons = all_inputs_cons.map(function(all_inputs_cons) {
		return all_inputs_cons.amount_cons;
	});
	let size = all_inputs.map(function(all_inputs) {
		return all_inputs.amount;
	});

	let data_cons = size_cons.map(Number);
	let categories_cons = date_item_date_cons;

	let data = size.map(Number);
	let categories = date_item_date;

	if(document.getElementById("inc").checked) {
		let text = 'Amount of income';
		let stops = [[0, Highcharts.getOptions().colors[2]],
		[1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]];
		chart(categories, data, stops, text);
	}
	else{
		let text = 'Amount of consumption';
		let stops = [[0, Highcharts.getOptions().colors[8]],
		[1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]];
		chart(categories_cons, data_cons, stops, text);
	};

	function chart(categories, data, stops, text) {
  	 Highcharts.chart('container_form', {
  	 				chart: {
  	 							zoomType: 'x'
  	 					},
           	title: {
               text: ''
           	},
						xAxis: {
							categories,
					},
           	yAxis: {
           		title: {
           			text: text,
          		 	}
           	},
  	 				plotOptions: {
                   area: {
                       fillColor: {
                           linearGradient: {
                               x1: 0,
                               y1: 0,
                               x2: 0,
                               y2: 1
                           },
                           stops: stops,
                       },
                       marker: {
                           radius: 1
                       },
                       lineWidth: 1,
                       states: {
                           hover: {
                               lineWidth: 1
                           }
                       },
                       threshold: null
                   }
               },
           	series: [{
  	 					type: 'area',
           		name: '',
              data
						},
					]
       	});
}
}
