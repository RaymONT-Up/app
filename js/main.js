$(function () {
  // burger menu
  $(".header__burger").click(function (event) {
    $(".header__nav").toggleClass("header__nav--active");
  });
  // slick slider
  // 1
  $(".photo__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // 2
  $(".testimonial__slider-top").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,

    adaptiveHeight: true,

    draggable: false,
    asNavFor: ".testimonial__slider-bottom",

    responsive: [
      {
        breakpoint: 750,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".testimonial__slider-bottom").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    adaptiveHeight: true,
    fade: true,

    draggable: false,
    asNavFor: ".testimonial__slider-top",
  });
  // AOS
  AOS.init({
    disable: "mobile",
    duration: 800,
    once: true,
  });
});
