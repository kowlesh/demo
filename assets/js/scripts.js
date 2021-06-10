/*============================
   js index
==============================

==========================================*/

(function($) {
    "use strict";

    /*==============================
        Switcher
        ==============================*/
    $('.switcher__picker').on('click', function() {
        $('.switcher').toggleClass('switcher--open');
    });

    $('#color0').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-0.css');
    });
    $('#color1').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-1.css');
    });
    $('#color2').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-2.css');
    });
    $('#color3').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-3.css');
    });
    $('#color4').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-4.css');
    });
    $('#color5').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-5.css');
    });
    $('#color6').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-6.css');
    });
    $('#color7').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-7.css');
    });
    $('#color8').on('click', function() {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-8.css');
    });

    /*================================
    Preloader
    ==================================*/
    var preloader = $('#preloader');
    $(window).on('load', function() {
        preloader.fadeOut('slow', function() { $(this).remove(); });
    });

    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('.header-bottom');

        if (scroll > 50) {
            mainHeader.addClass("sticky-header");
        } else {
            mainHeader.removeClass("sticky-header");
        }
    });

    /*================================
    offste search
    ==================================*/
    var offsetSearch = $('.offset-search');
    var bodyOverlay = $('.body_overlay');
    $('.search_btn').on('click', function() {
        $(offsetSearch).addClass('show_hide');
        $(bodyOverlay).addClass('show_hide');
    });
    bodyOverlay.on('click', function() {
        $(offsetSearch).removeClass('show_hide');
        $(bodyOverlay).removeClass('show_hide');
    });

    /*================================
    Owl Carousel
    ==================================*/
    // slider_area carousel active
    function slider_area() {
        $('.slider-area').owlCarousel({
            margin: 0,
            loop: true,
            autoplay:true,
            autoplayTimeout: 10000,
            nav: true,
            items: 1,
            smartSpeed: 800,
            navText: ['<i class="fa fa-arrow-left"></i><span>prev</span>', '<span>next</span><i class="fa fa-arrow-right"></i>']
        });
    };
    slider_area();

    // course_carousel carousel active
    function course_carousel() {
        $('.course-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 4000,
            nav: true,
            smartSpeed: 800,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 5
                },
                480: {
                    items: 1,
                    margin: 30
                },
                768: {
                    items: 2,
                    margin: 30
                },
                1024: {
                    items: 3,
                    margin: 30
                }
            }
        });
    };
    course_carousel();

    // commn_carousel carousel active
    function commn_carousel() {
        $('.commn-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            autoplayTimeout: 4000,
            nav: false,
            dotsEach: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1,
                    margin: 5
                },
                480: {
                    items: 1,
                    margin: 30
                },
                768: {
                    items: 2,
                    margin: 30
                },
                1024: {
                    items: 3,
                    margin: 30
                }
            }
        });
    };
    commn_carousel();

    // teacher_carousel carousel active
    function teacher_carousel() {
        $('.teacher-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 8000,
            nav: true,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 5
                },
                480: {
                    items: 1,
                    margin: 30
                },
                768: {
                    items: 2,
                    margin: 30
                },
                1024: {
                    items: 3,
                    margin: 30
                }
            }
        });
    };
    teacher_carousel();

    // blog_carousel carousel active
    function blog_carousel() {
        $('.blog-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            dots: false,
            autoplayTimeout: 4000,
            nav: true,
            smartSpeed: 800,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 5
                },
                480: {
                    items: 1,
                    margin: 30
                },
                768: {
                    items: 2,
                    margin: 30
                },
                1024: {
                    items: 3,
                    margin: 30
                }
            }
        });
    };
    blog_carousel();

    // tst_carousel carousel active
    function tst_carousel() {
        $('.tst-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            items: 1,
            autoplayTimeout: 8000,
            nav: false,
            smartSpeed: 2000,
            mouseDrag: false
        });
    };
    tst_carousel();

    $('.expand-video').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });

    /*================================
    slicknav
    ==================================*/
    $('ul#m_menu_active').slicknav({
        prependTo: "#mobile_menu"
    });

    /*================================
    animation
    ==================================*/
    new WOW().init();

    /*================================
    Counter
    ==================================*/

    function count($this){
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */    
        $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
            } else {    
                setTimeout(function(){count($this)}, 50);
            }
        }            
        $(".stat-count").each(function() {
          $(this).data('count', parseInt($(this).html(), 10));
          $(this).html('0');
          count($(this));
        });

    /*================================
    Go To Top
    ==================================*/

        var goToTop = function() {

        $('.js-gotop').on('click', function(event){
            
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');
            
            return false;
        });
        
    };
    goToTop();

    $(document).ready(function(){
        $('.dropdown').mouseenter(function(){

            var $this = $(this);
            $this
                .find('.dropdown-menu')
                .css('display', 'block')
                

        }).mouseleave(function(){
            var $this = $(this);

            $this
                .find('.dropdown-menu')
                .css('display', 'none')
                
        });
     });

})(jQuery);

// google map activation
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: { lat: 22.8347, lng: 86.1961},
        scrollwheel: false,
        zoom: 14,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map
    });
}

