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
//code pour la recherche dynamique
const searchinput = document.querySelector(".barre_de_recherche");
const searchresult = document.querySelector(".articlecarte");
const bouton_recherche = document.querySelector(".bouton_recherche");
let datarray = [];

async function getarticle() {
  const res = await fetch("data.json");
  const results = await res.json();
  datarray = orderlist(results);
  creatarticlelist(datarray);
}
getarticle();

function orderlist(data) {
  return data.sort((a, b) =>
    a.titre.toLowerCase().localeCompare(b.titre.toLowerCase())
  );
}

function creatarticlelist(articlelist) {
  searchresult.innerHTML = "";
  articlelist.forEach((article) => {
    const list = document.createElement("div");
    list.setAttribute("class", "articlecarte-skin");
    list.innerHTML = `
        <model-viewer
          src="${article.model}"
          alt="${article.alt}"
          auto-rotate
          camera-controls
          ar
          environment-image="${article.environmentImage}"
          exposure="${article.exposure}"
          class="model"
        >
        </model-viewer>
        <div class="model_info">
          <div class="in_model">
            <h3 class="model_titre">${article.titre}:</h3>
            <p class="model_text">${article.description}</p>
            <h4 class="model_prix">${article.prix}</h4>
          </div>
        </div>
      `;
    searchresult.appendChild(list);
  });
}

function fliterdata() {
  const searchstring = searchinput.value.toLowerCase();
  const filteredarr = datarray.filter(
    (el) =>
      el.titre.toLowerCase().includes(searchstring) ||
      el.description.toLowerCase().includes(searchstring)
  );
  creatarticlelist(filteredarr);
}

bouton_recherche.addEventListener("click", fliterdata);
