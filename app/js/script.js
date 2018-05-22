//Scripts
jQuery(function ($) {

//Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
// scroll body to 0px on click
    $('#back-to-top, #to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.step-block, .resource-block').matchHeight(
        {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        }
    );

    var initialDate = new Date(),
        $year = $("#year");

    if ($year.length) {
        $year.text(initialDate.getUTCFullYear());
    }

});

