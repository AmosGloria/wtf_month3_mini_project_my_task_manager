console.log("Signup JS Loaded");

function isValidEmail(email) {
  const v = email.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function submitSignupForm() {
  const nameInput = document.querySelector('#signup-form__name input');
  const emailInput = document.querySelector('#signup-form__email-input input');
  const passwordInput = document.querySelector('.password-wrapper input');

  if (!nameInput || !emailInput || !passwordInput) return;

  nameInput.addEventListener("input", () => {
    const value = nameInput.value.trim();
    if (!value || !isNaN(value)) return;

    nameInput.value = value
      .split(" ")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  });

  document.addEventListener("click", e => {
    if (
      e.target.classList.contains("_button") &&
      e.target.textContent.trim().toLowerCase() === "create account"
    ) {
      console.log("Create Account CLICKED!");

      const fullName = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      console.log("Email extracted:", email);

      if (!fullName) return alert("Full name is required.");
      if (!isValidEmail(email)) return alert("Invalid email format.");
      if (password.length < 6) return alert("Password must be at least 6 characters.");

      const signupURL =
        "https://nvmtqisivhyqyknxitmq.supabase.co/functions/v1/make-server-789385fc/signup";

      fetch(signupURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password })
      })
        .then(r => r.json().then(data => ({ status: r.status, data })))
        .then(({ status, data }) => {
          if (status !== 200) {
            alert(data.error || "Signup failed");
            return;
          }

          alert("Signup successful!");
          nameInput.value = "";
          emailInput.value = "";
          passwordInput.value = "";
        })
        .catch(err => {
          console.error("Network error:", err);
          alert("Network or server error.");
        });
    }
  });
}

const signupObserver = new MutationObserver(() => {
  const ready =
    document.querySelector('#signup-form__name input') &&
    document.querySelector('#signup-form__email-input input') &&
    document.querySelector('.password-wrapper input');

  if (ready) {
    console.log("Inputs detected. Initializing signup.");
    submitSignupForm();
    signupObserver.disconnect();
  }
});

signupObserver.observe(document.body, { childList: true, subtree: true });

console.log("Observer watching…");