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