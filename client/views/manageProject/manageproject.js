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

	if(proj.type.indexOf("Media") !== -1){
		$("#checkbox2").checkbox('check') 
	}

	fileInput();
};

Template.manageproject.created = function () {
	
};



Template.manageproject.events({
	'submit': function (e, template) {
		e.preventDefault();

		var imageName = this.image;
		if(typeof template.find('#address').files[0] !== 'undefined'){
			imageName = uploadData('#address','images/', template);
		}

		//Get Windows Unity Game
		var windowUnityName = this.windowDownload;
		if(typeof template.find('#windowUnity').files[0] !== 'undefined'){
			windowUnityName = uploadData('#windowUnity','projects/', template);
		}

		//Get Mac Unity Game
		var macUnityName = this.macDownload;
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
			_id: this._id,
			windowDownload: windowUnityName,
			macDownload: macUnityName

		};	

		var projectID = Meteor.call("updateProject", project, function(error){
			if(error){
				console.log(error.reason);
			}
		});
		Meteor.setTimeout(function(){

			Router.go("/");
		},5000);
	},

	'click #delBtn': function () {
		Meteor.call("deleteProject", this._id, function(err,res){
			if(err)
				console.log();
		});
		Router.go("/");
	}
});

Template.manageproject.helpers({
	getMembers: function () {
		var members = this.teamMembers;
		var returnString = "";
		for(var i = 0; i < members.length; i++){
			if(i !== 0){
				returnString += ", "
			}
			returnString += members[i];
		}
		return returnString;
	}
});