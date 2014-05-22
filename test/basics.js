Tinytest.add("basic", function(test){
	test.equal(
		moment().lang("ko").fromNow(), 
		"몇초 전", 
		"Korean Support Testing"
	);
});

Tinytest.add("Parsing Korean", function(test){
	test.equal(
		moment("오후 2시", "A h시", "ko").lang("ko").format("H시"),
		"14시",
		"AM/PM parse"
	);
});
