Template.createproject.rendered = function () {
	fadeIn($('#createproject-content'));
};

Template.createproject.events({
	'submit': function () {
		var typeReturn;
		if($("#web-check").is(':checked') && $("#game-check").is(':checked') ){
			typeReturn = "Web Game";
		} else if ($("#web-check").is(':checked')){
			typeReturn = "Web";
		} else if ($("#game-check").is(':checked')){
			typeReturn = "Game";
		} else {
			typeReturn = "Web"
		}

		var teamMembers = $("#teamMembers").val().trim().split(",");
		var teamArray = new Array();

		for(var i = 0; i < teamMembers.length; i++){

			var names = teamMembers[i].trim().split(" ");
			var foundUser = Meteor.users.findOne({"profile.lastName": names[1], "profile.firstName": names[0]});
			teamArray[i] = {
				userId: foundUser !== undefined?foundUser._id:"Not Found",
				name: names[0] + " " + names[1]
			}

		}
		var project = {
			title: $("#projectName").val(),
			teamMembers: teamArray,
			image: $("#address").val(),
			type: typeReturn,
			description: $("#description").val()

		}
		Meteor.call("project", project, function(){});
	}
});