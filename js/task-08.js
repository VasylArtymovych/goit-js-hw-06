const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert('Fill in all input fields!!!')
    }

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(`${name}:`, value);
    });

    event.currentTarget.reset();
}