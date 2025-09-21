// //code pour montrer sur quelle page on se trouve dans la barre de navigation
const pageactuelle = window.location.pathname.split("/").pop();
const navlinks = document.querySelectorAll("nav a");

navlinks.forEach((link) => {
  if (link.getAttribute("href") === pageactuelle) {
    link.classList.add("active");
  }
});
// // code pour le mode dark et white
let bodydark = localStorage.getItem("bodydark");
const header_btnswitch = document.getElementById("header-bouton_mode");
const enablebodydark = () => {
  document.body.classList.add("bodydark");
  localStorage.setItem("bodydark", "active");
};

const disablebodydark = () => {
  document.body.classList.remove("bodydark");
  localStorage.setItem("bodydark", "null");
};

if (bodydark === "active") enablebodydark();
header_btnswitch.addEventListener("click", () => {
  bodydark = localStorage.getItem("bodydark");
  bodydark !== "active" ? enablebodydark() : disablebodydark();
});
// // code pour changer le logo en fonction du mode dark et white
const logo = document.getElementById("logo");
const logo_dark = "icone2.webp";
const logo_light = "icone.webp";
const change_logo = () => {
  bodydark === "active" ? (logo.src = logo_dark) : (logo.src = logo_light);
};
const logo_normal = () => {
  logo.src = logo_light;
};
if (bodydark === "active") logo_normal();
header_btnswitch.addEventListener("click", change_logo);
// // code pour le menu burger
const nav = document.querySelector(".header-navbar");
const navmode = document.querySelector(".header-bouton_mode");
const burger = document.querySelector(".header-burger");
const close = document.querySelector(".navbar-close");
burger.addEventListener("click", () => {
  nav.style.right = "0";
  navmode.style.right = "0";
});
close.addEventListener("click", () => {
  nav.style.right = "-100%";
  navmode.style.right = "-100%";
});
// //code pour afficher la carte google map
const iconecarte = document.getElementById("iconecart");
const carte = document.getElementById("map");
const affichercarte = () => {
  carte.style.display = "block";
};
const cachercarte = () => {
  carte.style.display = "none";
};
iconecarte.addEventListener("click", () => {
  carte.style.display == "none" ? affichercarte() : cachercarte();
});
// //code pour l'envoie sur emailjs
const SERVICE_ID = "service_4ebuk8c";
const TEMPLATE_ID = "template_8eglfjp";
const PUBLIC_KEY = "J4LF2fobdgOu5MvW5";
emailjs.init(PUBLIC_KEY);
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
  alert("Merci pour votre message !");
  form.reset();
});
