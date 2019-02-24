let linkServiceForm = document.querySelector('.activate-form');
    linkServiceFormServ = document.querySelector('.activate-form__service');
    closePopupServiceForm = document.querySelector('.close-popup__service-form');
    overlayServiceForm	= document.querySelector('.overlay-form');
    overflowServiceForm = document.createElement('div');
    fixOrderForm = document.querySelector('.fix-order__form');
    


//////////////////////////////////////////////////ServiceForm
let OpenWindowServiceForm =()=>{
    overflowServiceForm.className='overflow';
    document.body.appendChild(overflowServiceForm);
    overflowServiceForm.style.display = 'block';
    overlayServiceForm.style.display="block";
    fixOrderForm.style.filter="blur(5px)";
   
    
    }
   
linkServiceForm.addEventListener('click',OpenWindowServiceForm);





let CloseWindowServiceForm =()=>{
    overflowServiceForm.style.display="none";
    overlayServiceForm.style.display="none";
    fixOrderForm.style.filter="none";
    fixOrderForm.style.background="none";
    
}
closePopupServiceForm.addEventListener('click',CloseWindowServiceForm);


document.addEventListener('mousedown', function(e){
    if(e.target.closest('.overlay-form') === null||e.target==overlayServiceForm){
        
        overlayServiceForm.style.display = 'none';
        fixOrderForm.style.filter="none";
        fixOrderForm.style.background="none";
        overflowServiceForm.style.display="none";
    } 
    
});