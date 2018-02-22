(function($) {
  $(function() {


    $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space


var elem = document.querySelector('.pushpin-demo-nav');
var instance = M.Pushpin.init(elem);
