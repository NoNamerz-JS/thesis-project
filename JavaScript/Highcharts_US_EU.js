function acc_highcharts() {
	const all_inputs_US_EU = JSON.parse(localStorage.getItem('obj_US_EU')) || [];
	function sortByDate() {
		all_inputs_US_EU.sort((a, b) => a.item_date_US_EU > b.item_date_US_EU ? 1 : -1);
	}
	sortByDate(all_inputs_US_EU);
	const array_US_EU = all_inputs_US_EU;
	for(let i = 0; i < array_US_EU.length; i++){
		let obj = array_US_EU[i];
		for(let prop in obj){
			if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
				obj[prop] = +obj[prop];
			}
		}
	}
	let newArray_US_EU = [];
	for(let x in array_US_EU) {
		for(let y in newArray_US_EU) {
			var found = false;
			if((array_US_EU[x].item_date_US_EU == newArray_US_EU[y].item_date_US_EU)
			&& (array_US_EU[x].inputState_US_EU == newArray_US_EU[y].inputState_US_EU)) {
				newArray_US_EU[y].amount_US_EU += array_US_EU[x].amount_US_EU;
					found = true;
					break;
				}
			}
		if(!found) {
			newArray_US_EU.push(array_US_EU[x]);
		}
	}
	const array_US = newArray_US_EU.filter(n => n.inputState_US_EU !== 'EURO');
	const array_EU = newArray_US_EU.filter(n => n.inputState_US_EU !== 'U.S. dollar');
	const size_US = array_US.map(function(array_US) {
		return array_US.amount_US_EU;
	});
	const size_EU = array_EU.map(function(array_EU) {
		return array_EU.amount_US_EU;
	});
	const date_item_date_US_EU = newArray_US_EU.map(function(newArray_US_EU) {
		return newArray_US_EU.item_date_US_EU;
	});
	const name_US_EU = newArray_US_EU.map(function(newArray_US_EU) {
		return newArray_US_EU.inputState_US_EU;
	});
	function unique(date_item_date_US_EU) {
		let result = [];
		for (let str of date_item_date_US_EU) {
			if (!result.includes(str)) {
				result.push(str);
			}
		}
		return result;
	}
	const categories = unique(date_item_date_US_EU);
	const data_US = size_US;
	const data_EU = size_EU;
	chart(categories, data_US, data_EU);
	const sum_US = data_US.reduce((partial_sum, a) => partial_sum + a,0);
	accumulation_US.innerHTML = sum_US + ' $';
	const sum_EU = data_EU.reduce((partial_sum, a) => partial_sum + a,0);
	accumulation_EU.innerHTML = sum_EU + ' &#8364';
	function chart(categories, data_US, data_EU) {
		Highcharts.chart('accumulation_container', {
			chart: {
				type: 'column',
				backgroundColor: 'none',
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
				categories: categories,
				labels: {
					style: {
						color: 'rgba(209, 231, 255, 0.5)'
					}
				}
			},
			series: [{
				borderColor: 'none',
				color: {
					linearGradient: {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 1
					},
				stops: [
					[0, '#776FE4'],
					[1, '#9891eb']
				]},
				name: 'U.S. dollar',
				data: data_US
			}, {
		borderColor: 'none',
		color: {
			linearGradient: {
				x1: 0,
				x2: 0,
				y1: 0,
				y2: 1
			},
			stops: [
				[0, '#E6583C'],
				[1, '#edb4a8']
			]
		},
		name: 'EURO',
		data: data_EU
		}],
		yAxis: {
			labels: {
				style: {
					color: 'rgba(209, 231, 255, 0.5)'
				}
			},
		gridLineColor: 'rgba(209, 231, 255, 0.1)',
		min: 0,
		title: {
			style: {
				color: 'rgba(209, 231, 255, 0.5)'
			},
			text: 'Accumulation',
		}
	},
			plotOptions: {
				series: {
					borderRadius: 8,
					pointWidth: 14,
					groupPadding: 0.3
				}
			},
		});
	}
}
