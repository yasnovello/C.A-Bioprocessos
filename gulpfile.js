var gulp        = require('gulp');

var browserSync = require('browser-sync').create();

//var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
/*
gulp.task('sass', function() {

    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])

        .pipe(sass())

        .pipe(gulp.dest("src/css"))

        .pipe(browserSync.stream());

});
*/
// Move the javascript files into our /src/js folder

gulp.task('js', function() {

    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/tether/dist/js/tether.js'])

        .pipe(gulp.dest("src/js"))

        .pipe(browserSync.stream());

});

// Static Server + watching scss/html files

gulp.task('serve', function() {

    browserSync.init({

        server: "./"

    });

   // gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);

   gulp.watch("./*.html").on('change', browserSync.reload);

});

gulp.task('default', ['js','serve']);

