Package.describe({
	summary : "Moment + Timezone with all locales and timezone data.",
	git : "https://github.com/jeeeyul/meteor-moment-aio.git",
	version : "2.12.1"
});

Package.on_use(function(api, where) {
	api.use("underscore@1.0.0");

	if (api.export) {
		api.export("moment");
	}

	api.add_files('lib/moment-with-locales.js');
	api.add_files('lib/moment-timezone-with-data.js');
	api.add_files('lib/export-moment.js');
});

Package.on_test(function(api){
	api.use(["jeeeyul:moment-aio", "tinytest"], ["client", "server"]);
	api.add_files("test/basics.js", ["client", "server"]);
});
