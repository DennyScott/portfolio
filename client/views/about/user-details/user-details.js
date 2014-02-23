Template.userDetails.helpers({
	Name: function () {
		return this.firstName + " " + this.lastName;
	},
	getImage: function(){
		return getPublicURL() + "users/" + this.image;
	},
	hasGithub: function(){
		return this.github===""?false:true;
	},
	hasLinkedIn: function(){
		return this.linkedIn===""?false:true;
	},
	hasResume: function(){
		if(typeof this.resume === 'undefined' || this.resume===""){
			return false;
		}

		return true;
	}


});

Template.userDetails.rendered = function () {
	$("[rel='tooltip']").tooltip();
	console.log($("[rel='tooltip']"));
};