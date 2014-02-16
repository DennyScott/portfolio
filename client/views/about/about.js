Template.about.rendered = function () {
	$('.section').width(($(window).width()-60));
	// $('#footer').css('position','fixed').css('width', '100%').css('bottom', '0');
	video();

	$('#denny-video').videobackground({
		videoSource: [['/video/superpencil.mp4', 'video/mp4'],
			['video/superpencil.webm', 'video/webm'],
			['video/superpencil.ogv', 'video/ogg']],
			poster: '/video/big-buck-bunny.jpg',
			controlPosition: 'none',
			loop: 'true',
			loadedCallback: function() {
				$(this).videobackground('mute');
			}
	});

	$('#travis-video').videobackground({
		videoSource: [['/video/superpencil.mp4', 'video/mp4'],
			['video/superpencil.webm', 'video/webm'],
			['video/superpencil.ogv', 'video/ogg']],
			poster: '/video/big-buck-bunny.jpg',
			controlPosition: 'none',
			loop: 'true',
			loadedCallback: function() {
				$(this).videobackground('mute');
			}
	});

	$('#adam-video').videobackground({
		videoSource: [['/video/superpencil.mp4', 'video/mp4'],
			['video/superpencil.webm', 'video/webm'],
			['video/superpencil.ogv', 'video/ogg']],
			poster: '/video/big-buck-bunny.jpg',
			controlPosition: 'none',
			loop: 'true',
			loadedCallback: function() {
				$(this).videobackground('mute');
			}
	});

	$('.person').height($('#denny-video').height()+100);
};

Template.about.destroyed = function () {
	$('#footer').css('position','relative').css('width', '100%').css('bottom', '');
};

Template.about.events({
	'click .moveAbout': function (event) {
		$anchor = $($(event.target).parent()[0]);
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);
		event.preventDefault();
	}
});