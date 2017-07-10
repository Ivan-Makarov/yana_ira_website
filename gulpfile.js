const gulp = require('gulp');
const sass = require('gulp-sass');
const beautify = require('gulp-jsbeautifier')
const minify = require('gulp-cssmin')
const rename = require('gulp-rename')

const sassFiles = './sass/*.scss';
const cssFiles = './css/*.css'

gulp.task('sass', function() {
    return gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
})

gulp.task('beautify', function() {
    return gulp.src(cssFiles)
        .pipe(beautify())
        .pipe(gulp.dest('./css'));
});

gulp.task('minify', function () {
    return gulp.src(cssFiles)
        .pipe(minify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watcher', function() {
    gulp.watch(sassFiles, ['sass']);
    gulp.watch(cssFiles, ['beautify']);
    gulp.watch(cssFiles, ['minify']);
})
