  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const signupHeader = document.getElementById('auth__signup-header');
  const loginHeader = document.getElementById('auth__login-header');
  const createButton = document.querySelector('.button__create');  
  const nextButton = document.querySelector('.button__next')

  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

function initAuth() {


  if (!loginBtn || !signupBtn || !loginForm || !signupForm || !nextButton) {
    console.warn('Auth elements not found');
    return;
  }

  function showLogin() {
    loginForm.style.display = 'block';
    loginHeader.style.display = 'block';
    nextButton.style.display ='block';
    createButton.style.display='none'
    signupForm.style.display = 'none';
    signupHeader.style.display = 'none';

  }

  function showSignup() {
    signupForm.style.display = 'block';
    signupHeader.style.display = 'block';
    createButton.style.display='block';
    nextButton.style.display ='none';
    loginForm.style.display = 'none';
    loginHeader.style.display = 'none';
  }

  loginBtn.addEventListener('click', showLogin);
  signupBtn.addEventListener('click', showSignup);
 nextButton.addEventListener('click', function() {
    window.location.href = '/dashboard';
  });
}

function signup (){
  const signupForm = document.getElementById('signup-form');
  const signupName= document.querySelector('.signup-form__name');
  const signupPassword = document.querySelector('.signup-form__password');
  const signupEmail = document.querySelector('.signup-form__email');
  const url='https://nvmtqisivhyqyknxitmq.supabase.co/functions/v1/make-server-789385fc/signup';

   fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
  .then(response=>{
    if(!response){
      throw new error('could not submit details')
    }
    else{
      response.json()
    }
  })
  .then(data=>{
    return 'signup was successful'
  })
  .catch(error=>{
    return 'signup was not successful.'
  })
}

createButton.addEventListener('click', signup)

initAuth();
