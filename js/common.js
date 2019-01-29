
$(document).ready(function(){
    $('.btn-req').on('click', function () {
        $('.request-box').addClass('showed');
        $('.overlay').addClass('overlay-showed');
    });
    $('.btn-close').on('click', function () {
        $(this).closest('.request').removeClass('showed');
        $('.overlay').removeClass('overlay-showed');
    });

    $('.document-change .btn-delete').on('click', function () {
        $(this).closest('.request-leave-item').fadeOut();
    });

    $('.call-confirm').on('click', function () {
        $('.request-confirm').removeClass('hide');
        $('.request-confirm').addClass('showed');
    });

    $('.call-cancel').on('click', function () {
        $('.request-cancel').addClass('showed');
    });

    $('.call-done').on('click', function () {
        $('.request-success').addClass('showed');
    });

    $('.call-cancel-done').on('click', function () {
        $('.request-cancel-done').addClass('showed');
    });
    $('.call-success').on('click', function () {
        $('.request-success').addClass('showed');
    });
    // $('.btn-close').on('click', function () {
    //     $('.request-confirm').removeClass('showed');
    //     $('.overlay').removeClass('overlay-showed');
    // });

    $('.call-request').on('click', function () {
        $('.request-confirm').removeClass('showed');
        $('.request-cancel').removeClass('showed');
    });

    $('.call-delivery').on('click', function () {
        $('.delivery-order').removeClass('hide');
        $('.overlay').addClass('overlay-showed');
        $('.delivery-order').addClass('showed');
    });

    $('.call-speciality').on('click', function () {
        $('.speciality-box').removeClass('hide');
        $('.overlay').addClass('overlay-showed');
        $('.speciality-box').addClass('showed');
    });
    $('.call-edit-first').on('click', function () {
        $('.overlay').addClass('overlay-showed');
        $('.univer-edit-first').addClass('showed');
    });
    $('.call-edit-second').on('click', function () {
        $('.overlay').addClass('overlay-showed');
        $('.univer-edit-second').addClass('showed');
    });

    $('.call-search').on('click', function () {
        $('.search-cover-box').addClass('search-showed');
    });
    $('.close-search').on('click', function () {
        $('.search-cover-box').removeClass('search-showed');;
    });

    $('.call-univerList').on('click', function () {
        $('.delivery-order').removeClass('hide');
        $('.overlay').addClass('overlay-showed');
        $('.univer-chatbox').addClass('showed');
    });

});

// sl-gallery
$('.univer-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.univer-nav'
});
$('.univer-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.univer-for',
    arrows: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true
});
//  SLIDER-REF
$('.sl-ref').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});


