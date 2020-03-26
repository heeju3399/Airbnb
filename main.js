var login = document.getElementById("login");
function openLogin() {
  login.style.display = "block";
}
function closeLogin() {
  login.style.display = "none";
}
window.onclick ==
  function(event) {
    if (event.target == login) {
      login.style.display = "none";
    }
  };

var signup = document.getElementById("signup");
function openSignup() {
  signup.style.display = "block";
}
function closeSignup() {
  signup.style.display = "none";
}
window.onclick ==
  function(event) {
    if (event.target == signup) {
      signup.style.display = "none";
    }
  };
