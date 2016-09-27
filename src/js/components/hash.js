var $ = require('jquery');

var block = $('.block');

$(document).ready(function () {
    var hash = window.location.hash;

    if (hash === '') {
        $('.block').removeClass('active');
    }
    block.each(function () {
        if (hash === $(this).attr("id")) {
            window.location.hash.replace("#", "");
            $(this).addClass('active');
            $(this).css('transition', 'none');
            $('.page-container').css('transition', 'none');
        }
    });
});