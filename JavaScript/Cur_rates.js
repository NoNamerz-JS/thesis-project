let day_ago = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
let today = dayjs().format('YYYY-MM-DD');
const url_cur_USD = 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/145?startDate=' + day_ago +'&endDate=' + today;
const url_cur_EURO = 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/292?startDate=' + day_ago +'&endDate=' + today;
const url_cur_RUB = 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=' + day_ago +'&endDate=' + today;

const worker = new Worker('JavaScript/WebWorker.js');

worker.postMessage(url_cur_USD);
worker.postMessage(url_cur_EURO);
worker.postMessage(url_cur_RUB);

worker.onmessage = function(e) {
  e.data.cur_id, e.data.rate;
  if (e.data.cur_id[1] == 145) {
      detailed_rate_block_USD_info.innerHTML = e.data.rate[1];
      let difference = (e.data.rate[1]*10000 - e.data.rate[0]*10000)/10000;
      let diff_fix = difference.toFixed(4);
      if (diff_fix > 0 ) {
        difference_rate_USD.innerHTML = '+' + diff_fix;
        difference_rate_USD.className = 'difference_rate_color_up' + ' ' + 'mt-2' +' ' + 'ml-1';
      }
      if (diff_fix < 0 ) {
        difference_rate_USD.innerHTML = diff_fix;
        difference_rate_USD.className = 'difference_rate_color_down' + ' ' + 'mt-2' + ' ' + 'ml-1';
      }
      if (diff_fix == 0 ) {
        difference_rate_USD.innerHTML = diff_fix;
        difference_rate_USD.className = 'mt-2' + ' ' + 'ml-1';
      }
}
      if (e.data.cur_id[1] == 292) {
        detailed_rate_block_EURO_info.innerHTML = e.data.rate[1];
        let difference = (e.data.rate[1]*10000 - e.data.rate[0]*10000)/10000;
        let diff_fix = difference.toFixed(4);
        if (diff_fix > 0) {
          difference_rate_EURO.innerHTML = '+' + diff_fix;
          difference_rate_EURO.className = 'difference_rate_color_up' + ' ' + 'mt-2' +' ' + 'ml-1';
    }
      if (diff_fix < 0 ) {
        difference_rate_EURO.innerHTML = diff_fix;
        difference_rate_EURO.className = 'difference_rate_color_down' + ' ' + 'mt-2' + ' ' + 'ml-1';
      }
      if (diff_fix == 0 ) {
        difference_rate_EURO.innerHTML = diff_fix;
        difference_rate_EURO.className = 'mt-2' + ' ' + 'ml-1';
      }

}
  if (e.data.cur_id[1] == 298) {
      detailed_rate_block_RUB_info.innerHTML = e.data.rate[1];
      let difference = (e.data.rate[1]*10000 - e.data.rate[0]*10000)/10000;
      let diff_fix = difference.toFixed(4);
      if (diff_fix > 0) {
        difference_rate_RUB.innerHTML = '+' + diff_fix;
        difference_rate_RUB.className = 'difference_rate_color_up' + ' ' + 'mt-2' +' ' + 'ml-1';
    }
      if (diff_fix < 0 ) {
        difference_rate_RUB.innerHTML = diff_fix;
        difference_rate_RUB.className = 'difference_rate_color_down' + ' ' + 'mt-2' + ' ' + 'ml-1';
      }
      if (diff_fix == 0 ) {
        difference_rate_RUB.innerHTML = diff_fix;
        difference_rate_RUB.className = 'mt-2' + ' ' + 'ml-1';
    }
}
}
