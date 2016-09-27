var $ = require('jquery');

var block = $('.block');

$(document).ready(function () {
    var colors = ["#442F66", '#68489C', '#9365DB', '#003322', '#00704B', '#00A36D', '#006169',
        '#008E99', '#00B2BF', '#346327', '#51993C', '#66C24D', '#6E5303', '#A67E05',
        '#CC9B06', '#6E3C18', '#AB5E25', '#D6762E', '#6E2D27', '#AB473D', '#DE5C50',
        '#612866', '#A544AD', '#D458DE', '#004166', '#006EAD', '#008DDE'];

    block.each(function () {
        var i = colors[Math.floor(Math.random() * colors.length)];

        $(this).css("background-color", i);
        var index = colors.indexOf(i);
        colors.splice(index, 1);
    });
});


block.hover(function () {
    if (block.not('active')) {
        var $this = $(this);
        $this.toggleClass("hover");
        block.not($this).toggleClass("no-hover");
    }
});


block.click(function () {
    var $this = $(this);

    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    block.not(this).removeClass('active');

    $('html, body').animate({
        scrollTop: $this.offset().top
    }, 100);

});


block.click(function () {
    window.location.hash = $(this).attr("id");

});

