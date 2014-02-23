Profiles = new Meteor.Collection('profiles');

Meteor.methods({

	profile: function(profileAttributes){
		var user = Meteor.user();

		//filling in other keys
		var prof = {
			lastName: "",
			firstName: "",
			twitter: "",
			title: "",
			bio: "",
			github: "",
			linkedIn: "",
			joined: new Date().getTime(),
			image: "",
			userId: user._id,
			'team' : false
		};

		//Inserts new project into collection
		var userID = Profiles.insert(prof);

		//returns the ID of the new project
		return userID;
	},

	teamProfile : function () {

		var prof = {
			lastName: "Team",
			firstName: "The",
			twitter: "",
			title: "",
			bio: "",
			github: "",
			linkedIn: "",
			joined: new Date().getTime(),
			image: "",
			'team' : true
		};

		//Inserts new project into collection
		var userID = Profiles.insert(prof);

		//returns the ID of the new project
		return userID;
	},

	updateProfile: function(profileAttributes){
		var user = Meteor.user();
		Profiles.update({"userId": profileAttributes.userId}, profileAttributes);
	},
	updateTeamProfile: function(profileAttributes){
		Profiles.update({"lastName": "Team"}, profileAttributes);
	},

	deleteProfile: function(id){
		Profiles.remove(id);
	}
});