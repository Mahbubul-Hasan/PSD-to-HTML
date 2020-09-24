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

$(".navbar").on("click", "button", function () {
    $(".nav-mobile").addClass("active");
    $(".nav-mobile").css("width", "100%");
})
$(".nav-mobile").on("click", "button", function () {
    $(".nav-mobile").removeClass("active");
})
$(".nav-mobile .nav-link").on("click", function () {
    $(".nav-mobile").removeClass("active");
})