var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');


gulp.task('lint', function() {
  gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('test', function() {
  var opts = {
    ui: 'exports',
    reporter: 'spec'
  };
  return gulp.src('test/*.js', {read: false})
      .pipe(mocha(opts));
});

