const fonts = () => {
    return app.gulp.src(`${app.path.src.fonts}/*.{otf,ttf,woff,woff2}`)
        .pipe(app.gulp.dest(app.path.build.fonts))
}
 
export { fonts }
