var gulp = require('gulp');

//var ts = require('gulp-typescript');


//var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
	var tsResult = tsProject.src()
		.pipe(ts(tsProject));
	
	return tsResult.js.pipe(gulp.dest('public/app/'));
});

gulp.task('watcher', function() {
	gulp.watch('public/dev/**/*.ts', ['scripts']);
});

gulp.task('seed', function() {

	var mongoose = require('mongoose');

	require('./models/opening.js');
	require('./models/user.js');
	require('./models/game.js');

	
	return mongoose.connect('mongodb://localhost/makepaulsmile', function() {
	   
	    mongoose.connection.db.dropDatabase();
	    require('./fixtures.js').seed();
	});
})

gulp.task('default', ['scripts', 'watcher']);