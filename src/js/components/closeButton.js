var $ = require('jquery');
var block = $('.block');

function closeButton() {

    block.removeClass('active');
    $('.block, .page-container').css('transition', '');
    history.pushState(null, null, ' ');
    if (screen.width < 850) {
        block.css('display', 'block');
    }
}

$('.close-button').click(function (e) {

    closeButton();
    e.stopPropagation();
});


$(document).keydown(function (e) {

    if (e.keyCode === 27) {
        if (block.hasClass('active')) {
            closeButton();
        }
    }
});

