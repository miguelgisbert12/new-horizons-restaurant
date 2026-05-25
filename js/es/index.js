const Horizons = document.querySelector("h1");
const New = document.querySelector("h2");
const Descubre = document.querySelector("h3");
const video = document.getElementById("video");

let x = window.matchMedia("(min-width: 601px)");
let link_video_pequeno = "media/videos/intro_mobile_es.mp4";
let link_video_grande = "media/videos/intro_desktop_espanol.mp4";

// Transiciones de la animación de inicio:

setTimeout(transicion1, 300);
setTimeout(transicion2, 600);

function transicion1() {
    Horizons.classList.add("opacidad");
    Descubre.classList.add("opacidad");
}

function transicion2() {
    New.classList.add("caer");
}

function redireccion() {
    window.location = "html/es/pagina_principal.html";
}

// Redirección a la página principal, al finalizar la animación:

setTimeout(redireccion, 2500);

// Llamada a la función que identifica la anchura de pantalla y cambia la ruta (src) del vídeo:

cambioVideo(x);

// Cambio de ruta (src) del vídeo inicial, para adaptarlo a las media queries:

x.addEventListener("change", cambioVideo);

function cambioVideo(x) {
    if(x.matches) {
        video.src = link_video_grande;
    }else {
        video.src = link_video_pequeno;
    };
}


