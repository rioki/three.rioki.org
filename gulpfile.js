
var path      = require('path');
var gulp      = require('gulp');
var webserver = require('gulp-webserver');

var files = ['favicon.ico', '*.html', 'js/*.*', 'css/*.*', 'fonts/*.*'];

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', function () {
  return gulp.src(files, { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['default']);

gulp.task('watch', ['default', 'webserver'], function () {
  gulp.watch(files, ['default']);
});