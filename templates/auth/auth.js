function initAuth() {
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const signupHeader = document.getElementById('auth__signup-header');
  const loginHeader = document.getElementById('auth__login-header');


  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (!loginBtn || !signupBtn || !loginForm || !signupForm) {
    console.warn('Auth elements not found');
    return;
  }

  function showLogin() {
    loginForm.style.display = 'block';
    loginHeader.style.display = 'block';
     signupForm.style.display = 'none';
    signupHeader.style.display = 'none'
  }

  function showSignup() {
    signupForm.style.display = 'block';
    signupHeader.style.display = 'block';
    loginForm.style.display = 'none';
     loginHeader.style.display = 'none';
  }

  loginBtn.addEventListener('click', showLogin);
  signupBtn.addEventListener('click', showSignup);

  // showLogin();
 
}

initAuth();