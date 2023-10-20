function aplicarClasses() {
  const elemento = document.getElementById("cardConfig");
  const width = window.innerWidth;

  if (width < 625) {
    elemento.classList.remove("d-flex", "flex-row", "flex-md-row");
    elemento.classList.add("d-flex", "flex-column");
  } else {
    elemento.classList.remove("d-flex", "flex-column");
    elemento.classList.add("d-flex", "flex-row", "flex-md-row");
  }
}

window.addEventListener("load", aplicarClasses);
window.addEventListener("resize", aplicarClasses);



//scroll event
let lastScrollTop = 0;
const navbar = document.querySelector("nav.configHeader");

window.addEventListener("scroll", function () {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    navbar.remove();
  } else {
    document.body.appendChild(navbar);
  }

  lastScrollTop = currentScrollTop;
});


