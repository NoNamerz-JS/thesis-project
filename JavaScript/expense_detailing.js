$('#target').focusin(function () {
  $('#display_pie').addClass('display_pie');
  $('#show_state').removeClass('show_state');
}).focusout(function () {
  $('#show_state').addClass('show_state');
  $('#display_pie').removeClass('display_pie');
});
