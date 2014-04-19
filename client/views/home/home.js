Meteor.subscribe('projects');
Meteor.subscribe('profiles');

Template.home.rendered = function () {




  // Rig some famo.us deps
  require("famous-polyfills"); // Add polyfills
  require("famous/core/famous"); // Add the default css file

  // Basic deps
  var Engine             = require("famous/core/Engine");
  var Modifier           = require("famous/core/Modifier");
  var RenderController   = require("famous/views/RenderController");


  // Make sure dom got a body...
  Meteor.startup(function() {
    var Surface = require("famous/core/Surface"); // This one needs document.body
      var View 			 = require('famous/core/View');
  var Modifier			 = require('famous/core/Modifier');
  var OptionsManager	 = require('famous/core/OptionsManager');
  var RenderNode		 = require('famous/core/RenderNode');
  var Utility			 = require('famous/utilities/Utility');
  var RenderController   = require('famous/views/RenderController');
  var NavigationBar		 = require('famous/widgets/NavigationBar');

  var EdgeSwapper = require('famous/views/EdgeSwapper');

    var mainContext = Engine.createContext();
    var renderController = new RenderController();
    var Scrollview = require('famous/views/Scrollview');
    var splashimage = new Surface({
    	classes:['splash-image'],
    	size:[undefined, 1000],
    	properties: {
    		background: "url('images/landscape.jpg')",
    		textAlign: 'center',
    		'background-size': '100%',
    		width: '100%',
    		height: '1000px',
    		'background-repeat': 'no-repeat',
    		'background-position': 'top center'
    	}
    });

    // create the content area
    var content = new EdgeSwapper({
    	inTransition: {curve: 'easeOutBounce', duration: 50000},
    	overlap: false
    });
    // create the content area
    var contentArea = new View();
    var logo = new Surface({
    	size: [undefined, undefined],
    	content: '<h1>Zephyrware</h1><img class="zephyrware-logo" src="' + 'images/logo.png' + '"/>',
    	properties: {
    		lineHeight: '200px',
    		textAlign: 'center',
    		'background-repeat': 'no-repeat'
    	}
    });
    contentArea.add(splashimage);
    contentArea.add(content);
    renderController.show(contentArea);

    // Engine.on("click", function() {
    //     var next = (counter++ + 1) % surfaces.length;
    //     this.show(surfaces[next]);
    // }.bind(renderController));

mainContext.add(renderController);
content.show(logo);

});




};

Template.home.destroyed = function () {
	removeFade();
};

Template.home.events({
	'click #games': function () {
		$('#web-content').css("display","none");
		$('#media-content').css("display","none");
		$('#game-content').css("display","inline");
		$('#games').addClass("selected");
		$('#web').removeClass("selected");
		$('#media').removeClass("selected");
	},

	'click #web': function () {
		$('#web-content').css("display","inline");
		$('#game-content').css("display","none");
		$('#media-content').css("display","none");
		$('#web').addClass("selected");
		$('#games').removeClass("selected");
		$('#media').removeClass("selected");
	},

	'click #media': function () {
		$('#web-content').css("display","none");
		$('#game-content').css("display","none");
		$('#media-content').css("display","inline");
		$('#media').addClass("selected");
		$('#games').removeClass("selected");
		$('#web').removeClass("selected");
	}
});

Template.home.helpers({
	game: function() {
		return Projects.find({$or: [{type: 'Game'}, {type: 'Web Game'}, {type: 'Web Game Media'}]});
	},
	web: function() {
		return Projects.find({$or: [{type: 'Web'}, {type: 'Web Game'}, {type: 'Web Game Media'}]}, {sort: {'rank': -1}});
	},
	media: function() {
		return Projects.find({$or: [{type: 'Media'}, {type: 'Web Media'}]});
	}
});