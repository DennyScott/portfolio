Template.profile.rendered = function () {
	fadeIn($('#profile'));
	fileInput();
};

Template.profile.helpers({
	loading: function () {
		return Session.get("loading");
	}
});

Template.profile.events({
	'submit': function (e, template) {

		var user = Meteor.user();
		e.preventDefault();

		var profilePictureName = this.image;
		if(typeof template.find('#profilepicture').files[0] !== 'undefined'){
			profilePictureName = uploadData('#profilepicture','users/', template);
		}

		var resumeName = this.resume;

		if(typeof template.find('#resume').files[0] !== 'undefined'){
			resumeName = uploadData('#resume','users/', template);
		}

		var cv = this.cv;

		if(typeof template.find('#cv').files[0] !== 'undefined'){
			cv = uploadData('#cv','users/', template);
		}

		var prof = {
			lastName: $("#lastName").val(),
			firstName: $("#firstName").val(),
			twitter: $("#twitter").val(),
			role: $("#role").val(),
			specialties: $("#specialties").val(),
			bio: $("#biography").val(),
			github: $("#github").val(),
			linkedIn: $("#linkedin").val(),
			joined: this.joined,
			image: profilePictureName,
			userId: user._id,
			cv: cv,
			resume: resumeName,
			'team' : false
		};

		Meteor.call('updateProfile', prof, function (error, result) {});

		Session.set("loading", true);

		Meteor.setTimeout(function(){

			Session.set("loading", false);
			Router.go("/");
		},3000);
	}
});