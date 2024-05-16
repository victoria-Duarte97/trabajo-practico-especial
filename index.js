const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// MODO CLARO Y OSCURO

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}