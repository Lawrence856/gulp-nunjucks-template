import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

export const imgaes = () => {
    return (
        // Генерация изображения в формат webp
        app.gulp.src(app.path.src.images)
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))

        // Минификация изображений
        .pipe(app.gulp.src(app.path.src.images))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            iterlaced: true,
            optimizationlevel: 3 // from 0 to 7
        }))
        .pipe(app.gulp.dest(app.path.build.images))

        // Если изображение в формате svg
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.plugins.browserSync.stream())
    )
        
}