/*
1. thumbnail-gulp (master) $ npm init
2. thumbnail-gulp (master) $ npm install --save gulp gulp-react gulp-concat
3. thumbnail-gulp (master) $ npm install -g gulp-cli
4. thumbnail-gulp (master) $ gulp -v
***************************************
1. thumbnail-gulp (master) $ npm install --save browserify reactify vinyl-source-stream watchify gulp-util
***************************************
1. thumbnail-gulp (master) $ npm install --save react


***************************************
Browserify: allows us to write modules of codes and in react we keep one component in each module and each components lives in separate file so we can think of each of the file as single class

require('./') syntax can be used to use one file/module into another file/module

React take require('./filename') as to search filename from it
For eg: var Badge = require('./badge') => Will search for badge.ext file on root level and assign it to variable 'Badge'

*/

var gulp = require('gulp'); /*Responsible for build process*/
var gutil = require('gulp-util'); /*responsible for console log in and output of our build process(Debugging)*/
var source = require('vinyl-source-stream'); /**/
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify'); /*Convert JSX to JS*/
// var react = require('gulp-react');
// var concat = require('gulp-concat');

// gulp.task('default', function(){
// 	return gulp
// 			.src('src/**') /*Gather all the files inside src folder*/
// 			.pipe(react()) /*Convert JSX to JS*/
// 			.pipe(concat('application.js')) /*Concat every files into one application.js file*/
// 			.pipe(gulp.dest('./')) /*Put application.js in the root level only*/
// });

gulp.task('default', function(){
	/*Bundler responsible to run browserify on CodeBase, it is like an object or instantiator for browserify*/
	/*Bundler is an object that will actually builds*/
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'], //Starting point
		transform: ['reactify'], //Convert JSX to JS
		extensions: ['.jsx'], //Which extension to look for
		debug: true,
		packageCache: {},
		fullPaths: true
	}));

	function build(file) {
		if(file) gutil.log('Recompiling '+file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	};

	build()
	bundler.on('update',build)
});

