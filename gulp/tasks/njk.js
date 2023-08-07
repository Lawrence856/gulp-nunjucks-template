import njkRender from "gulp-nunjucks-render"
import htmlbeautify from "gulp-html-beautify"

export const njk = () => {
    return app.gulp.src(app.path.src.njk)
        .pipe(njkRender({
            path: 'src'
        }))
        .pipe(app.plugins.replace(/@img\//g, '/assets/img/'))
        // .pipe(app.plugins.rename({
        //     dirname: ''
        // }))
        .pipe(htmlbeautify(({ indentSize: 4 })))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}