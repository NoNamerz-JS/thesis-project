function category_cons() {
  const all_inputs_cons = JSON.parse(localStorage.getItem('obj_cons')) || [];
  const last_month_cons = all_inputs_cons.filter(n => n.item_date_cons > [dayjs().format('YYYY-MM')]);
  const food = last_month_cons.filter(n => n.category_cons == 'Food');
  const food_cons = food.map(function(food) {
    return food.amount_cons;
  });
  const food_cons_num = food_cons.map(Number);
  const food_cons_sum = food_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const payments = last_month_cons.filter(n => n.category_cons == 'Payments');
  const payments_cons = payments.map(function(payments) {
    return payments.amount_cons;
  });
  const payments_cons_num = payments_cons.map(Number);
  const payments_cons_sum = payments_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const public_transport = last_month_cons.filter(n => n.category_cons == 'Public transport');
  const public_transport_cons = public_transport.map(function(public_transport) {
    return public_transport.amount_cons;
  });
  const public_transport_cons_num = public_transport_cons.map(Number);
  const public_transport_cons_sum = public_transport_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const car = last_month_cons.filter(n => n.category_cons == 'Car');
  const car_cons = car.map(function(car) {
    return car.amount_cons;
  });
  const car_cons_num = car_cons.map(Number);
  const car_cons_sum = car_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const sport = last_month_cons.filter(n => n.category_cons == 'Sport');
  const sport_cons = sport.map(function(sport) {
    return sport.amount_cons;
  });
  const sport_cons_num = sport_cons.map(Number);
  const sport_cons_sum = sport_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const entertainment = last_month_cons.filter(n => n.category_cons == 'Entertainment');
  const entertainment_cons = entertainment.map(function(entertainment) {
    return entertainment.amount_cons;
  });
  const entertainment_cons_num = entertainment_cons.map(Number);
  const entertainment_cons_sum = entertainment_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const personal_care = last_month_cons.filter(n => n.category_cons == 'Personal care');
  const personal_care_cons = personal_care.map(function(personal_care) {
    return personal_care.amount_cons;
  });
  const personal_care_cons_num = personal_care_cons.map(Number);
  const personal_care_cons_sum = personal_care_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const presents = last_month_cons.filter(n => n.category_cons == 'Presents');
  const presents_cons = presents.map(function(presents) {
    return presents.amount_cons;
  });
  const presents_cons_num = presents_cons.map(Number);
  const presents_cons_sum = presents_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const other = last_month_cons.filter(n => n.category_cons == 'Other');
  const other_cons = other.map(function(other) {
    return other.amount_cons;
  });
  const other_cons_num = other_cons.map(Number);
  const other_cons_sum = other_cons_num.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  const all_last_month_arr = food_cons_sum + payments_cons_sum +
  car_cons_sum + sport_cons_sum + entertainment_cons_sum + public_transport_cons_sum +
  personal_care_cons_sum + presents_cons_sum + other_cons_sum;
  const percent_food = food_cons_sum*100/all_last_month_arr;
  const percent_payments = payments_cons_sum*100/all_last_month_arr;
  const percent_public_transport = public_transport_cons_sum*100/all_last_month_arr;
  const percent_car = car_cons_sum*100/all_last_month_arr;
  const percent_sport = sport_cons_sum*100/all_last_month_arr;
  const percent_entertainment = entertainment_cons_sum*100/all_last_month_arr;
  const percent_personal_care = personal_care_cons_sum*100/all_last_month_arr;
  const percent_presents = presents_cons_sum*100/all_last_month_arr;
  const percent_other = other_cons_sum*100/all_last_month_arr;
  $('#food').focusin(function () {
    top_text_svg.innerHTML = percent_food.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Food';
    summ_cons.innerHTML = food_cons_sum + ' BYN';
  });
  $('#payments').focusin(function () {
    top_text_svg.innerHTML = percent_payments.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Payments';
    summ_cons.innerHTML = payments_cons_sum + ' BYN';
  });
  $('#public_transport').focusin(function () {
    top_text_svg.innerHTML = percent_public_transport.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Public transport';
    summ_cons.innerHTML = public_transport_cons_sum + ' BYN';
  });
  $('#car').focusin(function () {
    top_text_svg.innerHTML = percent_car.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Car';
    summ_cons.innerHTML = car_cons_sum + ' BYN';
  });
  $('#sport').focusin(function () {
    top_text_svg.innerHTML = percent_sport.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Sport';
    summ_cons.innerHTML = sport_cons_sum + ' BYN';
  });
  $('#entertainment').focusin(function () {
    top_text_svg.innerHTML = percent_entertainment.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Entertainment';
    summ_cons.innerHTML = entertainment_cons_sum + ' BYN';
  });
  $('#personal_care').focusin(function () {
    top_text_svg.innerHTML = percent_personal_care.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Personal care';
    summ_cons.innerHTML = personal_care_cons_sum + ' BYN';
  });
  $('#presents').focusin(function () {
    top_text_svg.innerHTML = percent_presents.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Presents';
    summ_cons.innerHTML = presents_cons_sum + ' BYN';
  });
  $('#other').focusin(function () {
    top_text_svg.innerHTML = percent_other.toFixed(1) + ' %';
    mid_text_svg.innerHTML = 'Other';
    summ_cons.innerHTML = other_cons_sum + ' BYN';
  });
chart(percent_food, percent_payments, percent_public_transport, percent_car, percent_sport,
  percent_entertainment, percent_personal_care, percent_presents, percent_other)
function chart() {
  Highcharts.chart('pie_chart', {
    chart: {
      backgroundColor: 'none',
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Total expense',
      align: 'center',
      verticalAlign: 'middle',      
      y: 25
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          distance: -30,
          style: {
            fontWeight: 'normal',
            color: '#D1E7FF'
          }
        },
      center: ['45%', '50%'],
      size: '100%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Of total expense',
      innerSize: '70%',
      data: [
        ['Food', percent_food],
        ['Payments', percent_payments],
        ['Public transport', percent_public_transport],
        ['Car', percent_car],
        ['Sport', percent_sport],
        ['Entertainment', percent_entertainment],
        ['Personal care', percent_personal_care],
        ['Presents', percent_presents],
        ['Other', percent_other],
        {dataLabels: {enabled: false}}
      ]
    }]
  });
}
}
