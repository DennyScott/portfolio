Meteor.call("S3config",{
    key: 'AKIAILMXNZYL7FXYDSRA',
    secret: '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',
    bucket: 'moonliteimages',
});

Meteor.methods({
	getURL: function (url, context) {
		console.log(url);
	}
});