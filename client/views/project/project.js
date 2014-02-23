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
	hasURL: function(){
		if(this.url === ""){
			return false;
		}else{
			return true;
		}
	},

	hasWindows: function(){
		if(this.windowDownload === ""){
			return false;
		}else{
			return true;
		}
	},

	hasMac: function(){
		if(this.macDownload === ""){
			return false;
		}else{
			return true;
		}
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