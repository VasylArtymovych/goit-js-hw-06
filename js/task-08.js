const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        return alert('Fill in all input fields!!!');
    };

    const formData = new FormData(event.currentTarget);
    const arrFormData = []

    formData.forEach((value, name) => {
        arrFormData.push({ [name]: value });
    });

    console.log(arrFormData);
    
    event.currentTarget.reset();
}