import gulp from 'gulp';
import plumber from 'gulp-plumber';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import { deleteAsync } from 'del';

const sass = gulpSass(dartSass);

// Очистка
export const clean = () => deleteAsync('build');

// Стили
export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
};

// HTML
export const html = () => gulp.src('source/*.html').pipe(gulp.dest('build'));

// JS
export const scripts = () => gulp.src('source/js/**/*.js')
  .pipe(gulp.dest('build/js'));

// Изображения
export const images = () => {
  return gulp.src('source/img/**/*.{jpg,jpeg,png,svg,gif,webp}')
    .pipe(gulp.dest('build/img'));
};

// Шрифты
export const fonts = () => gulp.src('source/fonts/**/*.{woff,woff2}')
  .pipe(gulp.dest('build/fonts'));

// Сервер
const server = (done) => {
  browser.init({
    server: { baseDir: 'build' },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Вотчер
const watcher = () => {
  gulp.watch('source/sass/**/*.scss', styles);
  gulp.watch('source/*.html', html).on('change', browser.reload);
  gulp.watch('source/js/**/*.js', scripts).on('change', browser.reload);
  gulp.watch('source/img/**/*.{jpg,jpeg,png,svg,gif,webp}', images).on('change', browser.reload);
};

// Сборка
export const build = gulp.series(
  clean,
  gulp.parallel(html, styles, scripts, images, fonts)
);

// Dev
export default gulp.series(build, server, watcher);
