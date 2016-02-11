var gulp = require('gulp');

var ts = require('gulp-typescript');


var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
	var tsResult = tsProject.src()
		.pipe(ts(tsProject));
	
	return tsResult.js.pipe(gulp.dest('public/app/'));
});

gulp.task('watcher', function() {
	gulp.watch('public/dev/**/*.ts', ['scripts']);
});


gulp.task('default', ['scripts', 'watcher']);