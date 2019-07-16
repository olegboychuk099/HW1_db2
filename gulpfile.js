const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        //.pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function template(){
    return gulp.src('./**/*pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}

async function build(){
    await style();
    await template();
    await sendImg();
    await sendJS();
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './dist/src',
            index: 'index.html'
        }
    });
    gulp.watch('.src/scss/**/*.scss', style);
    gulp.watch('.src/*.pug', template);
}

function sendImg(){
    return gulp.src('./src/img/**')
        .pipe(gulp.dest('dist/img'))
}

function sendJS(){
    return gulp.src('./src/js/**')
        .pipe(gulp.dest('dist/js'))
}

exports.style = style;
exports.template = template;
exports.build = build;
exports.watch = watch;
exports.default = build;