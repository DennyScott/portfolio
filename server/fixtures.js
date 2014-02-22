var team = Profiles.findOne({isTeam: true});

if(!team){
	Meteor.call('teamProfile', {}, function (error, result) {});
}