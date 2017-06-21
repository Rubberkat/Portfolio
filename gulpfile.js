var
    gulp = require('gulp'),
    nunjucksRender = require('gulp-nunjucks-render'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    image = require('gulp-image');

var htmlSources =['dist/*.html'];
var cssSources = ['dist/*.css'];
var jsSources = ['dist/*.js'];
var allSources = htmlSources.concat(cssSources).concat(jsSources);

gulp.task('nunjucks', function () {
    // Gets .html and .nunjucks files in pages
    return gulp.src('src/html/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(nunjucksRender({
            path: ['src/html/templates']

        }))
        // output files in app folder
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('browserify', function () {

    var b = browserify({entries: ['./src/js/entry.js']});
        return b.bundle()
            .on('error', function (err) {
                console.log(err.toString());
                this.emit("end");
            })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('livereload', function() {
    gulp.src(allSources)
        .pipe(connect.reload());
});

gulp.task('image', function () {
    gulp.src('src/images/**/*.+(jpg|jpeg)')
        .pipe(image().on('error', image.logError))
        .pipe(gulp.dest('./dist'));
});



gulp.task('watch', ['connect'], function () {
    gulp.watch(allSources, ['livereload']);
    gulp.watch('src/**/*.+(html|nunjucks)', ['nunjucks']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['browserify']);
    gulp.watch('src/images/**/*.+(jpg|jpeg)', ['image']);
});







