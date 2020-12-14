const gulp = require ('gulp');
var clean = require("gulp-clean")
var copy = require('gulp-copy');

function defaultTask(cb) {
        return console.log("Gulping away!");
    cb();
}

function copyFunction() {
    return gulp
        .src([' ./src/.*'])
        .pipe(copy('./docs', { prefix: 1 }))
}

gulp.task('default', defaultTask);