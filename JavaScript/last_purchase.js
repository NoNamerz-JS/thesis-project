function last_purchase() {
	const all_arr_from_ls = JSON.parse(localStorage.getItem('obj_US_EU')) || [];
	const array_US = all_arr_from_ls.filter(n => n.inputState_US_EU == 'U.S. dollar');
	const array_US_not_0 = array_US.filter(m => m.amount_US_EU > 0);
	const last_US = array_US_not_0.slice(-1);
	const last_amount_US = last_US.map(function(last_US) {
	 	return last_US.amount_US_EU
	});
	const last_data_US = last_US.map(function(last_US) {
	 	return last_US.item_date_US_EU
	});
	data_last_purchase_US.innerHTML = last_data_US;
	amount_last_purchase_US.innerHTML = '+' + last_amount_US + '$';

	const array_EU = all_arr_from_ls.filter(n => n.inputState_US_EU == 'EURO');
	const array_EU_not_0 = array_EU.filter(m => m.amount_US_EU > 0);
	const last_EU = array_EU_not_0.slice(-1);
	const last_amount_EU = last_EU.map(function(last_EU) {
	 	return last_EU.amount_US_EU
	});
	const last_data_EU = last_EU.map(function(last_EU) {
	 	return last_EU.item_date_US_EU
	});
	data_last_purchase_EU.innerHTML = last_data_EU;
	amount_last_purchase_EU.innerHTML = '+' + last_amount_EU + '&#8364';
}
