function initAuth() {
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const signupHeader = document.getElementById('signup-header');
  const loginHeader = document.getElementById('login-header');


  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (!loginBtn || !signupBtn || !loginForm || !signupForm) {
    console.warn('Auth elements not found');
    return;
  }

  function showLogin() {
    loginForm.style.display = 'block';
     signupForm.style.display = 'none';
    if(loginForm.style.display == 'block' && signupForm.style.display == 'none'){
      loginHeader.style.display = 'block'
    }
    else{
      loginHeader.style.display = 'none'
    }
    
  }

  function showSignup() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
   if( signupForm.style.display == 'block' && loginForm.style.display == 'none'){
   signupHeader.style.display = 'block'
   }
    else{
      signupHeader.style.display = 'none';
    }
  }

  loginBtn.addEventListener('click', showLogin);
  signupBtn.addEventListener('click', showSignup);

  showLogin();
}

initAuth();