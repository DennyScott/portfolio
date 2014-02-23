Template.createproject.rendered = function () {
	fadeIn($('#createproject-content'));
	$(':checkbox').checkbox();
};

Template.createproject.events({
	'submit': function (e, template) {
		e.preventDefault();

		var imageName = "";
		if(typeof template.find('#address').files[0] !== 'undefined'){
			imageName = uploadData('#address','images/', template);
		}

		//Get Windows Unity Game
		var windowUnityName = "";
		if(typeof template.find('#windowUnity').files[0] !== 'undefined'){
			windowUnityName = uploadData('#windowUnity','projects/', template);
		}

		//Get Mac Unity Game
		var macUnityName = "";
		if(typeof template.find('#macUnity').files[0] !== 'undefined'){
			macUnityName = uploadData('#macUnity','projects/', template);
		}

		var typeReturn;
		if($("#checkbox1").is(':checked') && $("#checkbox2").is(':checked') ){
			typeReturn = "Web Game";
		} else if ($("#checkbox1").is(':checked')){
			typeReturn = "Web";
		} else if ($("#checkbox2").is(':checked')){
			typeReturn = "Game";
		} else {
			typeReturn = "Web";
		}

		var teamMembers = $("#teamMembers").val().trim().split(",");
		var teamArray = [];

		for(var i = 0; i < teamMembers.length; i++){

			var names = teamMembers[i].trim().split(" ");
			var foundUser = Meteor.users.findOne({"profile.lastName": names[1], "profile.firstName": names[0]});
			teamArray[i] = {
				userId: foundUser !== undefined?foundUser._id:"Not Found",
				name: names[0] + " " + names[1]
			};

		}

		var project = {
			title: $("#projectName").val(),
			teamMembers: teamArray,
			image: imageName,
			type: typeReturn,
			description: $("#description").val(),
			github: $("#github").val(),
			url: $("#url").val(),
			windowDownload: windowUnityName,
			macDownload: macUnityName

		};

		var projectID = Meteor.call("project", project, function(){});

		Meteor.setTimeout(function(){

			Router.go("/");
		},5000);

	}
});

