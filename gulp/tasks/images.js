import gulp from 'gulp'
import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'
import imageResize from 'gulp-image-resize'
import gulpif from 'gulp-if'

const isDev = process.env.NODE_ENV === 'development' ? true : false

// .pipe(imageResize({ percentage: 200 }))
// .pipe(app.plugins.rename(function (path) { path.basename += "@2x"; }))

const webpTask = () => {
    return (
        // Генерация изображения в формат webp
        app.gulp.src(app.path.src.images)
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.images))
        .pipe(imageResize({ percentage: 200 }))
        .pipe(app.plugins.rename(function (path) { path.basename += "@2x"; }))
        .pipe(app.gulp.dest(app.path.build.images))
    )
}


const image = () => {
    return(
        app.gulp.src(app.path.src.images)
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(gulpif(!isDev, imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            iterlaced: true,
            optimizationlevel: 3 // from 0 to 7
        })))
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.images))
        .pipe(imageResize({ percentage: 200 }))
        .pipe(app.plugins.rename(function (path) { path.basename += "@2x"; }))
        .pipe(gulpif(!isDev, imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            iterlaced: true,
            optimizationlevel: 3 // from 0 to 7
        })))
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.plugins.browserSync.stream())
    )
}

const svg = () => {
    return(
        app.gulp.src(app.path.src.svg)
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
    )
}

const imgaes = gulp.parallel(webpTask, image, svg)

export { imgaes }