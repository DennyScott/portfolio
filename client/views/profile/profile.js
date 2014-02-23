Template.profile.rendered = function () {
	fadeIn($('#profile'));
};

Template.profile.events({
	'submit': function (e, template) {
		e.preventDefault();
		
		var resumeName = "";
		if(typeof template.find('#resume').files[0] !== 'undefined'){
			resumeName = uploadData('#resume','users/', template);
		}

		var resumeName = uploadData('#resume','users/', template);


		//PUT YOUR STUFF HERE TRAVIS
		//
		//Put ReumeName and profilePictureName into collection
		//
		//
		//
	}
});