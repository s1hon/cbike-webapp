var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var server = require('gulp-express');

// Sass
gulp.task('styles', function(){
    gulp.src('scss/*.scss')
        .pipe(sass({lineNumbers: true,style: 'expanded'}))
        .on('error', function (err) {
          console.error('Error', err.message);
        })
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/css'))
        .pipe(server.notify());
});

// Watch
gulp.task('server', function(){
        server.run(['bin/www']);

        gulp.watch(['scss/*.scss'],['styles']);
        gulp.watch(['views/*.html'],server.notify);
        gulp.watch(['public/js/*'],server.notify);
        gulp.watch(['app.js','routes/**/*.js'],[server.run]);
});

gulp.task('default', ['styles','server']);