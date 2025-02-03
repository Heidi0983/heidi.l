
jQuery(document).ready(function ($) {

    "use strict";



    var siteMenuClone = function () {

        /*$('.js-clone-nav').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });*/


        setTimeout(function () {

            var counter = 0;
            $('.navbar-collapse .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();






    var siteCarousel = function () {

        if ($('.slide-one-item').length > 0) {
            $('.slide-one-item').owlCarousel({
                center: false,
                items: 1,
                loop: false,
                stagePadding: 0,
                margin: 0,
                autoplay: false,
                pauseOnHover: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: true,
                navText: ['<span class="glyphicon glyphicon-menu-left">', '<span class="glyphicon glyphicon-menu-right">']

            });


            var owl = $('.slide-one-item');
            $('.play').on('click', function () {
                owl.trigger('play.owl.autoplay', [5000])
            });
            $('.stop').on('click', function () {
                owl.trigger('stop.owl.autoplay')
            });


        }
    };
    siteCarousel();


    // 兒美數位學院
    var carousel = function () {
        $('.owl-carousel').owlCarousel({
            center: true,
            items: 1,
            loop: true,
            margin: 0,
            dotsContainer: '.owl-dots',
            //    autoplay: true,
            //    autoplayTimeout: 4800,
            //    autoplayHoverPause: true,
            //    smartSpeed: 300,
            nav: true,
            navText: ['<span class="glyphicon glyphicon-menu-left">', '<span class="glyphicon glyphicon-menu-right">'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1170: {
                    items: 1
                }
            }
        });
    };
    carousel();

    var windowScrolled = function () {


        $(window).scroll(function () {

            var $w = $(this), st = $w.scrollTop(), navbar = $('.js-site-navbar');

            if (st > 240) {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled');
            }

        })

    }
    windowScrolled();

});


$(document).ready(function ($) {

    /*----------------------------------------------------*/
    /*	Nav Menu
    /*----------------------------------------------------*/

    $(".nav ul li a[href^='#']").on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });

    $(".nav > li > a").click(function () {
        jQuery("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top + 1
        }, 1000);
    });


    /*----------------------------------------------------*/
    /*	Back Top Link
    /*----------------------------------------------------*/

    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset || $(this).scrollTop() > offset) {
            $('.back-go-top').fadeIn(400);
            //$('.back-go-form').fadeIn(400);
        } else {
            $('.back-go-top').fadeOut(400);
            //$('.back-go-form').fadeOut(400);
        }
    });
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition >= 1500 || scrollPosition < 100) {
            $(".back-go-form").fadeOut(400);
        } else {
            $(".back-go-form").fadeIn(400);
        }
        console.log("Scroll position:", scrollPosition);
    });

    $('.back-go-top', '.back-go-form').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    })

});
