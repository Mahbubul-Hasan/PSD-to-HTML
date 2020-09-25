// init Isotope
var $grid = $('.grid').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    $('.filter-button-group button').removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// mobile navbar
$(".navbar").on("click", "button", function () {
    $(".nav-mobile").css({ "width": "100%", "display": "block"});
    $(".nav-mobile .navbar-nav").css("display", "block");
})
$(".nav-mobile button, .nav-mobile .nav-link").on("click", function () {
    $(".nav-mobile").css({ "width": "0", "display": "none" });
    $(".nav-mobile .navbar-nav").css("display", "none");
})