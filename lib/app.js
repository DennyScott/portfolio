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
		template: 'profile',
		data: function () {
			return Profiles.findOne({userId: Meteor.user()._id});
		}
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

//Force all pages to load at the top of the page, and remove any styles to body
var loadAtTop = function() {
	window.scrollTo(0,0);
	var body = $('body');
	body.removeAttr('style'); //Static pages were being made larger by height attr.
};

Router.onRun(loadAtTop); //Load all pages from the top of the page.
