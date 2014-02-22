var sf = new SmartFile({});

Template.createproject.rendered = function () {
	fadeIn($('#createproject-content'));
	$(':checkbox').checkbox();
};

Template.createproject.events({
	'submit': function (e, template) {
		e.preventDefault();

		var imageName = uploadData('#address','images/', template);
		var unityName = "";
		if(typeof template.find('#unity').files[0] !== 'undefined'){
			unityName = uploadData('#unity','projects/', template);
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
			download: unityName

		};

		var projectID = Meteor.call("project", project, function(){});
		Router.go("/");
	}
});

function uploadData(selector, path, template){
	var file = template.find(selector).files[0];
	sf.upload(file, {
		file: file.name,
		path : path
	},function(err, res){
		if(err)
			console.log(err);
	});

	return file.name;
}