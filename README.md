# gulp-sass error
By default [gulp-sass](https://www.npmjs.com/package/gulp-sass) never throws a clean error exit code (1). A lot of CI systems require this exit code to fail a build. This package provides a function to do so.

## Installation
`npm install --save gulp-sass-error`

## Usage
```javascript
const throwError       = true;
const gulpSassError    = require('gulp-sass-error')(throwError);

gulp.task('sass', () => {
    return gulp.src('web/css/*.scss')
        .pipe(
            sass()
            /** Instead of sass.logError you use gulpSassError */             
            .on('error', gulpSassError)
        )
        .pipe(postcss(config.postcss))
        .pipe(gulp.dest('web/css'));
});
```
