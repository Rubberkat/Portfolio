var $ = require('jquery');

$('.block').click(function () {
    var $parent = $(this).parent();

    if ($parent.hasClass('active')) {
        $parent.addClass('active');
        return false;
    }

    $('.block-container').removeClass('active').addClass('hidden');
    $parent.addClass('active');
    $parent.removeClass('hidden');
});
