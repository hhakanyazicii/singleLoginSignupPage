const loginForm_Btn = document.querySelector('#loginFormBtn');
const loginForm = document.querySelector('#loginForm');
const signupForm = document.querySelector('#signupForm');
const signupBtn = document.querySelector('#signupFormBtn');
const signupDiv = document.querySelector('#signupDiv');
const loginBtn = document.querySelector('#loginBtn');

loginForm_Btn.addEventListener('click', (e) => {
    e.preventDefault();
    loginBtn.innerText = "Login";
    signupDiv.style.display = "none";
    signupDiv.classList.add('formHidden');
})

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupDiv.classList.remove('formHidden');
    signupDiv.style.display = "flex";
    loginBtn.innerText = "Sign Up";
})

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
})