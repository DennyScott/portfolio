Profiles = new Meteor.Collection('profiles');

Meteor.methods({

	profile: function(profileAttributes){
		console.log("created user");
		var user = Meteor.user();

		//filling in other keys
		var prof = {
			lastName: "",
			firstName: "",
			twitter: "",
			role: "",
			specialties: "",
			bio: "",
			github: "",
			linkedIn: "",
			cv: "",
			resume: "",
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
			twitter: "MoonliteStudio1",
			role: "Company",
			specialties: "",
			bio: "Moonlight studio was founded in 2013 as a collaboration to handle work from a prospective client."
			 + " Moonlite Studio has allowed us to work collectivly under a single title as a team, both for clients"
			 + " and on our own personal projects. With Moonlite, we have a common"
			 +" area to which we can share our creations, and search for feedback. To contact us, please visit our contact us page!",
			github: "https://github.com/Moonlite-Studio",
			linkedIn: "",
			joined: new Date().getTime(),
			image: "moon.jpg",
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