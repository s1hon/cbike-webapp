var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var react = require('gulp-react');
var http = require('http');
var st = require('st');

// Livereload
gulp.task('reload',function(){
    gulp.src('.')
        .pipe(livereload());
})

// Sass
gulp.task('styles', function(){
    gulp.src('./scss/*.scss')
        .pipe(sass({lineNumbers: true,style: 'expanded'}))
        .on('error', function (err) {
          console.error('Error', err.message);
        })
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// React
gulp.task('react',function(){
    return gulp.src('src/*.js')
        .pipe(react())
        .pipe(gulp.dest('js/script'))
        .pipe(livereload());
})

// Quick Server on port 8080
gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname , index: 'index.html', cache: false })
  ).listen(8080, done);
});

// Watch
gulp.task('watch',['server'], function(){
        livereload.listen();
        gulp.watch(['./scss/*.scss'],['styles']);
        gulp.watch(['./*.html'],['reload']);
        gulp.watch(['./js/*'],['react']);
});

gulp.task('default', ['react','styles','watch']);