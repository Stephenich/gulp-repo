
const gulp = require('gulp');
const { src, series, parallel, dest, watch } = require('gulp');

function copyHtml() {
    return src('src/*.html')
    .pipe(gulp.dest('docs'));
}

exports.default= copyHtml;

