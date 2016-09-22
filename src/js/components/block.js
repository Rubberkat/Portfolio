var $ = require('jquery');

$(".block").hover(function () {
    var $this = $(this);

    $this.toggleClass("block-hover");
    $(".block").not($this).toggleClass("no-hover");

});

$(document).ready(function () {
    var colors = ["#FF534E", "#C4A684", "#A0B07D", "#499989", "#01A2A6", "#703030", "#35203B", "#72616e", "#e8846b",
        "#16528e", "#e54b4b", "#a2c5bf", "#7D8A2E", "#105B63", "#D4AF41", "#468966", "#167C80",
        "#375D81", "#0F2D40"];

    block = $(".block");

    block.each(function () {
        var i = colors[Math.floor(Math.random() * colors.length)];

        $(this).css("background-color", i);
        var index = colors.indexOf(i);
        colors.splice(index, 1);
    });
});