const expandButton = document.querySelector("#expandButton");
const navbar = document.getElementById("navbar-default");
// navbarHeight = navbar.clientHeight
// navbar.style.marginBottom = -navbarHeight + "px";

expandButton.addEventListener("click", function() {
  navbar.classList.toggle("nav-hidden");
  this.classList.toggle("collapsed");
});

expandButton.addEventListener("focusout", function() {
  this.classList.add("collapsed");
  navbar.classList.add("nav-hidden");
});

const navbar_full = document.getElementById("navbar_full");
navbarHeight_full = navbar_full.clientHeight
navbar_full.style.marginBottom = -navbarHeight_full + "px";

