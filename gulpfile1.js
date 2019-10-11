var gulp = require('gulp'); //подключить Gulp в нашем файле из папки node_modules
var sass = require('gulp-sass'); //подключаем gulp-sass получаем компилятор SCSS-CSS
var browserSync=require('browser-sync');// Browser Sync - подклбючаем - дает возможность поднять сервер


gulp.task('sass', function(){//получаем источники используя множемтвенный выбор с помощью gulp.src
  return gulp.src('app/scss/**/*.scss')// все файлы в папке scss и подпапках  с расширением .scss
      .pipe(sass()) // используем gulp-sass Конвертируем Sass в CSS с помощью gulp-sass
      .pipe(gulp.dest('app/css'))//выходные файлы в папке destination
      .pipe(browserSync.reload({stream: true}))// и обновляем их на странице через browserSync
  });


gulp.task('browserSync', function() {//cоздание сервера 
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch',  function(){//whatcher следитт за изменениями в папке scss  и производит
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass')); //запуск компилятора sass при возникновении изменений.
  // другие ресурсы // ранеее использовался синтаксис ['sass']
  });

gulp.task('default', gulp.parallel('sass', 'browserSync', 'watch'));//запуск нескольких задач в паралллель






// gulp.task('sass', function(){
//     return gulp.src('app/scss/styles.scss')// получаем источники с помощью gulp.src
//       .pipe(sass()) // используем gulp-sass Конвертируем Sass в CSS с помощью gulp-sass
//       .pipe(gulp.dest('app/css'))//выходные файлы в папке destination
//     });

// gulp.task('sass', function(){//получаем источники используя множемтвенный выбор с помощью gulp.src
//     return gulp.src('app/scss/**/*.scss')// все файлы в папке scss и подпапках  с расширением .scss
//         .pipe(sass()) // используем gulp-sass Конвертируем Sass в CSS с помощью gulp-sass
//         .pipe(gulp.dest('app/css'))//выходные файлы в папке destination
//     });





// gulp.task('watch', function(){//whatcher следитт за изменениями в папке scss  и производит
//     gulp.watch('app/scss/**/*.scss', gulp.parallel('sass')); //запуск компилятора sass при возникновении изменений.
//         // другие ресурсы // ранеее использовался синтаксис ['sass']
//       });



// var browserSync=require('browser-sync');// Browser Sync - подклбючаем - дает возможность поднять сервер



  // gulp.task('watch',  gulp.series('browserSync', 'sass') , function(){//whatcher следитт за изменениями в папке scss  и производит
  //   gulp.watch('app/scss/**/*.scss', gulp.parallel('sass')); //запуск компилятора sass при возникновении изменений.
  //   // другие ресурсы // ранеее использовался синтаксис ['sass']
  //   });
    

