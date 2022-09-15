$(document).ready(function () {

  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);

  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function () {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  $('.menu li a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = $(this.hash);

    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70
      }, 1000);
    }

  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    centerMode: true,
    slidesToShow: 3,
    fade: false,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Previous</button>',

    responsive: [{
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  var body = $('body');
  var menuTrigger = $('.js-menu-trigger');
  var mainOverlay = $('.js-main-overlay');

  menuTrigger.on('click', function () {
    body.addClass('menu-is-active');
  });

  mainOverlay.on('click', function () {
    body.removeClass('menu-is-active');
  });

  $('.menu li a').on('click', function () {
    $('body').removeClass("menu-is-active");
  });


});