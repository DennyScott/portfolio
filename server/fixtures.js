var team = Profiles.findOne({team: true});

if(!team){
	Meteor.call('teamProfile', {}, function (error, result) {});
}