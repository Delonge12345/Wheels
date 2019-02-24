
$(document).ready(function () {
    $('.slider-one').slick({
      autoplay:true,
      autoplaySpeed:800,
      adaptiveHeight:true,
      infinite: true,
      prevArrow: $('.left-shooter__link'),
      nextArrow: $('.right-shooter__link'),
     
    
    });
  });
  

  
$(document).ready(function () {
  $('.slider-two').slick({
    autoplay:true,
    autoplaySpeed:800,
    adaptiveHeight:true,
    infinite: true,
    arrows: false,
    dots: true,
  
   
  
  });
});

$(document).ready(function () {
  $('.slider-three').slick({
    autoplay:true,
    autoplaySpeed:800,
    dots:true,
    adaptiveHeight:true,
    infinite: true,
    prevArrow: $('.left-shooter__moto-link'),
    nextArrow: $('.right-shooter__moto-link'),
   
  
  });
});