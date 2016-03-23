var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('markdown', function() {
    return gulp.src(['**/*.md','!**/node_modules/**/*.md','!**/bower_components/**/*.md'])
        .pipe(markdown())
        .pipe(gulp.dest(function(f) {
            return "./dist";
        }));
});

gulp.task('default', function() {
    gulp.watch('**/*.md', ['markdown']);
});