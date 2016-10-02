var $ = require('jquery');

var block = $('.block');
isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);


$(document).ready(function () {
    var hash = window.location.hash;

    if (hash === '') {
        history.replaceState(null, null, ' ');
    } else {
        block.each(function () {
            if (hash === $(this).attr('id')) {
                history.pushState(null, null, $(this).attr('id'));
                $(this).addClass('active');
                $(this).css('transition', 'none');
                $('.page-container').css('transition', 'none');
                if (screen.width < 850) {
                    block.not(this).css('display', 'none');
                }
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
            history.replaceState(null, null, ' ');
            block.css('display', 'block');
            // }
        } else {
            block.each(function () {
                if (window.location.hash === $(this).attr('id')) {
                    $(this).addClass('active');
                    block.not(this).removeClass('active');
                    if (screen.width < 850) {
                        block.not(this).css('display', 'none');
                    }
                }
            });
        }
    }
});