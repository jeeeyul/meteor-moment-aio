Package.describe({
	summary : "Moment with languages"
});

Package.on_use(function(api, where) {
	if (api.export) {
		api.export("moment");
	}

	api.add_files('lib/moment-with-langs.min.js');
	api.add_files('export-moment.js');
});