(function ($) {
  "use strict";

  // data - background
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })

  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "767"
  });

  // sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 2) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });


  // One Page Nav
  var top_offset = $('.header-area').height() - 10;
  $('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
  });

// testimonial active 
$('.testimonial-active').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});


// isotope 

  var $grid = $('.portfolio-active').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  })

  $('.portfolio-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class

$('.portfolio-menu button').on('click',function(event){
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
    event.preventDefault();
});


// magnificPopup 

$('.popup-img').magnificPopup({
  type: 'image'
});

   /*============================================
               Preloader
      ==============================================*/
      $(window).on('load', function() {
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
        }
    });

     /*============================================
                04: Back to top button
      ==============================================*/

      var $backToTopBtn = $('.back-to-top');

      if ($backToTopBtn.length) {
          var scrollTrigger = 400, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $backToTopBtn.addClass('show');
              } else {
                  $backToTopBtn.removeClass('show');
              }
          };

          backToTop();

          $(window).on('scroll', function () {
              backToTop();
          });

          $backToTopBtn.on('click', function (e) {
              e.preventDefault();
              $('html,body').animate({
                  scrollTop: 0
              }, 700);
          });
      }





})(jQuery);