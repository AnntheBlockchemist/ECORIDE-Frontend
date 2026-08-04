
const showPassword = document.querySelector('#show-password');
const passwordInput = document.querySelector('#password');

showPassword.addEventListener('click', function () {
    this.classList.toggle("ph-eye-slash");
    const isHidden = passwordInput.getAttribute('type') === 'password';

    passwordInput.setAttribute('type', isHidden ? 'text' : 'password');
    
});
