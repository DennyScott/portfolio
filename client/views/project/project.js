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

	userFound: function() {
		var names = this.split(" ");
		var prof = Profiles.findOne({lastName: names[1], firstName: names[0]});
		if(prof){
			return true;
		}
		return false;
	},

	personAddress: function() {
		var names = this.split(" ");

		var prof = Profiles.findOne({lastName: names[1], firstName: names[0]});
		if(prof){
			return prof._id;
		}
		return "";
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

	getMacDownload: function() {
		return getPublicURL() + "projects/" + this.macDownload + "?download=true";
	},

	getWindowDownload: function() {
		return getPublicURL() + "projects/" + this.windowDownload + "?download=true";
	},


	getDescription: function() {
		if(this.description.length > 300){
			return this.description.substring(0,300) + "...";
		}else{
			return this.description;
		}
	}
});

Template.project.events({
  'click #projectPage' : function () {
    Router.go('manageproject', {"_id": this._id});
  },

  'click .upVote' : function () {
		changeVote(this._id, 1);
  },
    'click .downVote' : function () {
		changeVote(this._id, -1);
  }
});

function changeVote(projectId, num){
	var project = Projects.findOne(projectId);
	project.rank += num;
	Meteor.call("updateProject", project);
}