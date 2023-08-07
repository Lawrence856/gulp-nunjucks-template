import svgSprite from "gulp-svg-sprite"

export const sprite = () => {
    return app.gulp.src(`${app.path.src.svgSprite}`)
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../svg/sprite.svg',
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.svgSprite))
}