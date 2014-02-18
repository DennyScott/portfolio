Template.blogIndex.rendered = function () {
	fadeIn($('#meteor-blog'));
};

Template.blogIndex.destroyed = function () {
	removeFade();
};

Template.blogShow.rendered = function () {
	fadeIn($('#meteor-blog'));
};