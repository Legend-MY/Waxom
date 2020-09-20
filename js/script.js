$(document).ready(function () {
  // Slick slider settings
  $('.hero__slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
  });



  // Header change background while scrolling
  $(window).scroll(function () {
    if (this.scrollY > 20)
      $('header').addClass('sticky');
    else
      $('header').removeClass('sticky');
  });



  // Burger adding Class
  $('.menu-burger').click(function () {
    $('.nav').toggleClass('nav-active');
    $('.menu-burger').toggleClass('menu-burger-active');
    $('body').toggleClass('lock');
  });



  // filtering projects
  $('.projects__filter').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.projects__item').show(1000);
    }
    else {
      $('.projects__item').not('.' + value).hide(1000);
      $('.projects__item').filter('.' + value).show(1000);
    };
  });



  // add active class on selected item
  $('.projects__filter').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });



  // statistic block counter
  var show = true;
  $(window).on('scroll', function () {

    if (!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $('.statistic').offset().top;

    // console.log(w_top + " " + e_top);

    if (w_top + 500 >= e_top) {
      $('.statistic__count').each(function () {
        $(this).prop('statistic__item', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });

      show = false;
    }
  });



  // Slick slider POSTS block settings
  $('.posts__row').slick({
    arrows: true,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    appendArrows: $('.posts__arrows'),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


});