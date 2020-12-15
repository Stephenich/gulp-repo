const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

function copyHtml() {
    return src('src/*.html')
    .pipe(gulp.dest('docs'));

}

function jsTask() {
    return src('src/js/*')
    .pipe(babel())
    .pipe(gulp.dest('docs/js'));
}

function imgTask(){
    return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('docs/images'));
}

function cssTask(){
    return src('src/css/*')
    .pipe(autoPrefixer())
    .pipe(gulp.dest('docs/css'));
}


exports.default= parallel(copyHtml, imgTask, cssTask, jsTask);
exports.copyHtml = copyHtml;
exports.imgTask =imgTask;
exports.cssTask = cssTask;
exports.jsTask = jsTask;


