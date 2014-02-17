Template.blogIndex.rendered = function () {
	console.log("here");
	fadeIn($('#meteor-blog'));
};

Template.blogIndex.destroyed = function () {
	removeFade();
};