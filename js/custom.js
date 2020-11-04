;(function($){
    "use strict";
    
    $('.main_slider').on('init', function (e, slick) {
          var $firstAnimatingElements = $('div.slider_item:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
      });
      $('.main_slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('div.slider_item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);
      });
      $('.main_slider').slick({
          autoplay: true,
          autoplaySpeed: 8000,
          speed: 2000,
          dots: true,
          fade: true,
          prevArrow: ".left_arrow",
          nextArrow: ".right_arrow",
      });

      function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function () {
              var $this = $(this);
              var $animationDelay = $this.data('delay');
              var $animationType = 'animated ' + $this.data('animation');
              $this.css({
                  'animation-delay': $animationDelay,
                  '-webkit-animation-delay': $animationDelay
              });
              $this.addClass($animationType).one(animationEndEvents, function () {
                  $this.removeClass($animationType);
              });
          });
      }
    
    if ($('.con_testimonial_slider').length) {
        $('.con_testimonial_slider').slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            speed: 1000,
            dots: true,
            arrows: true,
            prevArrow:'.prev',
            nextArrow:'.next',
        });
    }
    
    if ($('#testimonila_slider').length) {
        $('#testimonila_slider').slick({
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            speed: 2000,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    
    
    if ($('#project_slider').length) {
        $('#project_slider').slick({
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            speed: 1000,
            centerMode: true,
            centerPadding: '220px',
            dots: false,
            arrows: true,
            prevArrow:'.prev',
            nextArrow:'.next',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                }
            ]
        });
    }
    
    
    /* ===== Parallax Effect===== */
	function parallaxEffect() {
        if($('.parallax-effect').length){
            $('.parallax-effect').parallax();
        };
	}
    parallaxEffect();
    
    /*===========Portfolio isotope js===========*/
    function portfolioMasonry(){
        var portfolio = $("#work-portfolio");
        if( portfolio.length ){
            portfolio.imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                portfolio.isotope({
                    itemSelector: '.portfolio_item',
                    layoutMode: 'masonry',
                    animationOptions :{
                        duration:1000
                    },
                    hiddenStyle: {
                        opacity: 0,
                        transform: 'scale(.4)rotate(60deg)',
                    },
                    visibleStyle: {
                        opacity: 1,
                        transform: 'scale(1)rotate(0deg)',
                    },
                    stagger: 0,
                    transitionDuration: '0.5s',
                });

                // Add isotope click function
                $("#portfolio_filter div").on('click',function(){
                    $("#portfolio_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                    })
                    return false;
                })
            })
        }
    }
    portfolioMasonry();
    
    var headerFixed = function() {
        $('#header').each(function() {
            var nav = $('#header');
            $(window).on('load', function(){
                var header = $('#header');           
                var offsetTop = $('#header').offset().top;
                var headerHeight = $('#header').height();             
                var buffer  = $('<div>', { height: headerHeight }).insertAfter(header);   
                    buffer.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop  ) {
                        $('#header').addClass('fixed-header');
                        buffer.show();
                    } else {
                        $('#header').removeClass('fixed-header');
                        buffer.hide();
                    }
                });
            });
        });
    };
    headerFixed();
    
    /* Counter Js */
    function counterUp(){
        if ( $('.counter').length ){ 
            $('.counter').counterUp({
                delay: 1,
                time: 250
            });
        };
    };  
    
    counterUp();
    
    /*--------------- End popup-js--------*/
    function popupGallery(){
        if($('.popup-youtube').length){
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass:  'mfp-with-zoom mfp-img-mobile',
            });
        }
    }
    popupGallery();
    
    $('.search-btn').on('click', function(){
        $('body').addClass('open');
        setTimeout(function () {
            $('.search-input').focus();
        }, 500);
        return false;
    });
	$('.close_icon').on('click', function(){
		$('body').removeClass('open');
		return false;
	});
    
    /*--------- WOW js-----------*/
    function wowAnimation(){
        new WOW({
            offset: 100,          
            mobile: true
        }).init()
    }
    wowAnimation();
    
    /*-------------------------------------------------------------------------------
	  Loader
	-------------------------------------------------------------------------------*/
	$(".animsition").animsition({
	    inClass: 'fade-in',
	    outClass: 'fade-out',
	    inDuration: 1000,
	    outDuration: 700,
	    linkElement: '.side',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: true,
	    loadingParentElement: 'body', //animsition wrapper element
	    loadingClass: 'spinner',
	    loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: ['animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay: false,
	    overlayClass: 'animsition-overlay-slide',
	    overlayParentElement: 'body',
	    transition: function (url) {
	        window.location.href = url;
	    }
	});
    
})(jQuery)