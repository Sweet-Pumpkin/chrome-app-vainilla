// 01. Login 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// Greeting
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
// Username key
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // Localstorage username
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // Greeting
  paintGreetings(username);
}

// Greeting
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// Localstorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  // Show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // Login addEventListener submit
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // Show the greeting
  paintGreetings(savedUsername);
}