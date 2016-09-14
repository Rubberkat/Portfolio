var $ = require('jquery');


$(".block-container").hover(function () {
    $(this).toggleClass("block-hover");
    $(".block-container").not(this).toggleClass("no-hover");
});
