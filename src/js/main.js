const button = document.querySelector("button[data-collapse-toggle='navbar-default']");
const navbar = document.getElementById("navbar-default");
button.addEventListener("click", function() {
  navbar.classList.toggle("collapse");
});

const expandButton = document.querySelector("#expandButton");

// expandButton.addEventListener("click", function () {
//   this.classList.toggle("expanded");
// });

expandButton.onfocus = function () {
  this.classList.edd("expanded");
}
expandButton.onfocusout = function () {
  this.classList.remove("expanded");
}