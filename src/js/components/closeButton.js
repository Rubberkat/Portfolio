var $ = require('jquery');


$('.close-button svg').click(function (e) {

    $('.block').removeClass('active');
    e.stopPropagation();
});

