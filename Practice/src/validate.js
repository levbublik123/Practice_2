 
const email = document.querySelector('.subscribe__input__item');
const form = document.querySelector('.subscribe__form');

document.querySelector('.subscribe-button').onclick = function(e,str) {
    if (name.value == '' || name.value == null ) {
        email.classList.add('_error')
    }if(email.value.includes('@')) {
        email.classList.remove('_error');
    }
    
  e.preventDefault();
}

