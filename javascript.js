$(function() {

    $('.burger').click(function() {

        var $parent = $(this).parent();

        if ($parent.hasClass('active')) {
            $parent.removeClass('active');
            return false;
        }

        $('.burgercontainer').removeClass('active');
        $parent.addClass('active');

    });
});