
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');


function copyHtml() {
    return src('src/*.html')
    .pipe(gulp.dest('docs'));

}

<<<<<<< HEAD
=======
function jsTask() {
    return src('src/js/*')
    .pipe(babel())
    .pipe(gulp.dest('docs/js'));
}

>>>>>>> refs/remotes/origin/gulpjs
function imgTask(){
    return src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('docs/images'));
}

<<<<<<< HEAD
exports.default= copyHtml;
exports.copyHtml = copyHtml;
exports.imgTask =imgTask;
exports.default= copyHtml;

=======
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
>>>>>>> refs/remotes/origin/gulpjs
