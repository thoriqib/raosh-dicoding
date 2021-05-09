import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

console.log(nav);
console.log(menuToggle);
