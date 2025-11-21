function PasswordToggle() {
  const wrappers = document.querySelectorAll('.password-wrapper');

  wrappers.forEach((wrapper) => {
    const passwordInput = wrapper.querySelector('input');
    const lockIcon = wrapper.querySelector('.first-icon');
    const openIcon = wrapper.querySelector('.secon-icon');

    if (!passwordInput || !lockIcon || !openIcon) return;

    function togglePassword() {
      const isHidden = passwordInput.type === 'password';
      passwordInput.type = isHidden ? 'text' : 'password';
      wrapper.classList.toggle('show-password', isHidden);
    }

    lockIcon.addEventListener('click', togglePassword);
    openIcon.addEventListener('click', togglePassword);
  });
}

const observer = new MutationObserver(() => {
  const importedInput = document.querySelector('.password-wrapper input');
  if (importedInput) {
    PasswordToggle();
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
