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
	},

	hasCV: function(){
		if(typeof this.cv === 'undefined' || this.cv===""){
			return false;
		}

		return true;
	},

	getResume: function(){
		return getPublicURL() + "users/" + this.resume + "?download=true";
	},

	getCV: function(){
		return getPublicURL() + "users/" + this.cv + "?download=true";
	}


});