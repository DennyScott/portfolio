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

	$('.person').height($('#denny-video').height()+100);
};

Template.about.destroyed = function () {
	$('#footer').css('position','relative').css('width', '100%').css('bottom', '');
};