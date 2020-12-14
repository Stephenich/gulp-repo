const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');

function copyHtml() {
    return src('src/*.html')
    .pipe(gulp.dest('docs'));
}

function imgTask(){
    return src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('docs/images'));
}

function cssTask(){
    return src('src/css/*')
    .pipe(autoPrefixer())
    .pipe(gulp.dest('docs/css'));
}

exports.default= parallel(copyHtml, imgTask, cssTask);
exports.copyHtml = copyHtml;
exports.imgTask =imgTask;
exports.cssTask = cssTask;