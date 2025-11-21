function setupEmailValidation() {
  const emailContainer = document.querySelector('#signup-form__email-input');
  if (!emailContainer) return;

  const emailInput = emailContainer.querySelector('input'); 
  const errorMessage = document.querySelector('.email-error-message');

  if (!emailInput) return;

  function validateEmail() {
    const value = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (value === "") {
      errorMessage.style.display = "none";
      emailInput.classList.remove("email-error");
      return;
    }

    if (!isValid) {
      emailInput.classList.add("email-error");
      errorMessage.style.display = "block";
    } else {
      emailInput.classList.remove("email-error");
      errorMessage.style.display = "none";
    }
  }

  emailInput.addEventListener("input", validateEmail);
}

const observer = new MutationObserver(() => {
  const importedEmailInput = document.querySelector('#signup-form__email-input input');
  if (importedEmailInput) {
    setupEmailValidation();
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
