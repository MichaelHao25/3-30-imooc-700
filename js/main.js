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
	$('.main .play-window .video-wrap .video .video-control .share').on('mouseenter', function() {
		$('.main .play-window .video-wrap .video .video-control .share .layout').fadeIn();
	}).on('mouseleave', function() {
		$('.main .play-window .video-wrap .video .video-control .share .layout').fadeOut();
	});
})
