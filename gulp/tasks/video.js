export const video = () => {
  return app.gulp
    .src("src/video/**/*")
    .pipe(app.gulp.dest(app.paths.videoFolder));
};
