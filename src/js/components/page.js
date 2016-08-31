var $ = require('jquery');

$('.block').click(function () {
    var $parent = $(this).parent();

    if ($parent.hasClass('active')) {
        $parent.removeClass('active');
        return false;
    }

    $('.block-container').removeClass('active');
    $parent.addClass('active');
});
