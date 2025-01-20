const Menu = document.querySelector(".menu");
const menuBtnOpen = document.querySelector(".menu-open");
const menuBtnClose = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".nav__link");

const toggleMenu = () => Menu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
