var $ = require('jquery');

var block = $('.block');


$(document).ready(function () {
    var colors = ["#3b2857", '#00A36D', '#008E99', '#dfa907', '#D6762E', '#6E2D27', '#004166'];

    block.each(function () {
        var i = colors[Math.floor(Math.random() * colors.length)];

        $(this).css("background-color", i);
        colors.splice(colors.indexOf(i), 1);
    });
});


block.mouseover(function () {
    var $this = $(this);

    $this.addClass('hover');
    block.not($this).addClass('no-hover');

    block.mouseleave(function () {
        $this.removeClass('hover');
        block.not($this).removeClass('no-hover');
    })


});


block.click(function () {
    var $this = $(this);

    $this.addClass('active');
    block.not(this).removeClass('active');
    $(this).css('cursor', 'auto');
    if (screen.width < 850) {
        $('html, body').animate({
            scrollTop: $this.offset().top
        }, 0);
        block.not(this).css('display', 'none');
    }
});




