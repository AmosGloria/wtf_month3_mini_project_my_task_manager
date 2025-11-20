function submitSignupForm(){
    const signupFormName = document.getElementById('signup-form__name');
const signupFormEmail = document.getElementById('signup-form__email');
const signupFormPassword = document.getElementById('signup-form__password');

signupFormName.value = '';
signupFormEmail.value = '';
signupFormPassword.value = '';

function convertNameToTitleCase() {
  if (signupFormName.value === '' || !isNaN(signupFormName.value)) {
    return; 
  }
  signupFormName.value = signupFormName.value
    .split(' ')  
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');  
}

function isValidEmail() {
  if (signupFormEmail.value === '') {
    const emailError = document.createElement('<p>Email</p>');
    emailError.textContent='email field cannot be empty'
    emailError.style.display='red';
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const userEmail = signupFormEmail.value;

  if (emailPattern.test(userEmail)) {
    console.log("Valid email address");
  } else {
    console.log("Invalid email address");
  }
}

function isValidPassword(){
    const userPassword = signupFormPassword.value;  
    const passwordError =    document.createElement('<p>password error</p>');
     if (userPassword.value === '') {
           passwordError.textContent = "Password cannot be empty";
            passwordError.style.color = "red";
    return;

  }
 if(userPassword.length < 6){
    return 'your password has to be up to 6 characters'
 }
 else if(userPassword.length >= 6){
    return 'password is valid'
 }
}

signupFormName.addEventListener('input', convertNameToTitleCase);
signupFormEmail.addEventListener('input', isValidEmail);
signupFormPassword.addEventListener('input', isValidPassword); 

fetch()
}