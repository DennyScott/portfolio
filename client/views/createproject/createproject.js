var sf = new SmartFile({});

Template.createproject.rendered = function () {
	fadeIn($('#createproject-content'));
	$(':checkbox').checkbox();
};

Template.createproject.events({
	'submit': function (e, template) {
		e.preventDefault();

		var file = template.find('#address').files[0];
		console.log(file);
		sf.upload(file, {
			file: file.name,
			path : 'images/'
		},function(err, res){
			if(err)
				console.log(err);
		});

		var typeReturn;
		if($("#web-check").is(':checked') && $("#game-check").is(':checked') ){
			typeReturn = "Web Game";
		} else if ($("#web-check").is(':checked')){
			typeReturn = "Web";
		} else if ($("#game-check").is(':checked')){
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
			image: file.name,
			type: typeReturn,
			description: $("#description").val(),
			github: $("#github").val(),
			url: $("#url").val(),
			download: $('#download').val()

		};

		var projectID = Meteor.call("project", project, function(){});
	}
});