(function($) {
  $(function() {

      var toastTrigged = false;
      $("#men").click(function(){
        if($( document ).width()<1000 && toastTrigged==false){
            M.toast({html: 'You can also swipe in from the left side of your screen to reveal the menu.', classes: 'rounded'});
            toastTrigged=true;
          }
        });



    $(".dropdown-trigger1").dropdown({ hover: false });
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    //     if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
    //     $('body').on("mousewheel", function (event) {
    //         // remove default behavior
    //         event.preventDefault();
    //
    //         //scroll without smoothing
    //         var wheelDelta = event.wheelDelta;
    //         var currentScrollPosition = window.pageYOffset;
    //         window.scrollTo(0, currentScrollPosition - wheelDelta);
    //     });
    // }

    ;
    (function() {
      // Initialize
      var bLazy = new Blazy({
        container: '.parallax'
      });
      var bLazy = new Blazy({
        container: '.card-image'
      });
    })();

    var typed1 = new Typed('#type-reveal1', {
      //stringsElement: '#typed-strings',
      strings: ["It's time for change...", "^400Well,^500 we want to..."],
      // strings: ["ETW:"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 500,
      startDelay: 1000,
      loop: false,
      onComplete: function() {
        topFading()
      }

    });


    function borderFadeOut(multiplier) {
      setTimeout(function() {
        $("#type-reveal2").fadeOut("slow");
      }, multiplier);
    }

    function textFadeIn(text, multiplier) {
      setTimeout(function() {
        $("#type-reveal2").html(text);
        $("#type-reveal2").fadeIn("slow");
      }, multiplier);
    }

    function topFading() {
      var i = 500;
      borderFadeOut(i - 500)
      textFadeIn("Enlighten The World.", 1000)
      borderFadeOut(i + 1500)
      textFadeIn("Enhance The World.", i + (2 * 1500))
      borderFadeOut(i + (3 * 1500))
      textFadeIn("Enliven The World.", i + (4 * 1500))
      borderFadeOut(i + (5 * 1500))
      textFadeIn("Enrich The World.", i + (6 * 1500))
      borderFadeOut(i + (7 * 1500))
      textFadeIn("Educate The World.", i + (8 * 1500))
      borderFadeOut(i + (9 * 1500))
      textFadeIn("Empower The World.", i + (10 * 1500))
    }



    // setTimeout(function() {
    //       var typed2 = new Typed('#type-reveal2', {
    //       strings: ["Enlighten The World.", "Enhance The World.", "Enliven The World.", "Enrich The World.", "Educate The World.", "Empower The World.","ETW.^1500"],
    //       cursorChar:"",
    //       typeSpeed: 0,
    //       backSpeed: 0,
    //       backDelay: 500,
    //       startDelay: 1000,
    //       fadeOut: true
    //     });
    //   }, 6900);

    window.sr = ScrollReveal();
    sr.reveal('#icon-block-left', {
      origin: "left",
      viewFactor: 0.7,
      scale: 0.4,
    });
    sr.reveal('#icon-block-middle', {
      delay: 50,
      origin: "top",
      viewFactor: 0.7,
      scale: 0.4
    });
    sr.reveal('#icon-block-right', {
      delay: 100,
      origin: "right",
      viewFactor: 0.7,
      scale: 0.4,
    });

    sr.reveal('#find-out-more-btn', {
      duration: 1000,
      delay: 150,
      origin: "bottom",
      viewFactor: 0.7,
      scale: 0.4,
    });

    sr.reveal('#init-edu', {
      delay: 100,
      origin: "left",
      viewFactor: 0.2,
      scale: 0.9,
    });
    sr.reveal('#init-sch', {
      delay: 200,
      origin: "right",
      viewFactor: 0.2,
      scale: 0.9,
    });
    sr.reveal('#init-sport', {
      delay: 300,
      origin: "left",
      viewFactor: 0.2,
      scale: 0.9,
    });
    sr.reveal('#init-events', {
      delay: 400,
      origin: "right",
      viewFactor: 0.2,
      scale: 0.9,
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem);
