fadeIn = function($content) {
		$($content).delay(500).animate({opacity:1},700);
};

removeFade = function(){
	Session.set("observing",false);
}