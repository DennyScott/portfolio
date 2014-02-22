Router.configure({
  layoutTemplate: 'default',
  yieldTemplates: {
	'navbar': {to: 'navbar'},
	'footer': {to: 'footer'}
  }
});

Router.map(function() {
	this.route('home',{
		path: '/',
		template: 'home'
	});

	this.route('terms',{
		path: '/terms',
		template: 'voltagePage'
	});

	this.route('profile',{
		path: '/profile',
		template: 'profile'
	});

	this.route('about',{
		path: '/about',
		template: 'about'
	});

	this.route('privacy',{
		path: '/privacy',
		template: 'voltagePage'
	});

	this.route('contact',{
		path: '/contact',
		template: 'contact'
	});

	this.route('createproject',{
		path: '/createproject',
		template: 'createproject'
	});

	this.route('manageproject', {
		path: '/projects/:_id',// match the root path
		template: "manageproject",
		data: function() {
			var project = Projects.findOne({_id: this.params._id});
			Session.set("currentProject", this.params._id);
			return project;
		}
	});
});