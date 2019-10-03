let linkServiceFormDisc = document.querySelector('.activate-form__disc');
    closePopupServiceFormDisc = document.querySelector('.close-popup__service-form__disc');
    overlayServiceFormDisc	= document.querySelector('.overlay-form__disc');
    overflowServiceDisc = document.createElement('div');
    fixOrderFormDisc = document.querySelector('.fix-order__form-disc');
    


//////////////////////////////////////////////////ServiceForm
let OpenWindowServiceFormDisc =()=>{
    overflowServiceDisc.className='overflow';
    document.body.appendChild(overflowServiceDisc);
    overflowServiceDisc.style.display = 'block';
    overlayServiceFormDisc.style.display="block";
    fixOrderForm.style.filter="blur(5px)";
   
    
    }
   
    linkServiceFormDisc.addEventListener('click',OpenWindowServiceFormDisc);





let CloseWindowServiceFormDisc =()=>{
    overflowServiceDisc.style.display="none";
    overlayServiceFormDisc.style.display="none";
    fixOrderFormDisc.style.filter="none";
    fixOrderFormDisc.style.background="none";
    
}
closePopupServiceFormDisc.addEventListener('click',CloseWindowServiceFormDisc);


document.addEventListener('mousedown', function(e){
    if(e.target.closest('.overlay-form') === null||e.target==overlayServiceFormDisc){
        
        overlayServiceFormDisc.style.display = 'none';
        fixOrderFormDisc.style.filter="none";
        fixOrderFormDisc.style.background="none";
        overflowServiceDisc.style.display="none";
    } 
    
});