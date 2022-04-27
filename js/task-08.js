const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const {elements:{email, password}} = event.currentTarget;

    if (email.value === '' || password.value === '') {
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