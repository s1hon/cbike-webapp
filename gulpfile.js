var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var http = require('http');
var st = require('st');
var ghPages = require('gulp-gh-pages');

// Auto deploy
gulp.task('deploy', function() {
    // Create deploy folder
    gulp.src(['index.html'])
        .pipe(gulp.dest('dist/'));
    gulp.src(['js/**'])
        .pipe(gulp.dest('dist/js'));
    gulp.src(['css/**'])
        .pipe(gulp.dest('dist/css'));

    return gulp.src('dist/**/*')
    .pipe(ghPages({options:{
            push: false
        }}));
});

gulp.task('d',['deploy'])


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
        .pipe(gulp.dest('css'));
});


// Quick Server on port 8080
gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname , index: 'index.html', cache: false, cors: true})
  ).listen(8080, done);
});

// Watch
gulp.task('watch',['server'], function(){
        livereload.listen();
        gulp.watch(['./scss/*.scss'],['styles','reload']);
        gulp.watch(['./*.html'],['reload']);
        gulp.watch(['./js/*'],['reload']);
});

gulp.task('default', ['styles','watch']);