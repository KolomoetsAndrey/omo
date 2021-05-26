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
});