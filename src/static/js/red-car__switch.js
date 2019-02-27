var car = document.querySelector('.red-car')
var rrr = 0;
var ibb = ['actions-down-shooter.png','actions-down-shooter.png'];
$(car).html('<img src="/' + ibb[rrr] + '" />');
 
setInterval(function(){
  
                if (rrr==0) {rrr=0;}
                else rrr=0;
                                $(car).html('<img src="/' + ibb[1] + ' />');
            },2000);
    