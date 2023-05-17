//* DOM element
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const navToggle = function () {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}

btn.addEventListener("click", navToggle);
