


function OpenResume() {
  window.open("./assets/PDF/Dustin-Yansberg-Resume.pdf");
}


// when the user click on the menu button, open it in a drop down
function ToggleMenu() {
  document.getElementById("menuDropdown").classList.toggle("show");
  document.getElementById("dropbtn").classList.toggle("bg-a");
}

// When the mouse hovers over a project element
function ProjectMouseOver(elem) {
  elem.classList.toggle("show-flex");
}

// Dark mode toggle
function ToggleDarkMode() {
  let elements = document.querySelectorAll("div, a");
  document.body.classList.toggle("dark-mode1");
  elements.forEach((element) => {
    if (element.classList.contains("block-emphasis")) {
      console.log(element);
      element.classList.toggle("dark-mode2");
    } else {
      element.classList.toggle("dark-mode1");
    }
  });

  let element = document.getElementById("dropbtn");
  element.src = "./assets/Icons/menu-drk.png";
}








// CAROUSEL STUFF


const track = document.querySelector('.carousel__track');

