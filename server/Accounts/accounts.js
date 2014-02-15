Meteor.startup(function() {
	AccountsEntry.config({
		signupCode: "DennyIsAwesome",
		defaultProfile: {
			someDefault: 'default'
		}
	});
});