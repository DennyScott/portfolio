var sf = new SmartFile();
var exchange = "https://app.smartfile.com/api/2/path/exchange/";
var key = "mAedF69KyWKL7r2ww0keYcDaMXEc0v";
var password = "KW27qpLyXOHu4n7xritiFSmyyOLhcD";
var publicRoot = "https://file.ac/wYSWdRt9cvg/"

sf.configure({
	key: key,
	password: password,
	basePath: "",
	publicRootUrl: publicRoot
});

sf.onUpload = function (result, options) {
    //result is the smartfile api JSON response
    console.log("File uploaded to " + result[0].path);
};

sf.onUploadFail = function (error, options) {
	console.log("SmartFile returned error", error.statusCode, error.detail);
};



Meteor.methods({
	getSmartFiles : function () {
		return sf.ls("");
	},

	getPublicRoot : function() {
		return publicRoot;
	},

	exchangeSmartFiles : function(pathName) {
		try{
			var httpResponse = HTTP.post(exchange+"?download=true",{
				auth:sf._getApiAuthString(),
				data: {
					path: pathName
				},
				download:true
			});
			var url = httpResponse.data.url;
			return url;

		}catch(e){
			console.log(e.message);
		}

	},

	 createDirectory : function (name) {
	 	sf.mkdir(name);
	 },

	 remove : function (name) {
	 	sf.rm(name);
	 }
	});