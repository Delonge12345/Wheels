let linkService = document.querySelector('.btn-order '),
    closePopupService = document.querySelector('.close-popup__service'),
    overlayService	= document.querySelector('.overlay-service'),
    overflowService = document.createElement('div'),
    fixOrder = document.querySelector('.fix-order');
   
    
    
let OpenWindowService =()=>{
    overflowService.className='overflow';
    document.body.appendChild(overflowService);
    overflowService.style.display = 'block';
    overlayService.style.display="block";
    fixOrder.style.filter="blur(5px)";
   
    
    }
   
linkService.addEventListener('click',OpenWindowService);



let CloseWindowService =()=>{
    overflowService.style.display="none";
    overlayService.style.display="none";
    fixOrder.style.filter="none";
    fixOrder.style.background="none";
    
}
closePopupService.addEventListener('click',CloseWindowService);


document.addEventListener('mousedown', function(e){
    if(e.target.closest('.overlay-service') === null||e.target==overlayService){
        
        overlayService.style.display = 'none';
        fixOrder.style.filter="none";
        fixOrder.style.background="none";
        overflowService.style.display="none";
    } 
    
});


