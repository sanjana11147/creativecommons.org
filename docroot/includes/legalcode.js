(function ($) {
  $(function() {

    // Make .usage-considerations collapsibles
    $('.usage-considerations').each(function() {
      var $trigger = $('<a href="#" class="cc-collapsible__trigger"><span>^ ^ ^</span></a>');

      $trigger.click(function() {
        $(this).parent().toggleClass('collapsed');
        return false;
      });

      $(this)
        .addClass('cc-collapsible collapsed')
        .append($trigger);
    });
  });
}(jQuery));