$(document).ready(function() {
	$('#hamburger').click(function() {

        $menuBlock = $('.menu_block');

		if ($(this).hasClass('open')) {
            $menuBlock.css({"opacity": "0"});
            $menuBlock.css({"visibility": "hidden"});
		}
		else {
            $menuBlock.css({"opacity": "1"});
            $menuBlock.css({"visibility": "visible"});
		}

		$(this).toggleClass('open');
	});

    $('#navigation_menu').click(function() {

        $menuBlock = $('.left_sidebar');

		if ($(this).hasClass('open')) {
            $menuBlock.css({"opacity": "0"});
            $menuBlock.css({"visibility": "hidden"});
            $menuBlock.css({"width": "0"});
		}
		else {
            $menuBlock.css({"opacity": "1"});
            $menuBlock.css({"visibility": "visible"});
            $menuBlock.css({"width": "300px"});
		}

		$(this).toggleClass('open');
	});

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

        $phonesBlock = $('.languages');

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
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 3,
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

});