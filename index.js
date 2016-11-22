var myTask = require('./tasks/task'),
	gulp = require('gulp');

module.exports = function() {
	var theTask = myTask(gulp)
	console.log('hello world');

	return theTask.myGulp;
}