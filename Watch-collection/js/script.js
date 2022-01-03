$(function () {
    $(".watch-band-img").waypoint(
        function (direction) {
            $(".watch-band-img").addClass("watch-band-img-bg");
        },
        {
            offset: "50%",
        }
    );
    $(".secoldary-menu-section").slick({
        infinite: true,
        slidesToShow: 12,
        slidesToScroll: 1,
        nextArrow: 0,
        lazyLoad: "ondemand",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 10,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    });
    $(".shop-watches").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        nextArrow: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: "ondemand",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
