const mobileMenu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-navigation");

mobileMenu.addEventListener("click", function (e) {
  let current = e.target.classList;

  if (current.contains("menu-open")) {
    current.remove("menu-open");
    nav.style.transform = "translateY(0)";
  } else {
    current.add("menu-open");
    nav.style.transform = "translateY(-100%)";
  }
});
