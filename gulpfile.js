const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

const {src, dest, series} = gulp;

gulp.task('sass', function () {
   return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
         cascade: true,
         browsers: ['last 3 versions']
      }))
      .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
   gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

