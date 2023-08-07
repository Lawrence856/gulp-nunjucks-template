import gulp from 'gulp'
import gulpConcat from 'gulp-concat'

const appJs = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.sourcemaps.init())
        .pipe(gulpConcat('app.js'))
        .pipe(app.plugins.sourcemaps.write())
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}
const libsJs = () => {
    return app.gulp.src(app.path.src.libs.js, { allowEmpty: true })
        .pipe(gulpConcat('libs.min.js'))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}

const scripts = gulp.parallel(appJs, libsJs)

export { scripts }