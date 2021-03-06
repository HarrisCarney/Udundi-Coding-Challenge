var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("/sass/*.sass", gulp.series('sass'));
    gulp.watch("/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));