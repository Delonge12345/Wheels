module.exports = function () {
    includes.gulp.task('app:lib', function () {
        return includes.gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/slick-carousel/slick/slick.min.js'])
            .pipe(includes.gp.concat('libs.min.js'))
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });




    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/main.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/popup-index.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });
    
    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/popups-actions.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/popup-diag.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });
    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/popup-service.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/popup-form.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/popup-addition__form.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/navigation.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    
    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/footer-navigation.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/slick.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/libs.min.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });
    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/parallax.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/preloader.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });
    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/particles.min.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/red-car__switch.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });
};

