Router.configure({
  layoutTemplate: 'default'
});

Router.map(function() {
	this.route('home',{
		path: '/',
		template: 'home',
		yieldTemplates: {
			'navbar': {to: 'navbar'},
			'breadcrumbs' : {to: 'breadcrumbs'},
			'footer': {to: 'footer'}
		}
	});
});