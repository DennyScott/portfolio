Template.createproject.rendered = function () {
	fadeIn($('#createproject-content'));
	$(':checkbox').checkbox();
	fileInput();
};

Template.createproject.helpers({
	loading: function () {
		return Session.get("loading");
	}
});

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
		}else if($("#checkbox1").is(':checked') && $("#checkbox3").is(':checked') ){
			typeReturn = "Web Media";
			console.log("Thinks 1 is checked");
		} else if($("#checkbox1").is(':checked') && $("#checkbox2").is(':checked') && $("#checkbox3").is(':checked') ){
			typeReturn = "Web Game Media";
		}else if ($("#checkbox1").is(':checked')){
			typeReturn = "Web";
		} else if ($("#checkbox2").is(':checked')){
			typeReturn = "Game";
		} else if($("#checkbox3").is(':checked')){
			typeReturn = "Media";
		} else {
			typeReturn = "Web";
		}

		var lightbox = false;
		if($("#lightbox").is(':checked'))
			lightbox = true;

		var teamMembers = $("#teamMembers").val().trim().split(",");
		var teamArray = [];

		for(var i = 0; i < teamMembers.length; i++){
			var names = teamMembers[i].trim().split(" ");
			teamArray[i] = names[0] + " " + names[1];
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
			macDownload: macUnityName,
			lightbox: lightbox

		};

		var projectID = Meteor.call("project", project, function(){});

		Session.set("loading", true);

		Meteor.setTimeout(function(){

			Session.set("loading", false);
			Router.go("/");
		},3000);

	}
});

