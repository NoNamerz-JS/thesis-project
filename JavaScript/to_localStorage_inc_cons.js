function checkParams() {
  const it = document.getElementById("item_date").value;
  const am = document.getElementById("Amount").value;
  if(it.length != 0 && am.length != 0) {
    $('#datebtn_form').removeAttr('disabled');
  } else {
    $('#datebtn_form').attr('disabled', 'disabled');
  }
}
function to_localStorage_inc_cons() {
  if ((JSON.stringify(localStorage.getItem('obj')).toString().includes(document.getElementById("item_date").value) == true)
  && document.getElementById("inc_selected").selected) {
    alert('You have already entered the data for this day!');
  }
  else {
    if (document.getElementById("inputState").value == 'Income') {
      const old_obj = JSON.parse(localStorage.getItem('obj')) || [];
      const item_date = document.getElementById("item_date").value;
      const amount = document.getElementById("Amount").value;
      const inputState = document.getElementById("inputState").value;
      const obj = {item_date, amount, inputState};
      old_obj.push(obj)
      const json = JSON.stringify(old_obj);
      const storage = localStorage.setItem('obj', json);
    }
    else {
      const old_obj_cons = JSON.parse(localStorage.getItem('obj_cons')) || [];
      const item_date_cons = document.getElementById("item_date").value;
      const amount_cons = document.getElementById("Amount").value;
      const inputState_cons = document.getElementById("inputState").value;
      const category_cons = document.getElementById("inputCategory").value;
      const obj_cons = {item_date_cons, amount_cons, inputState_cons, category_cons};
      old_obj_cons.push(obj_cons)
      const json_cons = JSON.stringify(old_obj_cons);
      const storage_cons = localStorage.setItem('obj_cons', json_cons);
    }
  }
}
