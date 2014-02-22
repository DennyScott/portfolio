Template.navbar.helpers({
	loggedIn: function () {
		return Meteor.user();
	},

	email: function() {
		return Meteor.user().emails[0].address;
	}
});

Template.navbar.events({
	'click #sign-out': function () {
		Meteor.logout();
	}
});

Template.navbar.rendered = function () {
};

