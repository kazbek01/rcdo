
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

    //data-table
    $('.data-table').DataTable({
        "searching": false,
        "paging": false,
        "columnDefs":[
            {
                "targets": [1,2,5],
                "orderable": false
            }
        ]
    });


    //equal

    setEqualHeight($(".row-equal > div"));
    //
    $('#widget').draggable();


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
$(function() {
    $("#ex2").slider({});
    //your code here
    //select
    var x, i, j, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);


    //select-end
});

