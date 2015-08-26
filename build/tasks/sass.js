var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');
var replace      = require('gulp-replace');
var concat       = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(replace(/^[\s\S]*?<style>|<\/style>[\s\S]*$|^(?![\s\S]*<style>)[\s\S]*$/g, ''))
    .pipe(concat('tags.scss'))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
