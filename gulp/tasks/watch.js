module.exports = function() {
    
    includes.gulp.task('watch', function(){
        includes.gulp.watch('src/pug/**/*.pug',includes.gulp.series('pug'));//отследили изменения,затем выполнили комманду pug
        includes.gulp.watch('src/static/styles/**/*.scss',includes.gulp.series('sass'));
        includes.gulp.watch('src/static/js/main.js',includes.gulp.series('scripts'));
        
        
    });
}