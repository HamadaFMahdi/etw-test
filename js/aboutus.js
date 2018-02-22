(function($) {
  $(function() {


    $(".dropdown-trigger1").dropdown({ hover: false });
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $(window).scroll(function() {
   var wS = $(this).scrollTop();
   if (wS > 10){
     $('nav').css('backgroundColor','rgba(0,0,0,1)');
   } else{
     $('nav').css('backgroundColor','rgba(0,0,0,0)');
   }
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



    window.sr = ScrollReveal();
    sr.reveal('#particles-js', {
      duration:1000,
      origin: "top",
      viewFactor: 0.7,
      scale: 0.9,
    });



    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
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
          "value": 0.4,
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
          "distance": 100,
          "color": "#cccc00",
          "opacity": 0.1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 97.44372624809179,
            "line_linked": {
              "opacity": 1
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
