Template.about.rendered = function () {
	$('.section').width(($(window).width()-60));
	$('#footer').css('position','fixed').css('width', '100%').css('bottom', '0');
};

Template.about.destroyed = function () {
	$('#footer').css('position','relative').css('width', '100%').css('bottom', '');
};