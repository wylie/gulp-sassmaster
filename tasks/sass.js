var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var syntax_scss = require('postcss-scss');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');
var cssnano = require('cssnano');

// module.exports = function (gulp) {
	// gulp tasks will go in here
// };
module.exports = function(gulp) {
	var sass = function() {
		return gulp.task('sass', function () {
			return gulp.src('src/styles/*.scss')
			.pipe(sass.sync().on('error', sass.logError))
			.pipe(gulp.dest('src/styles'));
		});
	};
	var sassWatch = function() {
		return gulp.task('sass:watch', function () {
			gulp.watch('src/styles/*.scss', ['sass']);
		});
	};

	var postCss = function() {
		return gulp.task('postcss', function () {
			var processors = [
				stylelint(),
		    reporter({
		      clearMessages: true,
		      throwError: false
		    })
				// these shouldn't run on the .scss files… how to make that happen
				// autoprefixer({browsers: ['last 5 version']}),
				// cssnano(),
			];
			return gulp.src('./src/styles/*.scss')
			.pipe(postcss(processors, {syntax: syntax_scss}))
			.pipe(gulp.dest('./src/styles/'));
		});
	};

	return {
		sass: sass,
		sassWatch: sassWatch,
		postCss: postCss
	};
};