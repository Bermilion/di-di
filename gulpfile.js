const gulp = require('gulp'),
    environments = require('gulp-environments'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

var src = {
    sass: './src/sass/style.scss',
    js: [
        './src/js/**/*.js'
    ]
};

var development = environments.development,
    production = environments.production;

function styles() {
    return gulp.src(src.sass)
        .pipe(development(sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(production(
            cleanCSS({
                level: 2
            })
        ))
        .pipe(development(sourcemaps.write()))
        .pipe(gulp.dest('./public/css'))
        .pipe(development(browserSync.stream()));
}

function scripts() {
    return gulp.src(src.js)
        .pipe(development(sourcemaps.init()))
        .pipe(concat('bundle.js'))
        .pipe(production(
            uglify({
                toplevel: true
            })
        ))
        .pipe(development(sourcemaps.write('.')))
        .pipe(gulp.dest('./public/js'))
        .pipe(development(browserSync.stream()));
}

function serve() {
    browserSync.init({
        proxy: 'http://di-di.loc',
        serveStatic: ['./public']
    });

    gulp.watch('src/sass/**/*.scss', styles);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch('public/*.html').on('change', browserSync.reload);
}

gulp.task('build', gulp.parallel(scripts, styles));

gulp.task('watch', gulp.series('build', serve));