module.exports = function(gulp) {
	var myFunc = function() {
		return 'myFunc';
	}

	return {
		myFunc: myFunc,
		myGulp: !!gulp
	};
};