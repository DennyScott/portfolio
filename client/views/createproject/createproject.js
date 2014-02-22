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
			description: $("#description").val(),
			github: $("#github").val(),
			url: $("#url").val(),
			download: $('#download').val()

		}

		Meteor.call("project", project, function(){});

		var callback = getURL();
		var context = this;

				var files = $('#address').files;
				_.each(files,function(file){
					var reader = new FileReader;
					var fileData = {
						name:file.name,
						size:file.size,
						type:file.type
					};

					reader.onload = function () {
						fileData.data = new Uint8Array(reader.result);
						Meteor.call("S3upload",fileData,context,callback);
					};

					reader.readAsArrayBuffer(file);

				});
	}
});