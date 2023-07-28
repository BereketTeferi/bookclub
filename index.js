
function validateForm() {
  var email = document.querySelector('input[type="text"][required="required"]').value;
  var username = document.querySelectorAll('input[type="text"][required="required"]')[1].value;
  var password = document.querySelector('input[type="password"][required="required"]').value;

  
  if (email === '') {
      alert('Email is required.');
      return;
  }
  
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!email.match(emailRegex)) {
      document.getElementById("email").style.opacity = "1";
      return;
  }
  
  var usernameRegex = /^[a-zA-Z]+$/;
  if (!username.match(usernameRegex)) {
    document.getElementById("email").style.opacity = "0";
    document.getElementById("user_name").style.opacity = "1";
      return;
  }
  
  if (password.length < 8) {
    document.getElementById("email").style.opacity = "0";
    document.getElementById("user_name").style.opacity = "0";
    document.getElementById("password").style.opacity = "1";
      return;
  }
  
  document.getElementById("email").style.opacity = "0";
  document.getElementById("user_name").style.opacity = "0";
  document.getElementById("password").style.opacity = "0";
  document.querySelector("h5").style.opacity = "1";

}
