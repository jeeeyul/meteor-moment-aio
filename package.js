Package.describe({
	summary : "Moment with locales",
	git : "https://github.com/albinekb/moment-with-locales",
	version : "2.12.0"
});

Package.on_use(function(api, where) {
	api.use("underscore@1.0.0");

	if (api.export) {
		api.export("moment");
	}

	api.add_files('lib/moment/min/moment-with-locales.min.js');
	api.add_files('lib/moment-timezone/builds/moment-timezone-data.min.js');
	api.add_files('lib/export-moment.js');
});

Package.on_test(function(api){
	api.use(["jeeeyul:moment-with-langs", "tinytest"], ["client", "server"]);
	api.add_files("test/basics.js", ["client", "server"]);
});
