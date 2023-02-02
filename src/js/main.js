const expandButton = document.querySelector("#expandButton");
const navbar = document.getElementById("navbar-default");
navbarHeight = navbar.clientHeight
console.log("navbarHeight", navbarHeight);
navbar.style.marginBottom = -navbarHeight + "px";

expandButton.addEventListener("click", function() {
  navbar.classList.toggle("nav-hidden");
  this.classList.toggle("collapsed");
});

expandButton.addEventListener("focusout", function() {
  this.classList.add("collapsed");
  navbar.classList.add("nav-hidden");
});
