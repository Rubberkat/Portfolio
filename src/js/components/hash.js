var $ = require('jquery');

var block = $('.block');

$(document).ready(function () {
    var hash = window.location.hash;

    if (hash === '') {
        history.replaceState(null, null, ' ');
    } else {
        block.each(function () {
            if (hash === $(this).attr('id')) {
                $(this).addClass('active');
                $(this).css('transition', 'none');
                $('.page-container').css('transition', 'none');
            }
        });
    }
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
            history.pushState(null, null, ' ');


        } else {
            block.each(function () {
                if (window.location.hash === $(this).attr('id')) {
                    $(this).addClass('active');
                    block.not(this).removeClass('active');
                    if ($(window).width() < 850) {
                        $('html, body').animate({
                            scrollTop: $(this).offset().top
                        }, 100);
                    }
                }
            });
        }
    }
});