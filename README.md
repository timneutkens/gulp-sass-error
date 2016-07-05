# gulp-sass error
By default [gulp-sass](https://www.npmjs.com/package/gulp-sass) never throws a clean error exit code (1). A lot of CI systems require this exit code to fail a build. This package provides a function to do so.
