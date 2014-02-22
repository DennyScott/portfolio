Template.project.helpers({
	getImage: function () {
		return getPublicURL() + "images/" + this.image;

	}
});

Template.project.events({
  'click #projectPage' : function () {
    Router.go('manageproject', {"_id": this._id});
  }
});