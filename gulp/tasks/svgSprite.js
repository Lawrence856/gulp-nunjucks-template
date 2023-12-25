// import svgSprite from "gulp-svg-sprite"

// export const sprite = () => {
//     return app.gulp.src(`${app.path.src.svgSprite}`)
//         .pipe(svgSprite({
//             mode: {
//                 stack: {
//                     sprite: '../svg/sprite.svg',
//                 }
//             }
//         }))
//         .pipe(app.gulp.dest(app.path.build.svgSprite))
// }

import svgcss from '../module/svg-css.js'
import svgmin from 'gulp-svgmin'

export const sprite = () => {
    return app.gulp.src(`${app.path.src.svgSprite}`)
        .pipe(svgmin())
        .pipe(svgcss({
            fileName: 'sprite',
            cssPrefix: 'icon-',
            addSize: true
        }))
        .pipe(app.gulp.dest(app.path.build.svgSprite));
}
