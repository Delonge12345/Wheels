module.exports = function() {
    
    includes.gulp.task('watch', function(){
        includes.gulp.watch('src/pug/**/*.pug',includes.gulp.series('pug'));//отследили изменения,затем выполнили комманду pug
        includes.gulp.watch('src/static/styles/**/*.scss',includes.gulp.series('sass'));
        includes.gulp.watch('src/static/js/main.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/popup-index.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/popups-actions.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/popup-diag.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/popup-service.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/popup-form.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/popup-disc.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/popup-addition__form.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/navigation.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/footer-navigation.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/slick.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/libs.min.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/parallax.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/preloader.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/particles.min.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/red-car__switch.js',includes.gulp.series('scripts'));
        includes.gulp.watch('src/static/js/video.js',includes.gulp.series('scripts'));
      
        
    });
}

