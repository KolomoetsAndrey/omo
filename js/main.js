$(document).ready(function() {
	$('.hamburger').click(function() {

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

    var sliderWidth = $('.wrapper_right_bar').width();
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
        arrows: false,
        adaptiveHeight: true
    });

    $('.bestsellers_slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 5,
        arrows: false,
        adaptiveHeight: true
    });

    $('.materials_slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        appendArrows: $('.materials_slider_arrows'),
        prevArrow: '<button id="prev" type="button" class="btn"> <img src="images/arrow_prew.png"> </button>',
        nextArrow: '<button id="next" type="button" class="btn"> <img src="images/arrow_next.png"> </button>'
    });

    $('.blog_slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        appendArrows: $('.blog_slider_arrows'),
        prevArrow: '<button id="prev" type="button" class="btn"> <img src="images/arrow_prew.png"> </button>',
        nextArrow: '<button id="next" type="button" class="btn"> <img src="images/arrow_next.png"> </button>'
    });
});