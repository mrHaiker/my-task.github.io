var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/**/*.scss")
        .pipe(sass())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("app/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);