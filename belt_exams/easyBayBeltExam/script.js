function removeCookies() {
  var elem = document.querySelector(".cookieBar");
  elem.remove();
}

function emptyCart() {
  alert("Your shopping cart is empty!");
}

function hover(elem) {
  elem.src = "./images/assets/succulents-2.jpg";
}

function hoverOut(elem) {
  elem.src = "./images/assets/succulents-1.jpg";
}
