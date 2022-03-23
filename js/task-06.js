const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', onInput);

function onInput(event) {
    
    if (event.currentTarget.value.length <= '6' &&  !event.currentTarget.classList.contains('valid') && !event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.add('valid');
    } else if (event.currentTarget.value.length > '6'  &&  !event.currentTarget.classList.contains('valid') && !event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.add('invalid');
    } else if (event.currentTarget.value.length > '6' &&  event.currentTarget.classList.contains('valid')) {
        event.currentTarget.classList.replace('valid', 'invalid');
    } else if(event.currentTarget.value.length <= '6' &&  event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.replace('invalid', 'valid');
    }  
}