function to_localStorage_inc_cons() {
	if (document.getElementById("item_date").value == ''){
		alert('You have not entered a date!');
	}
	else if (document.getElementById("Amount").value == ''){
		alert('You have not entered the amount!');
	}
	else if ((JSON.stringify(localStorage.getItem('obj')).toString().includes(document.getElementById("item_date").value) == true) && document.getElementById("inc_selected").selected) {
		alert('You have already entered the data for this day!');
	}
	else if ((JSON.stringify(localStorage.getItem('obj_cons')).toString().includes(document.getElementById("item_date").value) == true) && document.getElementById("cons_selected").selected){
		alert('You have already entered the data for this day!');
	}
	else {
		if (document.getElementById("inputState").value == 'Income') {
			let old_obj = JSON.parse(localStorage.getItem('obj')) || [];
			let item_date = document.getElementById("item_date").value;
			let amount = document.getElementById("Amount").value;
			let inputState = document.getElementById("inputState").value;
			let obj = {item_date, amount, inputState};

			old_obj.push(obj)

			let json = JSON.stringify(old_obj);
			let storage = localStorage.setItem('obj', json);
		}
		else {
			let old_obj_cons = JSON.parse(localStorage.getItem('obj_cons')) || [];
			let item_date_cons = document.getElementById("item_date").value;
			let amount_cons = document.getElementById("Amount").value;
			let inputState_cons = document.getElementById("inputState").value;

			let obj_cons = {item_date_cons, amount_cons, inputState_cons};

			old_obj_cons.push(obj_cons)

			let json_cons = JSON.stringify(old_obj_cons);
			let storage_cons = localStorage.setItem('obj_cons', json_cons);
			}
	}
}
