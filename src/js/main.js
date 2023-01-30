const button = document.querySelector("button[data-collapse-toggle='navbar-default']");
const navbar = document.getElementById("navbar-default");
button.addEventListener("click", function() {
  navbar.classList.toggle("collapse");
});

