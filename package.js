Package.describe({
	summary : "Moment with languages",
	git : "https://github.com/jeeeyul/moment-with-langs.git",
	version : "2.8.2"
});

Package.on_use(function(api, where) {
	api.use("underscore@1.0.0");
	
	if (api.export) {
		api.export("moment");
	}

	api.add_files('lib/moment/min/moment-with-locales.min.js');
	api.add_files('lib/export-moment.js');
});

Package.on_test(function(api){
	api.use(["jeeeyul:moment-with-langs", "tinytest"], ["client", "server"]);
	api.add_files("test/basics.js", ["client", "server"]);
});
