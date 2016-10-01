var $ = require('jquery');

function closeButton() {
    var block = $('.block');

    block.removeClass('active');
    $('.block, .page-container').css('transition', '');
    history.pushState(null, null, ' ');
}

$('.close-button').click(function (e) {
    closeButton();
    e.stopPropagation();
});

$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        closeButton();
    }
});

