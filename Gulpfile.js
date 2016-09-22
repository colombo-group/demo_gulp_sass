/* gulpfile.js */
var 
    gulp = require('gulp'),
    sass = require('gulp-sass');


// source and distribution folder
var
    source = 'src/',
    dest = 'public/';
    // thu muc nguon cua src va destination

// Bootstrap scss source
var bootstrapSass = {
        in: './node_modules/bootstrap-sass/'
    };
// thu muc nguon cua boottrap-sass    
// fonts
var fonts = {
        in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
        out: dest + 'fonts/'
    };
//font lay tu thu muc font tong src va boottrap ra thu muc font trong public 
// css source file: .scss files
var scss = {
    in: source + 'sass/',
    out: dest + 'css/',
    watch: source + 'scss/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
};

// copy bootstrap required fonts to dest
gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});
// lay font va coppy ra thu muc dest

// compile scss
gulp.task('sass', ['fonts'], function () {
    return gulp.src(scss.in)
    //lay file ra tu src
        .pipe(sass(scss.sassOpts))
    //bien dich    
        .pipe(gulp.dest(scss.out));
    //coppy ra dest    
});

// default task
gulp.task('default', ['sass'], function () {
     gulp.watch(scss.watch, ['sass']);
});