getPublicURL = function() {
	return "https://file.ac/wYSWdRt9cvg/";
};

uploadData = function(selector, path, template){
	var file = template.find(selector).files[0];
	sf.upload(file, {
		file: file.name,
		path : path
	},function(err, res){
		if(err)
			console.log(err);
	});

	return file.name;
};