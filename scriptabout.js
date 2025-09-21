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
//code pour la diaporama
const carousel = document.getElementById("about_carousel");
let slide = [
  `<h3 class="carousel_titre">Modélisation:</h3>
   <p class="carousel_text">Création de la forme de base de l’objet ou de la scène en 3D, à partir de cubes, sphères ou autres formes géométriques.</p>
   <h4 class="carousel_durer">DURER:2 à 4 jours</h4>
           <img src="The-Workflow-of-3D-Modeling.webp" class="carousel_img" alt="image illustratif">
`,

  `<h3 class="carousel_titre">Texturisation & Lumière:</h3>
   <p class="carousel_text">Application des couleurs, matières et textures sur les modèles, puis ajout des sources de lumière pour donner réalisme et profondeur.</p>
   <h4 class="carousel_durer">DURER:3 à 5 jours</h4>
           <img src="3d-texturing (1).webp" class="carousel_img" alt="image illustratif">
`,

  `<h3 class="carousel_titre">Rendu Final:</h3>
   <p class="carousel_text">Transformation de la scène en image réaliste grâce au calcul du rendu, prêt à être utilisé ou présenté.</p>
   <h4 class="carousel_durer">DURER:1 à 2 jours</h4>
    <model-viewer
            src="Robot.glb"
            alt="robot en 3D"
            auto-rotate
            camera-controls
            ar
            environment-image="neutral"
            exposure="1"
            class="moob"
          >
          </model-viewer>`,
];

let numdiapo = 0;
let numbslider = slide.length - 1;
window.addEventListener("load", loader, false);
function loader() {
  changeimage();
}
function changeimage() {
  if (numdiapo > numbslider) {
    numdiapo = 0;
  }
  carousel.innerHTML = slide[numdiapo];
  numdiapo++;
  setTimeout(changeimage, 5000);
}
