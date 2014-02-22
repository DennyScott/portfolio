Template.createproject.rendered = function () {
	fadeIn($('#createproject-content'));
};

Template.createproject.events({
	'submit': function () {
		var typeReturn;
		if($("#web-check").is(':checked')){
			typeReturn = "Web";
		} else{
			typeReturn = "Game";
		}
		var project = {
			title: $("#projectName").val(),
			teamMembers: $("#teamMembers").val(),
			image: "/images/SVG/earth.svg",
			type: typeReturn,
			description: $("#description").val()

		}
		Meteor.call("project", project, function(){});
	}
});