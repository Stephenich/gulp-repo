const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');

function copyHtml() {
    return src('src/*.html')
    .pipe(gulp.dest('docs'));
}

function imgTask(){
    return src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('docs/images'));
}

exports.default= copyHtml;
exports.copyHtml = copyHtml;
exports.imgTask =imgTask;