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
//code pour la pagination
const fgauche = document.getElementById("pagination_boutonI1");
const fdroite = document.getElementById("pagination_boutonI2");
const b1 = document.getElementById("pagination_boutonB1");
const b2 = document.getElementById("pagination_boutonB2");
const b3 = document.getElementById("pagination_boutonB3");
const publication = document.getElementById("pub_publication");
let value = 1;

function page() {
  if (value === 1) {
    publication.innerHTML = "";
    publication.innerHTML = ` <model-viewer
          src="Robot.glb"
          alt="robot en 3D"
          auto-rotate
          camera-controls
          ar
          environment-image="neutral"
          exposure="1"
          class="moob"
          
        >
        </model-viewer>`;
  }
  if (value === 2) {
    publication.innerHTML = "";
    publication.innerHTML = ` <model-viewer
          src="My Neighbor.glb"
          alt="personnage fictif en 3D"
          auto-rotate
          camera-controls
          ar
          environment-image="neutral"
          exposure="1"
          class="moob"
        >
        </model-viewer>`;
  }
  if (value === 3) {
    publication.innerHTML = "";
    publication.innerHTML = ` <model-viewer
          src="DORAEMON.glb"
          alt="skin"
          auto-rotate
          camera-controls
          ar
          environment-image="neutral"
          exposure="1"
          class="moob"
        >
        </model-viewer>`;
  }
  if (value > 3) {
    publication.innerHTML = "";
    publication.innerHTML = ` <model-viewer
          src="Robot.glb"
          alt="robot en 3D"
          auto-rotate
          camera-controls
          ar
          environment-image="neutral"
          exposure="1"
          class="moob"
          
        >
        </model-viewer>`;
  }
  if (value < 1) {
    publication.innerHTML = "";
    publication.innerHTML = ` <model-viewer
          src="DORAEMON.glb"
          alt="skin"
          auto-rotate
          camera-controls
          ar
          environment-image="neutral"
          exposure="1"
          class="moob"
        >
        </model-viewer>`;
  }
}

function clickpage1() {
  value = 1;
  page();
}

function clickpage2() {
  value = 2;
  page();
}

function clickpage3() {
  value = 3;
  page();
}

function clickfgauche() {
  value = value - 1;
  page();
}

function clickfdroite() {
  value = value + 1;
  page();
}
fgauche.addEventListener("click", clickfgauche);
fdroite.addEventListener("click", clickfdroite);
b1.addEventListener("click", clickpage1);
b2.addEventListener("click", clickpage2);
b3.addEventListener("click", clickpage3);
