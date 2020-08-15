const gulp         = require('gulp');
const babel        = require('gulp-babel');
const plumber      = require('gulp-plumber');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss    = require('gulp-clean-css');
const rename       = require('gulp-rename');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');
const postcss      = require('gulp-postcss');
const tailwindcss  = require('tailwindcss');
const exec         = require('child_process').exec;

compileBackgroundJs = () => {
    return gulp.src('./src/js/background/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('background.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
}

compileOptionsJs = () => {
    return gulp.src('./src/js/options/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('options.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
}

compilePopupJs = () => {
    return gulp.src('./src/js/popup/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('popup.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
}

compileScriptsJs = () => {
    exec('MD ./dist/scripts')

    return gulp.src('./src/js/scripts/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

compileSass = () => {
    return gulp.src('./src/sass/main.scss')
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer({overrideBrowserslist: ['last 2 version']}))
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer'),
        ]))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist'))
}

compileViews = () => {
    return gulp.src('./src/views/*.html')
        .pipe(gulp.dest('./dist'))
}

compileImages = () => {
    exec('MD ./dist/images')

    return gulp.src('./src/images/*.*')
        .pipe(gulp.dest('./dist/images'))
}

compileManifest = () => {
    return gulp.src('./src/manifest.json')
        .pipe(gulp.dest('./dist'))
}

gulp.task('compile', (done) => {
    compileBackgroundJs()
    compileOptionsJs()
    compilePopupJs()
    compileScriptsJs()
    compileSass()
    compileViews()
    compileImages()
    compileManifest()
    done()
});

gulp.task('compile-manifest', (done) => {
    compileManifest()
    done()
});

gulp.task('compile-images', (done) => {
    compileImages()
    done()
});

gulp.task('compile-views', (done) => {
    compileViews()
    done()
});

gulp.task('compile-sass', (done) => {
    compileSass()
    done()
});

gulp.task('compile-js', (done) => {
    compileBackgroundJs()
    compileOptionsJs()
    compilePopupJs()
    compileScriptsJs()
    done()
});

gulp.task('default', (done) => {
    gulp.watch('./src/**/*', ['compile']);
    done()
});