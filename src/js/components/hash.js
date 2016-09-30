var $ = require('jquery');

var block = $('.block');

$(document).ready(function () {
    var hash = window.location.hash;

    block.each(function () {
        if (hash === $(this).attr('id')) {
            $(this).addClass('active');
            $(this).css('transition', 'none');
            $('.page-container').css('transition', 'none');
        }
    });
});


block.click(function () {
    history.pushState(null, null, $(this).attr("id"));
});


$(window).on('popstate', function (e) {
    var state = e.originalEvent.state;

    console.log(state);
    if (state === null) {
        if (window.location.hash === '') {
            block.removeClass('active');
            block.css('transition', '');
            $('.page-container').css('transition', '');

        } else {
            block.each(function () {
                if (window.location.hash === $(this).attr('id')) {
                    $(this).addClass('active');
                    if ($(window).width() < 850) {
                        block.not(this).removeClass('active');
                        $('html, body').animate({
                            scrollTop: $(this).offset().top
                        }, 100);
                    }
                }
            });
        }
    }
});