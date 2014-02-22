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
	}
});

Template.navbar.events({
	'click #sign-out': function () {
		Meteor.logout();
	}
});

Template.navbar.rendered = function () {
};

