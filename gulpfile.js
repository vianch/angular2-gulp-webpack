var gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence'),
    buildWebpack = require('ionic-gulp-webpack'),
    sass = require('gulp-sass');

var webpackConfigurationProduction = require('./config/webpack.production.js');
var webpackConfiguration = require('./config/webpack.config.js');



gulp.task('watch', ['clean'], function(done){
    runSequence(
        ['sass'],
        function(){
            gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
            gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
            buildWebpack({
                statsOptions: {
                    'colors': true,
                    'errorDetails': true
                },
                config: webpackConfiguration
            })
        }
    );
});

gulp.task('build', ['clean'], function(done){
    runSequence(
        ['clean','sass'],
        function(){
            buildWebpack({
                statsOptions: {
                    'colors': true,
                    'errorDetails': true
                },
                config: webpackConfigurationProduction
            });
        }
    );
});


gulp.task('copyImages', function() {
    gulp.src('resources/images/*')
        .pipe(gulp.dest('www/images'));
});
gulp.task('sass', function () {
    return gulp.src('./app/stylesheets/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('www/css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task('clean', function(){
    return del('www/');
});