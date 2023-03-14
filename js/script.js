const burgerButton = document.querySelector('.burger__button');

const burgerBody = document.querySelector('.burger__body');

const burgDecor = document.querySelector('.burger__decor')

const burgerButtonDecors = document.querySelectorAll('.burger__button__decor');

burgerButton.addEventListener('click', function ()  {
    burgDecor.classList.toggle('burger__dec__active');
    if(burgerBody.classList.length<2){
        burgerBody.classList.toggle('burger__show');
        
    }
    else{
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');
        
        
    }
   
    for (let i = 0; i < burgerButtonDecors.length; i++) {
        burgerButtonDecors[i].classList.toggle('burger__dec__active');
        
    }
    
});