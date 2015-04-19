
var path        = require('path');
var gulp        = require('gulp');
var connect     = require('connect');
var serveStatic = require('serve-static');
var http        = require('http');

var files = ['favicon.ico', '*.html', 'js/*.*', 'css/*.*', 'fonts/*.*'];

gulp.task('webserver', function() {
  var app = connect()
    .use(serveStatic('dist'))
  
  http.createServer(app).listen(8080);
});

gulp.task('default', function () {
  return gulp.src(files, { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['default']);

gulp.task('watch', ['default', 'webserver'], function () {
  gulp.watch(files, ['default']);
});