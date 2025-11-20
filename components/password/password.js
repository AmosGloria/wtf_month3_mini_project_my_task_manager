function PasswordToggle() {
  const wrappers = document.querySelectorAll('.password-wrapper');

  wrappers.forEach((wrapper) => {
    const passwordInput = wrapper.querySelector('input');
    const lockIcon = wrapper.querySelector('#first-icon');
    const openIcon = wrapper.querySelector('#secon-icon');

    if (!passwordInput || !lockIcon || !openIcon) return;

    if (!passwordInput.type) {
      passwordInput.setAttribute('type', 'password');
    }

    function togglePassword() {
      const isHidden = passwordInput.type === 'password';

      passwordInput.type = isHidden ? 'text' : 'password';

      wrapper.classList.toggle('show-password', isHidden);
    }

    lockIcon.addEventListener('click', togglePassword);
    openIcon.addEventListener('click', togglePassword);
  });
}

PasswordToggle();
