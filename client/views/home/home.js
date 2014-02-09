

Template.home.rendered = function () {
	waypoints();
	console.log($('#test'));

		$('#test').waypoint(function(direction){
			alert('You hit this waypoint');
			$('#test').waypoint('destroy');
		}, {offset: '75%'});

	// $('#test').bind('scroll', function(){
	// 	console.log("hello");
	// });
};