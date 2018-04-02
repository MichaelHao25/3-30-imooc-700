require.config({　　　　
	paths: {
		"jquery": "./jquery-1.12.4.min",
		"swiper": "./swiper",
		"animation": "./wow",
		"swiper-animation": "./swiper.animate1.0.2.min",
	},
	shim: {
		animation: {
			deps: [],
			exports: 'WOW'
		}
	}

});
require(['jquery'], function($) {
	var media = document.createElement('style')
	media.innerHTML = ".cp{cursor: pointer;}";
	document.getElementsByTagName('head')[0].appendChild(media);
	$('body *[href]').addClass('cp');
	$('body *[href]').on('click', function() {
		if ($(this).attr('target')) {
			window.open($(this).attr('href'));
		} else {
			window.location.href = $(this).attr('href');
		}
	});

})
