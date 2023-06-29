
import throttle from "lodash.throttle";

// Initializare date formular : email, message, form

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = "feedback-form-state";

// Stare formular
const saveformStatus = throttle(() => {
  const formStatus = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formStatus));
}, 500);

// Verificare starea la incarcarea paginii
window.addEventListener("load", () => {
  const storedformStatus = localStorage.getItem(STORAGE_KEY);
  if (storedformStatus) {
    const formStatus = JSON.parse(storedformStatus);
    emailInput.value = formStatus.email;
    messageInput.value = formStatus.message;
  }
});

// Actualizare starea formularului la fiecare modificare
form.addEventListener("input", saveformStatus);

// Trimiterea formularului
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formStatus = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formStatus);
  localStorage.removeItem(STORAGE_KEY);
});