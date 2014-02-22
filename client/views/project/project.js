Template.project.helpers({
	getImage: function () {
		return getPublicURL() + "images/" + this.image;

	},
	hasGithub: function(){
		if(this.github === ""){
			return false;
		}else{
			return true;
		}
	},
	hasDemo: function(){
		if(this.download === "" && this.url === ""){
			return false;
		}else{
			return true;
		}
	},

	getDemo: function(){
		if(this.download !== ""){
			return this.download;
		}

		return this.url;
	},

	getDescription: function() {
		if(this.description.length > 320){
			return this.description.substring(0,320) + "...";
		}else{
			return this.description;
		}
	}
});

Template.project.events({
  'click #projectPage' : function () {
    Router.go('manageproject', {"_id": this._id});
  }
});