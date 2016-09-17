var $ = require('jquery');



$(".block").hover(function () {
    var $this = $(this);

    $this.toggleClass("block-hover");
    $(".block").not($this).toggleClass("no-hover");
});
