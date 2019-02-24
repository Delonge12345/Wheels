let wrap = document.querySelector('.wrapper'),
    linkDiag = document.querySelector('.actions__detail-sale__diag'),
    popUpDiag = document.querySelector('.pop-up__diag'),
    closePopupDiag = document.querySelector('.close-popup__diag'),
    overflow = document.createElement('div');
    overlayDiag	= document.querySelector('.overlay-diag');
    
let OpenWindowDiag =()=>{
    overflow.className='overflow';
    document.body.appendChild(overflow);
    overflow.style.display = 'block';
    overlayDiag.style.display="block";
    wrap.style.filter="blur(5px)";
    
   
}
linkDiag.addEventListener('click',OpenWindowDiag);

let CloseWindowDiag =()=>{
    overflow.style.display="none";
    overlayDiag.style.display="none";
    wrap.style.filter="none";
    wrap.style.background="none";
}
closePopupDiag.addEventListener('click',CloseWindowDiag);


document.addEventListener('mousedown', function(e){
    if(e.target.closest('.overlay-diag') === null||e.target==overlayDiag){
        
        overlayDiag.style.display = 'none';
        wrap.style.filter="none";
        wrap.style.background="none";
        overflow.style.display="none";
    } 
    
});
