export function initAuth() {
  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');

  const loginForm = document.querySelector('.auth-login');
  const signupForm = document.querySelector('.auth-signup');

  if (!loginBtn || !signupBtn || !loginForm || !signupForm) {
    console.warn('Auth elements not found');
    return;
  }

  function showLogin(e) {
    if (e) e.preventDefault();
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  }

  function showSignup(e) {
    if (e) e.preventDefault();
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  }

  loginBtn.addEventListener('click', showLogin);
  signupBtn.addEventListener('click', showSignup);

  showLogin();
}
