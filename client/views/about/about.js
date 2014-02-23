sectionNumber = 0;

Template.about.rendered = function () {
	sectionNumber = 0;
}

Template.about.helpers({
	sectionNumber: function () {
		sectionNumber++;
		return sectionNumber;
	},

	nextNumber: function () {
		return sectionNumber + 1;
	},

	previousNumber: function () {
		return sectionNumber - 1;
	},

	hasNext: function (){
		var totalSize = Profiles.find({}).fetch().length;
		if(sectionNumber < totalSize){
			return true;
		}
		return false;
	},

	hasPrev: function () {
		if(sectionNumber > 1) {
			return true;
		}
		return false;
	},

	userProfiles: function () {
		return Profiles.find({}, {sort: {isTeam: -1}});
	}
});

Template.about.rendered = function () {
	$('.section').width(($(window).width()));
	// $('#footer').css('position','fixed').css('width', '100%').css('bottom', '0');
	video();

	$('#Denny-video').videobackground({
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

	$('#Travis-video').videobackground({
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

	$('#The-video').videobackground({
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

	$('.person').height($('#The-video').height()+100);

	fadeIn($('#about-content'));
};

Template.about.destroyed = function () {
	$('#footer').css('position','relative').css('width', '100%').css('bottom', '');
	removeFade();
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