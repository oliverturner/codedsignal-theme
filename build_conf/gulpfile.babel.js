import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer-core';

import {paths} from '../config';

const $    = loadPlugins();
const opts = {
  sass: {errLogToConsole: true}
};

gulp.task('sass:dev', (done) => {
  const processors = [
    autoprefixer({cascade: false})
  ];

  gulp.src(`${paths.src.styles}/*.scss`)
    .pipe($.sourcemaps.init())
    .pipe($.sass(opts.sass))
    .pipe($.postcss(processors))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.web.css));

  done();
});

gulp.task('default', ['sass:dev'], function () {
  console.log('done');
});
