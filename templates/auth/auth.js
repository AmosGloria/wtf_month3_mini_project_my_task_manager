const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

function clickLogin(e) {
  e.preventDefault();

  const loginForm = document.querySelector('.auth-login');
  const signupForm = document.querySelector('.auth-signup');

  if (!loginForm || !signupForm) return;

  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
}

function clickSignup(e) {
  e.preventDefault();

  const loginForm = document.querySelector('.auth-login');
  const signupForm = document.querySelector('.auth-signup');

  if (!loginForm || !signupForm) return;

  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
}

// attach listeners
if (loginBtn) loginBtn.addEventListener('click', clickLogin);
if (signupBtn) signupBtn.addEventListener('click', clickSignup);
