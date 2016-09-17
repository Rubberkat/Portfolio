var $ = require('jquery');


$(".block").hover(function () {
    $(this).toggleClass("block-hover");
    $(".block").not(this).toggleClass("no-hover");
});
