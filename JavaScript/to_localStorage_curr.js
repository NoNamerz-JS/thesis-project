function checkParamsCur() {
  let it = document.getElementById("accumulation_item_date").value;
  let am = document.getElementById("accumulation_Amount").value;
    if((it.length != '') && (am.length != 0)) {
      $('#accumulation_datebtn_add').removeAttr('disabled');
    } else {
      $('#accumulation_datebtn_add').attr('disabled', 'disabled');
    }
}
function to_localStorage_acc() {
  const old_obj_US_EU = JSON.parse(localStorage.getItem('obj_US_EU')) || [];
  let item_date_US_EU = document.getElementById("accumulation_item_date").value;
  let amount_US_EU = document.getElementById("accumulation_Amount").value;
  let inputState_US_EU = document.getElementById("accumulation_inputState").value;
  let obj_US_EU = {item_date_US_EU, amount_US_EU, inputState_US_EU};
  old_obj_US_EU.push(obj_US_EU)

  if (inputState_US_EU == 'EURO') {
    amount_US_EU = '0';
    inputState_US_EU = 'U.S. dollar';
    obj_0 = {item_date_US_EU, amount_US_EU, inputState_US_EU};
    old_obj_US_EU.push(obj_0)
  }
  else if (inputState_US_EU == 'U.S. dollar') {
    amount_US_EU = '0';
    inputState_US_EU = 'EURO';
    obj_0 = {item_date_US_EU, amount_US_EU, inputState_US_EU};
    old_obj_US_EU.push(obj_0)
  }
  const json_US_EU = JSON.stringify(old_obj_US_EU);
  const storage_US_EU = localStorage.setItem('obj_US_EU', json_US_EU);
}
