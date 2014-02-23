var nextSection = null;
var currentProfile = null;
var prevSection = null;

Template.about.rendered = function () {
}

Template.about.helpers({
	sectionNumber: function () {
		sectionNumber++;
		return sectionNumber;
	},

	nextSection: function () {
		return nextSection._id;
	},

	previousSection: function () {
		return prevSection._id;
	},

	hasNext: function (){
		currentProfile = this;
		var profs = Profiles.find({}, {sort: {isTeam: -1}});
		var nextProf = null;
		var foundCurrent = false;
		profs.forEach(function (post) {
			if(foundCurrent === true){
				nextProf = post;
				foundCurrent = false;
			}
			if (post._id === currentProfile._id){
				foundCurrent = true;
			}
		});
		if(nextProf !== null){
			nextSection = nextProf;
			return true;
		}
		return false;
	},

	hasPrev: function () {
		if(prevSection !== null){
			return true;
		}
		return false;
	},

	incSection: function() {
		prevSection = currentProfile;
	},

	userProfiles: function () {
		sectionNumber = 0;
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