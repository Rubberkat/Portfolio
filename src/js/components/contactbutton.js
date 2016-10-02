var $ = require('jquery');

$(".button").hover(function () {
    var $this = $(this);

    $this.toggleClass("active");
});

