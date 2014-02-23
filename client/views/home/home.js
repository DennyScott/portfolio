Meteor.subscribe('projects');
Meteor.subscribe('profiles');

Template.home.rendered = function () {
	waypoints();
	new WOW().init();

		$('#test').waypoint(function(direction){
			alert('You hit this waypoint');
			$('#test').waypoint('destroy');
		}, {offset: '75%'});

		fadeIn($('#home-content'));
};

Template.home.destroyed = function () {
	removeFade();
};

Template.home.events({
	'click #games': function () {
		$('#web-content').css("display","none");
		$('#game-content').css("display","inline");
		$('#games').addClass("selected");
		$('#web').removeClass("selected");
	},

	'click #web': function () {
		$('#web-content').css("display","inline");
		$('#game-content').css("display","none");
		$('#web').addClass("selected");
		$('#games').removeClass("selected");
	}
});

Template.home.helpers({
	game: function() {
		return Projects.find({$or: [{type: 'Game'}, {type: 'Web Game'}]});
	},
	web: function() {
		return Projects.find({$or: [{type: 'Web'}, {type: 'Web Game'}]});
	}
})