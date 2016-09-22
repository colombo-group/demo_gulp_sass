/* gulpfile.js */
var 
    gulp = require('gulp'),
    sass = require('gulp-sass');
// default task
gulp.task('watch', function)
gulp.task('default', function () {
     return gulp.src('src/scss/style.scss')
     .pipe(sass())
     .pipe(gulp.dest('public/css'))
});
