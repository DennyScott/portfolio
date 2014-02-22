Profiles = new Meteor.Collection('profiles');

Meteor.methods({

	profile: function(profileAttributes){
		var user = Meteor.user();

		//filling in other keys
		var prof = _.extend(_.pick(profileAttributes), {
			twitter: "",
			title: "",
			bio: "",
			github: "",
			joined: new Date().getTime(),
			image: "",
			userId: user._id
		});

		//Inserts new project into collection
		var userID = Profiles.insert(prof);

		//returns the ID of the new project
		return userID;
	},
	updateProfile: function(profileAttributes){
		var user = Meteor.user();
		Profiles.update(profileAttributes._id, profileAttributes);
	},

	deleteProfile: function(id){
		Profiles.remove(id);
	}
});