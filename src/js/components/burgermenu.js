var $ = require('jquery');

$(function() {

    $('.burger').click(function() {

        var $parent = $(this).parent();

        if ($parent.hasClass('active')) {
            $parent.removeClass('active');

            return false;

        }



        $('.burger-container').removeClass('active');
        $parent.addClass('active');

    });
});