var $ = require('jquery');

$('.block').click(function () {
    var $this = $(this);

    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    $('.block').not(this).removeClass('active');
});

