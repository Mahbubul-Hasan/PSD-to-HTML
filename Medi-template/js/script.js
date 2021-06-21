$(".slider-slick-items").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: 0,
});
$(".featured-brands-slick-items").slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: 0,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 325,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".get-off-slick-items").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: 0,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".health-products-slick-items").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: 0,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 325,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".ayurveda-slick-items").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: 0,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 325,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
