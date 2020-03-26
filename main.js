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

var signup2 = document.getElementById("signup2");
function openSignup() {
  signup2.style.display = "block";
}
function closeSignup() {
  signup2.style.display = "none";
}
window.onclick ==
  function(event) {
    if (event.target == signup2) {
      signup2.style.display = "none";
    }
  };
