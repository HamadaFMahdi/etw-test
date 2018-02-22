(function($) {
  $(function() {

    if($( document ).width()<1000){
    setTimeout(function() {
      M.toast({html: 'Try swiping left and right between tabs. Also, drag the tab menu to the left to reveal the other tabs.', classes: 'rounded'});
    }, 500);
    }

    $(".dropdown-trigger1").dropdown({ hover: false });
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
      });


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

    // var typed2 = new Typed('#quote-text', {
    //   //stringsElement: '#typed-strings',
    //   strings: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit dignissimos laudantium, nihil reiciendis id ipsum quaerat nam nostrum!"],
    //   // strings: ["ETW:"],
    //   typeSpeed: 20,
    //   backSpeed: 20,
    //   backDelay: 500,
    //   startDelay: 1000,
    //   loop: false,
    //
    //
    // });


    // function borderFadeOut(multiplier) {
    //   setTimeout(function() {
    //     $("#type-reveal2").fadeOut("slow");
    //   }, multiplier);
    // }
    //
    // function textFadeIn(text, multiplier) {
    //   setTimeout(function() {
    //     $("#type-reveal2").html(text);
    //     $("#type-reveal2").fadeIn("slow");
    //   }, multiplier);
    // }
    //
    // function topFading() {
    //   var i = 500;
    //   borderFadeOut(i - 500)
    //   textFadeIn("Enlighten The World.", 1000)
    //   borderFadeOut(i + 1500)
    //   textFadeIn("Enhance The World.", i + (2 * 1500))
    //   borderFadeOut(i + (3 * 1500))
    //   textFadeIn("Enliven The World.", i + (4 * 1500))
    //   borderFadeOut(i + (5 * 1500))
    //   textFadeIn("Enrich The World.", i + (6 * 1500))
    //   borderFadeOut(i + (7 * 1500))
    //   textFadeIn("Educate The World.", i + (8 * 1500))
    //   borderFadeOut(i + (9 * 1500))
    //   textFadeIn("Empower The World.", i + (10 * 1500))
    // }



    // window.sr = ScrollReveal();
    // sr.reveal('#icon-block-left', {
    //   origin: "left",
    //   viewFactor: 0.7,
    //   scale: 0.4,
    // });

    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 500
          }
        },
        "color": {
          "value": "#cccc00"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.8,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 50,
          "color": "#cccc00",
          "opacity": 0.5,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.6,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "bounce",
          "bounce": true,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "grab"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 150,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 113.68434728944044,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem);
var tabElem = document.querySelector('.tabs');
var instance = M.Tabs.init(tabElem, {
  swipeable: true
});
var faElem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(faElem, {
  accordion: true
});
// var sliElem = document.querySelector('.slider');
// var instance = M.Slider.init(sliElem,{
//   indicators: true
// });


// var elem = document.querySelector('.carousel.carousel-slider');
// var instance = M.Carousel.init(elem);

var elem1 = document.querySelector('.modal');
var instance = M.Modal.init(elem1);
