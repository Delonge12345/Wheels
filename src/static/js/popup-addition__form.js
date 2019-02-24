let linkServiceAdd = document.querySelector('.activate-form__service');
    closePopupServiceAdd = document.querySelector('.close-popup__service-addition');
    overlayServiceAdd	= document.querySelector('.overlay-addition');
    overflowServiceAdd = document.createElement('div');
    fixOrderAdd = document.querySelector('.fix-order__add');
    


//////////////////////////////////////////////////ServiceForm
let OpenWindowServiceAdd =()=>{
    overflowServiceAdd.className='overflow';
    document.body.appendChild(overflowServiceAdd);
    overflowServiceAdd.style.display = 'block';
    overlayServiceAdd.style.display="block";
    fixOrderAdd.style.filter="blur(5px)";
   
    
    }
   
linkServiceAdd.addEventListener('click',OpenWindowServiceAdd);





let CloseWindowServiceAdd =()=>{
    overflowServiceAdd.style.display="none";
    overlayServiceAdd.style.display="none";
    fixOrderAdd.style.filter="none";
    fixOrderAdd.style.background="none";
    
}
closePopupServiceAdd.addEventListener('click',CloseWindowServiceAdd);


document.addEventListener('mousedown', function(e){
    if(e.target.closest('.overlay-addition') === null||e.target==overlayServiceAdd){
        
        overlayServiceAdd.style.display = 'none';
        fixOrderAdd.style.filter="none";
        fixOrderAdd.style.background="none";
        overflowServiceAdd.style.display="none";
    } 
    
});