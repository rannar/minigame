
// packages
var gulp  = require('gulp');
var shell = require('gulp-shell');

// build for web
gulp.task('build', ['common'], shell.task([
  'node webpack/build.js'
]));

gulp.task('dev-server', shell.task([
  'node webpack/dev-server.js'
]));

gulp.task('common', shell.task([
  'node checkout.js'
]));

gulp.task('source', shell.task([
  'node static/exportAssets.js'
]));

// default build for web
gulp.task('default', ['common', 'source', 'build']);
gulp.task('dev', ['source', 'dev-server']);
