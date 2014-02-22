var sf = new SmartFile({});

Template.manageproject.rendered = function () {
	fadeIn($('#createproject-content'));
	$(':checkbox').checkbox();
	var proj = Projects.findOne({_id : Session.get("currentProject")});

	if (proj.type.indexOf("Web") !== -1){
		$("#checkbox1").checkbox('check') 
	}

	if(proj.type.indexOf("Game") !== -1){
		$("#checkbox2").checkbox('check') 
	}
};

Template.manageproject.created = function () {
	
};



Template.manageproject.events({
	'submit': function (e, template) {
		e.preventDefault();

		var file = template.find('#address').files[0];
		var fileName = this.image;
		if(file !== undefined){
			console.log(file);
			sf.upload(file, {
				file: file.name,
				path : 'images/'
			},function(err, res){
				if(err)
					console.log(err);
			});

			fileName = file.name;
		}


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
			_id : this._id,
			title: $("#projectName").val(),
			teamMembers: teamArray,
			image: fileName,
			type: typeReturn,
			description: $("#description").val(),
			github: $("#github").val(),
			url: $("#url").val(),
			download: $('#download').val()

		};

		var projectID = Meteor.call("updateProject", project, function(error){
			if(error){
				console.log(error.reason);
			}
		});
		Router.go("/");
	},

	'click #delBtn': function () {
		Projects.remove(this._id);
		Router.go("/");
	}
});

Template.manageproject.helpers({
	getMembers: function () {
		var members = this.teamMembers;
		console.log(members);
		var returnString = "";
		for(var i = 0; i < members.length; i++){
			if(i !== 0){
				returnString += ", "
			}
			returnString += members[i].name;
		}
		return returnString;
	}
});