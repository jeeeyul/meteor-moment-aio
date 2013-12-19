Package.describe({
	summary : "Moment with languages"
});

Package.on_use(function(api, where) {
	api.use("underscore");
	
	if (api.export) {
		api.export("moment");
	}

	api.add_files('lib/moment-with-langs.min.js');
	api.add_files('lib/korean-bug-fix.js');
	api.add_files('lib/export-moment.js');
});