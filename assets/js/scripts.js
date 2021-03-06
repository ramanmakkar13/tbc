/* ---------------------------------------------
 common scripts
 --------------------------------------------- */

;
(function() {

    "use strict"; // use strict to start


    /* ---------------------------------------------
     wow animation
     --------------------------------------------- */

    new WOW().init();

    if ($(window).width() <= 991) {
        $(".wow").removeClass("wow");
    }


    /* ---------------------------------------------
     Smooth scrolling using jQuery easing
     --------------------------------------------- */

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                target.css('paddingTop', '50px');
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('.dropdown-item').on('click', function() {
        $('.dropdown-menu').removeClass('show');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav'
    });


    /* ---------------------------------------------
     add sticky
     --------------------------------------------- */

    $(window).on('scroll', function() {
        var wSize = $(window).width();
        if (wSize > 767 && $(this).scrollTop() > 1) {
            $('.app-header').addClass("navbar-sticky");
        } else {
            $('.app-header').removeClass("navbar-sticky");
        }
    });


    /* ---------------------------------------------
     steps carousel
     --------------------------------------------- */

    $('.js_steps_carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: false,
        //navText: ["<a><span></span></a>","<a><span></span></a>"],
        autoHeight: true,
        dots: true,
        dotsData: true,
        //animateOut: 'slideOutUp',
        //animateIn: 'slideInUp',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* ---------------------------------------------
     team carousel
     --------------------------------------------- */

    $('.js_team_member').owlCarousel({
        items: 4,
        loop: true,
        margin: 5,
        autoplay: true,
        nav: false,
        //navText: ["<a><span></span></a>","<a><span></span></a>"],
        autoHeight: true,
        dots: true,
        //animateOut: 'slideOutUp',
        //animateIn: 'slideInUp',
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            480: {
                items: 2,
                margin: 10,
                center: true
            },
            599: {
                items: 2,
                margin: 10
            },
            768: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });

    /* ---------------------------------------------
     advisory board carousel
     --------------------------------------------- */

    $('.js_advisory_board').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: false,
        //navText: ["<a><span></span></a>","<a><span></span></a>"],
        autoHeight: true,
        dots: true,
        dotsData: true,
        //animateOut: 'slideOutUp',
        //animateIn: 'slideInUp',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* ---------------------------------------------
     road map carousel
     --------------------------------------------- */

    $('.js_road_map').owlCarousel({
        items: 5,
        nav: true,
        dots: true,
        margin: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2,
                center: true
            },
            599: {
                items: 3
            },
            1024: {
                items: 4
            },
            1170: {
                items: 5
            }
        }
    });


    /* ---------------------------------------------
     blog post carousel
     --------------------------------------------- */

    $('.js_post_carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoHeight: true,
        //animateOut: 'slideOutUp',
        //animateIn: 'slideInUp',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // particlejs

    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#ffffff"
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
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
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
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
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


    /*==============================================
     Countdown
     ===============================================*/

    $('#counting-date').countdown('2020/10/10').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime('' +
            '<div class="count-block"><h2>%D</h2> <span>Days</span></div>' + '<span class="colon">:</span>' +
            '<div class="count-block"><h2>%H</h2> <span>Hours</span> </div>' + '<span class="colon">:</span>' +
            '<div class="count-block"><h2>%M</h2> <span>Minutes</span> </div>' + '<span class="colon">:</span>' +
            '<div class="count-block"><h2>%S</h2> <span>Seconds</span></div>'));
    });


    /*==============================================
     magnific popup
     ===============================================*/

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



})(jQuery);