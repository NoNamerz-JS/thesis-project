(function ($) {
  $(document).ready(function () {
    $(document).on('focus', 'input[type=number]', function (e) {
      $(this).on('wheel', function (e) {
        return false;
      });
    });
    $(document).on('blur', 'input[type=number]', function (e) {
      $(this).off('wheel');
    });
    $(document).on('keydown', 'input[type=number]', function (e) {
      if (e.which == 38 || e.which == 40) {
        return false;
      }
    });
  });
})(jQuery);
