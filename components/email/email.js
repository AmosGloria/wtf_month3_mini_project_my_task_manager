function setupEmailValidation() {
  const emailInput = document.querySelector('#signup-form__email-input input');
  const errorMessage = document.querySelector('.email-error-message');

  if (!emailInput || !errorMessage) return;

  function validate() {
    const value = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (value === "") {
      errorMessage.style.display = "none";
      return;
    }

    if (!isValid) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  }

  emailInput.addEventListener("input", validate);
}

const emailObserver = new MutationObserver(() => {
  const inputReady = document.querySelector('#signup-form__email-input input');
  if (!inputReady) return;

  setupEmailValidation();
  emailObserver.disconnect();
});

emailObserver.observe(document.body, { childList: true, subtree: true });
