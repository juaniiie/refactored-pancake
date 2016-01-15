var gulp = require('gulp');
var serve = require('browser-sync');
var sync = require('run-sequence');
var webpack = require('gulp-webpack');

gulp.task('build', function() {
  return gulp.src('./client/app.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('client'));
});

gulp.task('serve', function() {
  serve({
    port: 3000,
    open: false,
    server: {
      baseDir: 'client'
    }
  });
});

var paths = {
  app: 
  ['client/controllers/**/*.js',
    'client/templates/**/*.html',
    'client/app.config.js',
    'client/app.js',
    'clent/index.html'
  ]
};

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build',serve.reload]);
});

gulp.task('default', function(done) {
  sync('build','serve', 'watch', done);
});