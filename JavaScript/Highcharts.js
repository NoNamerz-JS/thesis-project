function start_highcharts() {
  let month_ago = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
  let today = dayjs().format('YYYY-MM-DD');
  const selected = Array.from(document.forms["all_cur"])
    .filter(option => option.checked)
    .map(option => option.defaultValue);

  const start_data = document.getElementById("start");
  const end_data = document.getElementById("end");
  if (start_data.value == '' && end_data.value == '') {
    }
  else {
    month_ago = start_data.value;
    today = end_data.value;
  }

  const urlData = 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/' + selected + '?startDate=' + month_ago +'&endDate=' + today;
  const worker = new Worker('JavaScript/WebWorker.js');

  worker.postMessage(urlData);

  worker.onmessage = function(e) {
  	chart(e.data.date, e.data.rate);
  }
  function chart (categories, data) {
  	Highcharts.chart('container', {
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
          			text: 'rate'
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
                          stops: [
                              [0, Highcharts.getOptions().colors[0]],
                              [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
                          ]
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
              		data,
          	}]
      	});
  }
}
