$(document).ready(function() {
	$('#hamburger').click(function() {

        $hamburgerBlock = $('.menu_block');

		if ($(this).hasClass('open')) {
            $hamburgerBlock.css({"opacity": "0"});
            $hamburgerBlock.css({"visibility": "hidden"});
		}
		else {
            $hamburgerBlock.css({"opacity": "1"});
            $hamburgerBlock.css({"visibility": "visible"});
		}

		$(this).toggleClass('open');
	});

    $('#navigation_menu').click(function() {

        $navigationBlock = $('.left_sidebar');

		if ($(this).hasClass('open')) {
            $navigationBlock.css({"opacity": "0"});
            $navigationBlock.css({"visibility": "hidden"});
            $navigationBlock.css({"width": "0"});
		}
		else {
            $navigationBlock.css({"opacity": "1"});
            $navigationBlock.css({"visibility": "visible"});
            $navigationBlock.css({"width": "300px"});
		}

		$(this).toggleClass('open');
	});

    $('#filter_btn').click(function() {

        $filterBlock = $('.filter_block');

		if ($(this).hasClass('open')) {
            $filterBlock.css({"opacity": "0"});
            $filterBlock.css({"visibility": "hidden"});
            $filterBlock.css({"width": "0"});
		}
		else {
            $filterBlock.css({"opacity": "1"});
            $filterBlock.css({"visibility": "visible"});
            $filterBlock.css({"width": "100%"});
		}

		$(this).toggleClass('open');
	});

    $('#close_filter').click(function() {

        $filterBlock = $('.filter_block');

		if ($filterBlock.css({"opacity": "1"})) {
            $filterBlock.css({"opacity": "0"});
            $filterBlock.css({"visibility": "hidden"});
            $filterBlock.css({"width": "0"});
		}
		else {
            $filterBlock.css({"opacity": "1"});
            $filterBlock.css({"visibility": "visible"});
            $filterBlock.css({"width": "100%"});
		}
    })

    $('.phone_block').click(function() {

        $phonesBlock = $('.phones');

		if ($(this).hasClass('open')) {
            $phonesBlock.css({"opacity": "0"});
            $phonesBlock.css({"visibility": "hidden"});
		}
		else {
            $phonesBlock.css({"opacity": "1"});
            $phonesBlock.css({"visibility": "visible"});
		}

        $(this).toggleClass('open');
    });

    $('.lang_block').click(function() {

        $langBlock = $('.languages');

		if ($(this).hasClass('open')) {
            $langBlock.css({"opacity": "0"});
            $langBlock.css({"visibility": "hidden"});
		}
		else {
            $langBlock.css({"opacity": "1"});
            $langBlock.css({"visibility": "visible"});
		}

        $(this).toggleClass('open');
    });

    $('#cart').click(function() {

        $cartBlock = $('.dropdown-menu');

		if ($(this).hasClass('open')) {
            $cartBlock.css({"opacity": "0"});
            $cartBlock.css({"visibility": "hidden"});
		}
		else {
            $cartBlock.css({"opacity": "1"});
            $cartBlock.css({"visibility": "visible"});
		}

		$(this).toggleClass('open');
	});

    var acc = $('.accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    };

    var sliderWidth = $('.right_sidebar').width();
    $('.index_slide_block').css("width", sliderWidth);

    $('.index_slider_wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 1,
        arrows: false,
        appendDots: $('.slick-slider-dots'),
        adaptiveHeight: true
    });

    var allSlideLength = $('.index_slider_wrapper .index_slide_block').length;
    var clonedSlider = $('.index_slider_wrapper .slick-cloned').length;
    var sliderLength = allSlideLength - clonedSlider;

    if (sliderLength.length > 1) {
        $('.last_slide').text(sliderLength);
        $('.index_slider_wrapper').on('afterChange', function(event, slick, currentSlide) {
            $('.first_slide').text(currentSlide + 1);
        });
    } else {
        $('.last_slide').text('0' + sliderLength);
        $('.index_slider_wrapper').on('afterChange', function(event, slick, currentSlide) {
            $('.first_slide').text('0' + (currentSlide + 1));
        });
    };

    $('.popular_slider').slick({
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.bestsellers_slider').slick({
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.special_offer_slider').slick({
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.materials_slider').slick({
        centerMode: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendArrows: $('.materials_slider_arrows'),
        prevArrow: '<button id="prev" type="button" class="btn"> <img src="images/arrow_prew.png"> </button>',
        nextArrow: '<button id="next" type="button" class="btn"> <img src="images/arrow_next.png"> </button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.blog_slider').slick({
        centerMode: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendArrows: $('.blog_slider_arrows'),
        prevArrow: '<button id="prev" type="button" class="btn"> <img src="images/arrow_prew.png"> </button>',
        nextArrow: '<button id="next" type="button" class="btn"> <img src="images/arrow_next.png"> </button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.text').filter(':odd').addClass('text_right').end()
        .filter(':even').addClass('text_left');

    $('.blog_articles_list li').slice(1, 4).show().css('display', 'flex');
    $('.more').on('click', function (e) {
        e.preventDefault();
        $('.blog_articles_list li:hidden').slice(0, 3).fadeIn().css('display', 'flex');
    });

    // Range Slider
    var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 10000,
    from = 0,
    to = 0;

    $range.ionRangeSlider({
        skin: "round",
        hide_min_max: true,
        hide_from_to: true,
        type: "double",
        min: min,
        max: max,
        from: 100,
        to: 9000,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;
        
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);	
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });
    // End Range Slider

});
