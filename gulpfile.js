/**
 * Created by Amir on 2/11/15.
 */

var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var BrowserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('bundle', function(){
    return browserify({
        entries : 'app/main.jsx',
        debug : true
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));

});

gulp.task('serve', ['bundle', 'live-server'], function(){
    BrowserSync.init(null, {
        proxy : 'http://localhost:3000',
        port : 9001
    });
});