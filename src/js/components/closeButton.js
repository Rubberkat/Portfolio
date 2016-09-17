var $ = require('jquery');


$('.close-button svg').click(function (e) {
    $('.block').removeClass('active');
    $('.page-container').removeClass('active');
    e.stopPropagation();
});

