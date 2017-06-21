var $ = require('jquery');
var block = $('.block');
// var activePage = '';

function closeButton() {

    block.removeClass('active');
    $('.block, .page-container').css('transition', '');
    block.css('cursor', 'pointer');
    history.pushState(null, null, ' ');
    if (screen.width < 850) {
        block.css('display', 'block');
    }
}

block.click(function () {
    activePage = $(this).attr('id');
    console.log(activePage);
});

// function scrollTo() {
//     if (screen.width < 850) {
//         $('html, body').animate({
//             scrollTop: activePage.offset().top
//         }, 0);
//     }
    $('.close-button').click(function (e) {

        closeButton();
        e.stopPropagation();
    });




    $(document).keydown(function (e) {

        if (block.hasClass('active')) {
            if (e.keyCode === 27) {
                closeButton();
            }
        }
    });

