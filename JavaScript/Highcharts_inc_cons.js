const input = document.getElementById("item_date");
input.setAttribute("max", dayjs().format('YYYY-MM-DD'));
function inc_con() {
	const all_inputs = JSON.parse(localStorage.getItem('obj')) || [];
	const all_inputs_cons = JSON.parse(localStorage.getItem('obj_cons')) || [];
	function sortByDate() {
		all_inputs.sort((a, b) => a.item_date > b.item_date ? 1 : -1);
		all_inputs_cons.sort((a, b) => a.item_date_cons > b.item_date_cons ? 1 : -1);
	}
	sortByDate(all_inputs);
	sortByDate(all_inputs_cons);
	const date_item_date_cons = all_inputs_cons.map(function(all_inputs_cons) {
		return all_inputs_cons.item_date_cons;
	});
	const date_item_date = all_inputs.map(function(all_inputs) {
		return all_inputs.item_date;
	});
	const size_cons = all_inputs_cons.map(function(all_inputs_cons) {
		return all_inputs_cons.amount_cons;
	});
	const size = all_inputs.map(function(all_inputs) {
		return all_inputs.amount;
	});
	const data_cons = size_cons.map(Number);
	const categories_cons = date_item_date_cons;
	const cons = all_inputs_cons.map(function(all_inputs_cons) {
		return all_inputs_cons.item_date_cons;
	});
	const cons_filter = cons.filter( d => d > [dayjs().format('YYYY-MM')]);
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const sum_cons = data_cons.reduceRight((c => (s, v) => s + (c && c-- && v))(cons_filter.length), 0);
		recurrent_expenses.innerHTML = sum_cons + ' BYN';
	const data = size.map(Number);
	const inc = all_inputs.map(function(all_inputs) {
		return all_inputs.item_date;
	});
	const inc_filter = inc.filter( d => d > [dayjs().format('YYYY-MM')]);
	const reducer_inc = (accumulator, currentValue) => accumulator + currentValue;
	const sum_inc = data.reduceRight((c => (s, v) => s + (c && c-- && v))(data.length), 0);
		current_balance.innerHTML = sum_inc - sum_cons + ' BYN';
	const categories = date_item_date;
	console.log(data);
	if(document.getElementById("inc").checked) {
		const text = 'Amount of income';
		const stops = [[0, Highcharts.getOptions().colors[2]],
		[1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]];
		const lineColor = '#14D100';
		chart(categories, data, stops, text, lineColor);
	}
	else{
		const text = 'Amount of consumption';
		const stops = [[0, Highcharts.getOptions().colors[8]],
		[1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]];
		const lineColor = '#BF3030';
		chart(categories_cons, data_cons, stops, text, lineColor);
	};
	function chart(categories, data, stops, text, lineColor) {
		Highcharts.chart('container_form', {
			chart: {
				zoomType: 'x',
				backgroundColor: 'none'
			},
			exporting: {
				enabled: false
			},
			credits: {
				enabled: false
			},
			title: {
				text: ''
			},
			xAxis: {
				labels: {
					style: {
						color: 'rgba(209, 231, 255, 0.5)'
					}
				},
				categories,
			},
			yAxis: {
				labels: {
					style: {
						color: 'rgba(209, 231, 255, 0.5)'
					}
				},
			gridLineColor: 'rgba(209, 231, 255, 0.1)',
			title: {
				style: {
					color: 'rgba(209, 231, 255, 0.5)',
				},
				text,
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
					stops,
				},
				marker: {
					radius: 0
				},
				lineWidth: 1,
				lineColor,
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
			name: 'Amount',
			data
		}]
	});
	}
}
