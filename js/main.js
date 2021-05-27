// Hmaburger & NavbarMobile
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

    $('.popular_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 5,
        arrows: false,
        adaptiveHeight: true
    });

    $('.bestsellers_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 5,
        arrows: false,
        adaptiveHeight: true
    });

    $('.materials_slider').slick({
        dots: false,
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