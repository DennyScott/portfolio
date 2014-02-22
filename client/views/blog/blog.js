Template.blogIndex.rendered = function () {
	fadeIn($('#meteor-blog'));
};

Template.blogIndex.destroyed = function () {
	removeFade();
};

Template.blogShow.rendered = function () {
	fadeIn($('#meteor-blog'));
};

Template.blogAdmin.rendered = function () {
	fadeIn($('#blog-admin'));
};

Template.blogAdminNew.rendered = function () {
	fadeIn($('#blog-admin'));
};

Template.blogAdminEdit.rendered = function () {
	fadeIn($('#blog-admin'));
};