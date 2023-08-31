// When Like Button is pressed, post an alert.
function alertLikeButtonPressed() {
  alert("ninja was liked");
}

// when login button is pressed, change the text
function logInToLogOut() {
  var elem = document.querySelector(".login");
  if (elem.innerText == "Login") {
    elem.innerText = "Logout";
  } else {
    elem.innerText = "Login";
  }
}

// when Add Definition is pressed, remove the button
function onAddDefClick() {
  var elem = document.querySelector("#addDefButton");
  elem.remove();
}
