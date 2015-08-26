var gulp         = require('gulp');
var testem       = require('testem');
var config       = require('../config').test;

gulp.task('test', ['watchify'], function(){
  var api = new testem()
  api.startDev(config)
})
