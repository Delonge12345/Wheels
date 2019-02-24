let wrap = document.querySelector('.wrapper'),
    link = document.querySelector('.actions__detail-sale'),
    buttonAct= document.querySelector('.actions-button__about-sale'),
    popUp = document.querySelector('.pop-up'),
    closePopup = document.querySelector('.close-popup'),
    comm = document.querySelector('.actions-button__about-sale'),
    overflow = document.createElement('div');
    overlay	= document.querySelector('.overlay');
    
let OpenWindow =()=>{
    overflow.className='overflow';
    document.body.appendChild(overflow);
    overflow.style.display = 'block';
    overlay.style.display="block";
    wrap.style.filter="blur(5px)";
   
   
    
    
    
    
}
link.addEventListener('click',OpenWindow);

let CloseWindow =()=>{
    overflow.style.display="none";
    overlay.style.display="none";
    wrap.style.filter="none";
    wrap.style.background="none";
}
closePopup.addEventListener('click',CloseWindow);


document.addEventListener('mousedown', function(e){
    if(e.target.closest('.overlay') === null||e.target==overlay){
        
        overlay.style.display = 'none';
        wrap.style.filter="none";
        wrap.style.background="none";
        overflow.style.display="none";
    } 
    
});
