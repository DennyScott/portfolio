Template.profile.rendered = function () {
	fadeIn($('#profile'));
};

Template.profile.events({
	'submit': function (e, template) {
		e.preventDefault();

		var profilePictureName = uploadData('#profilePicture','users/', template);

		var resumeName = uploadData('#resume','users/', template);


		//PUT YOUR STUFF HERE TRAVIS
		//
		//Put ReumeName and profilePictureName into collection
		//
		//
		//
	}
});