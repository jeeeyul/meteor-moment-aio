_.extend(moment.langData("ko"), {
	isPM : function(input) {
		return input == "오후";
	},
	_meridiemParse : /(오전|오후)/i
});