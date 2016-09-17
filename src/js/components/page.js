var $ = require('jquery');

$('.block').click(function () {
    //
    var $this = $(this);

    if ($this.hasClass('active')) {
        $this.addClass('active');


        return false;
    }

    $('.block').removeClass('active').addClass('hidden');
    $this.addClass('active');
    $this.removeClass('hidden');
});

