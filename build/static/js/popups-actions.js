let 
    wrap = document.querySelector('.wrapper'),
    linkOne = document.querySelector('.actions__detail-sale__one'),
    linkTwo = document.querySelector('.actions__detail-sale__two'),
    linkThree = document.querySelector('.actions__detail-sale__three'),
    linkFour = document.querySelector('.actions__detail-sale__four'),
    buttonAct= document.querySelector('.actions-button__about-sale'),

    popUpOne = document.querySelector('.pop-up__one'),
    popUpTwo = document.querySelector('.pop-up__two'),
    popUpThree = document.querySelector('.pop-up__three'),
    popUpFour = document.querySelector('.pop-up__four'),

    closePopupOne = document.querySelector('.close-popup__one'),
    closePopupTwo = document.querySelector('.close-popup__two'),
    closePopupThree = document.querySelector('.close-popup__three'),
    closePopupFour = document.querySelector('.close-popup__four'),



    comm = document.querySelector('.actions-button__about-sale'),
    overflow = document.createElement('div');

    fixOne = document.querySelector('.fix-one');
    fixTwo = document.querySelector('.fix-two');
    fixThree = document.querySelector('.fix-three');
    fixFour = document.querySelector('.fix-four');

    
    overlayOne	= document.querySelector('.overlay-act__one');
    overlayTwo	= document.querySelector('.overlay-act__two');
    overlayThree	= document.querySelector('.overlay-act__three');
    overlayFour	= document.querySelector('.overlay-act__four');
    
    

    //////////////////////////////////////////////////////////////////ONE
    let OpenWindowOne =()=>{
        overflow.className='overflow';
        document.body.appendChild(overflow);
        overflow.style.display = 'block';
        overlayOne.style.display="block";
        fixOne.style.filter="blur(5px)";
       
}
    linkOne.addEventListener('click',OpenWindowOne);

    let CloseWindowOne =()=>{
        overflow.style.display="none";
        overlayOne.style.display="none";
        fixOne.style.filter="none";
        fixOne.style.background="none";
    }
    closePopupOne.addEventListener('click',CloseWindowOne);


    document.addEventListener('mousedown', function(e){
        if(e.target.closest('.overlay-act__one') === null||e.target==overlayOne){
            
            overlayOne.style.display = 'none';
            fixOne.style.filter="none";
            fixOne.style.background="none";
            overflow.style.display="none";
        } 
        
    });

/////////////////////////////////////////////////////////////////////TWO
    let OpenWindowTwo =()=>{
        overflow.className='overflow';
        document.body.appendChild(overflow);
        overflow.style.display = 'block';
        popUpTwo.style.display="block";
        overlayTwo.style.display="block";
        fixTwo.style.filter="blur(5px)";
       
    }

    linkTwo.addEventListener('click',OpenWindowTwo);

    let CloseWindowTwo =()=>{
        overflow.style.display="none";
        overlayTwo.style.display="none";
        fixTwo.style.filter="none";
        fixTwo.style.background="none";
    }
    closePopupTwo.addEventListener('click',CloseWindowTwo);


    document.addEventListener('mousedown', function(e){
        if(e.target.closest('.overlay-act__two') === null||e.target==overlayTwo){
            
            overlayTwo.style.display = 'none';
            fixTwo.style.filter="none";
            fixTwo.style.background="none";
            overflow.style.display="none";
        } 
        
    });
/////////////////////////////////////////////////////////////////////THREE
    let OpenWindowThree =()=>{
        overflow.className='overflow';
        document.body.appendChild(overflow);
        overflow.style.display = 'block';
        overlayThree.style.display="block";
        fixThree.style.filter="blur(5px)";
        
       
    }
    linkThree.addEventListener('click',OpenWindowThree);

    let CloseWindowThree =()=>{
        overflow.style.display="none";
        overlayThree.style.display="none";
        fixThree.style.filter="none";
        fixThree.style.background="none";
    }
    closePopupThree.addEventListener('click',CloseWindowThree);


    document.addEventListener('mousedown', function(e){
        if(e.target.closest('.overlay-act__three') === null||e.target==overlayThree){
            
            overlayThree.style.display = 'none';
            fixThree.style.filter="none";
            fixThree.style.background="none";
            overflow.style.display="none";
        } 
        
    });
   //////////////////////////////////////////////////////////////////FOUR 
    let OpenWindowFour =()=>{
        overflow.className='overflow';
        document.body.appendChild(overflow);
        overflow.style.display = 'block';
        overlayFour.style.display="block";
        fixFour.style.filter="blur(5px)";
       
    }

    linkFour.addEventListener('click',OpenWindowFour);
   
    let CloseWindowFour =()=>{
        overflow.style.display="none";
        overlayFour.style.display="none";
        fixFour.style.filter="none";
        fixFour.style.background="none";
    }
    closePopupFour.addEventListener('click',CloseWindowFour);


    document.addEventListener('mousedown', function(e){
        if(e.target.closest('.overlay-act__four') === null||e.target==overlayFour){
            
            overlayFour.style.display = 'none';
            fixFour.style.filter="none";
            fixFour.style.background="none";
            overflow.style.display="none";
        } 
        
    });


