$(document).ready(function(){
    let touchFoot = $('.touch-foot');
    
    let menuFoot = $('.menu-color');

$(touchFoot).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('touch-menu_active');
    $(this).toggleClass('line-vert');
    
    
    menuFoot.slideToggle();
});
$(window).resize(function() {
    let widFoot = $(window).width();
    if(widFoot > 760 && menuFoot.is(':hidden')) {
            menuFoot.removeAttr('style');
        }
    });
});
