var $ = require('jquery');

$(function() {

    $('.burger').click(function() {

        var $parent = $(this).parent();

        if ($parent.hasClass('active')) {
            $parent.removeClass('active');
            $('html, body').css({
                'overflow': 'hidden',
                'height': '100%'
            });


            return false;

        } if (!$parent.hasClass('active')) {
            $('html, body').css({
                'overflow': 'auto',
                'height': 'auto'
            });
        }



        $('.burgercontainer').removeClass('active');
        $parent.addClass('active');

    });
});