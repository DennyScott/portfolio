Template.navbar.helpers({
	loggedIn: function () {
		return Meteor.user();
	},

	email: function() {
		return Meteor.user().emails[0].address;
	},

	checkProfile: function () {
		var prof = Profiles.findOne({"userId" : Meteor.user()._id});

		if(!prof){
			Meteor.call('profile', {}, function (error, result) {});
		}
	},

	"active":function(path){
		if(Router.current().path === path){
			return "active";
		}
	}
});

Template.navbar.events({
	'click #sign-out': function () {
		Meteor.logout();
	}
});

Template.navbar.rendered = function () {
};

