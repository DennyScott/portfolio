Projects = new Meteor.Collection('projects');

Meteor.methods({
	/**
	 * This function will data validate the new project being passed
	 * and then if no errors occur, place this new project in
	 * the Project collection
	 * @param  {[object]} projectAttributes [A prelimeanry project object, containg the title, description, and url]
	 * @return {[string]}                   [A String of its ID in the collection]
	 */
	project: function(projectAttributes){
		var user = Meteor.user();
		var userName = user.profile.firstName + " " + user.profile.lastName;

		//Ensures that the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to log in to create new projects");
		}

		if(!projectAttributes.title){
			throw new Meteor.Error(422, 'Error 422: Project must have a title');
		}

		if(!projectAttributes.type){
			throw new Meteor.Error(422, 'Error 424: Project must have a type');
		}

		otherProj = Projects.findOne({title: projectAttributes.title});

		if(otherProj){
			throw new Meteor.Error(423, 'Project Already Exists!');
		}

		//filling in other keys
		var proj = _.extend(_.pick(projectAttributes, 'title','teamMembers', 'type', "description", "image"), {
			createdBy: user._id,
			authorName: userName,
			started: new Date().getTime(),
			recentUpdate: {
				updateDate: new Date().getTime(),
				updateAuthorName: userName,
				updateAuthorID: user._id
			},
			completed: false,
			completionDate : new Date().getTime()
		});

		//Inserts new project into collection
		var projectID = Projects.insert(proj);

		//returns the ID of the new project
		return projectID;
	},

	/**
	 * This function will update the project passed to
	 * have a new update Author and update Time
	 * @param  String id The id of the project to be updated
	 * @return void    Returns nothing
	 */
	updateProject: function(projectAttributes){
		var user = Meteor.user();
		var userName = user.profile.firstName + " " + user.profile.lastName;
		var update = {
				updateDate: new Date().getTime(),
				updateAuthorName: userName,
				updateAuthorID: user._id
			};
		projectAttributes["recentUpdate"] = update;
		Projects.update(projectAttributes._id, projectAttributes);
	},

	deleteProject: function(id){
		Projects.remove(id);
	}
});