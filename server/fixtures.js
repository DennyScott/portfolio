var team = Profiles.findOne({team: true});

if(!team){
	Meteor.call('teamProfile', {}, function (error, result) {});
}


var projects = Projects.find({$or: [{type: 'Web'}, {type: 'Web Game'}, {type: 'Web Game Media'}]});
		var i = 1;
		projects.forEach(function (project) {
			if(!project['rank']){
				project['rank'] = i;
			}
			i++;
			Projects.update(project._id, project);
		});