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


// nav bar highlight
const navLinks = document.querySelectorAll(".nav-item a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
  const currentPosition = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = section.offsetTop + section.offsetHeight - 50;

    if (sectionTop <= currentPosition && currentPosition <= sectionBottom) {
      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.hash === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
