import browserSync from "browser-sync"
import rename from "gulp-rename"
import newer from "gulp-newer"
import replace from "gulp-replace"
import sourcemaps from'gulp-sourcemaps'
export const plugins = {
    sourcemaps,
    rename,
    newer,
    replace,
    browserSync
}