// -*- coding: utf-8 -*-


var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-rimraf'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify');


gulp.task('browserify:externals', function () {
    var vendor = browserify(['jquery', 'es5-shim', 'lodash']);
    vendor.require('jquery');
    vendor.require('lodash', {expose: '_'});
    vendor.require('es5-shim');
    return vendor.bundle()
        .pipe(source("not-used-but-needed-string.js"))
        .pipe(rename('external.js'))
        .pipe(gulp.dest('./dist'))
        .on('error', gutil.log);
});


gulp.task('browserify', ['browserify:externals'], function () {
    var app = browserify('./index.js');
    app.external('jquery');
    app.external('es5-shim');
    app.require('./index.js', {expose: 'maxby'});
    return app.bundle()
        .pipe(source("not-used-but-needed-string.js"))
        .pipe(rename('maxby.js'))
        .pipe(gulp.dest('./dist'))
        .on('error', gutil.log);
});


gulp.task('default', [], function () {
    return gulp.start(
        'browserify'
    );
});
