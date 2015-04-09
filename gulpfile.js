
var gulp      = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src(__dirname)
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', function () {});

gulp.task('test', ['default']);

gulp.task('watch', ['default', 'webserver'], function () {});