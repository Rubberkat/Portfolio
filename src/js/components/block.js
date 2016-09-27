var $ = require('jquery');

$(document).ready(function () {
    // var colors = ["#003322", "#004F35", "#00704B", "#008F5F", "#00A36D", "#442F66", "#5C3F8A",
    //     "#714DA8", "#9365DB", "#00666E", "#00808A", "#009FAB", "#5AAB43", "#DEA906", "#6E3C18",
    //     "#8A4C1E", "#AB5E25", "#C96F2C", "#DE7A30", "#6E2D27", "#8A3931", "#AB473D", "#DE5C50",
    //     "#612866", "#7C3382", "#A544AD", "#B94DC2", "#004166", "#005382", "#006EAD", "#007EC7"];
    var colors = ["#442F66", '#68489C', '#9365DB', '#003322', '#00704B', '#00A36D', '#006169',
        '#008E99', '#00B2BF', '#346327', '#51993C', '#66C24D', '#6E5303', '#A67E05',
        '#CC9B06', '#6E3C18', '#AB5E25', '#D6762E', '#6E2D27', '#AB473D', '#DE5C50',
        '#612866', '#A544AD', '#D458DE', '#004166', '#006EAD', '#008DDE'];

    block = $(".block");


    block.each(function () {
        var i = colors[Math.floor(Math.random() * colors.length)];

        $(this).css("background-color", i);
        var index = colors.indexOf(i);
        colors.splice(index, 1);

    });
});


$(".block").hover(function () {
    if ($('.block').not('active')) {
        var $this = $(this);
        $this.toggleClass("block-hover");
        $(".block").not($this).toggleClass("no-hover");
    }
});



$('.block').click(function () {
    var $this = $(this);
    var block = $('.block');

    // $(block).removeClass('block-hover');
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    $(block).not(this).removeClass('active');


    // if ($(window).width() < 850) {
    //     $(block).not(this).css('display', 'none');
    // }
});
