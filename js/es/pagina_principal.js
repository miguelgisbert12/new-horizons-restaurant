
const Fondo = document.getElementById("fondo");
const Menu_hamburguesa = document.getElementById("menu_hamburguesa");
const Menu_hamburguesa_verde = document.getElementById("menu_hamburguesa_verde");
const Cartel_footer = document.querySelector("footer");
const Filtro_negro = document.getElementById("filtro_oscurecer");
const Cabecera = document.querySelector("header");
const Desplegable = document.getElementById("desplegable");
const Titulo_new = document.getElementById("titulos");
const footer_main = document.getElementById("footer_desplegable_main");
const Opciones_menu = document.getElementsByClassName("seleccionable"); // Seleccionar los li dentro del ul.
const Lista_opciones = document.getElementById("lista"); // Seleccionar el nav.
const menu_superior = document.getElementById("menu_media_query");

const banner_promocional = document.getElementById('promo_banner');
const boton_banner = document.getElementById('boton_banner2');
const texto_boton_banner = document.getElementById('texto_copiar');
const texto_boton_banner2 = document.getElementById('texto_copiar2');
const cruz_cerrar_banner = document.getElementById('cruz_banner');
const pelota_promocional = document.getElementById('promo_ball');
const caja_promocional = document.getElementById('box_promo');

let Link = "";
let menu_abierto = false;

// Mostrar-ocultar el menú superior en línea
// ---------------------------------

window.addEventListener("resize", function() {
    if(this.window.innerWidth >= 1300 && menu_abierto === true) {
        menu_superior.style = "display: none";
        footer_main.style = "display: none";
    };

    if(this.window.innerWidth >= 1300 && menu_abierto === false) {
        menu_superior.style = "display: flex";
        footer_main.style = "display: block";
    };

    if(this.window.innerWidth < 1300 && menu_abierto === false) {
        menu_superior.style = "display: none";
        footer_main.style = "display: none";
    };
});

// Transición FadeIn
// ---------------------------------

setTimeout(aparecer, 500);

function aparecer() {
    Fondo.classList.replace("opacidad", "fadeIn");
}

// Cambio de color del menú hamburguesa (hover)
// ---------------------------------

Menu_hamburguesa.addEventListener("mouseover", function() {

    if(menu_abierto === false) {
        Menu_hamburguesa.style = "display: none";
        Menu_hamburguesa_verde.style = "display: block";
    }
    
});

Menu_hamburguesa_verde.addEventListener("mouseover", function() {

    if(menu_abierto === true) {
        Menu_hamburguesa_verde.style = "display: none";
        Menu_hamburguesa.style = "display: block !important";
    }
});



Menu_hamburguesa_verde.addEventListener("mouseout", function() {

    if(menu_abierto === false) {
        Menu_hamburguesa.style = "display: block";
        Menu_hamburguesa_verde.style = "display: none";
    }
});


Menu_hamburguesa.addEventListener("mouseout", function() {
    
    if(menu_abierto === true) {
        Menu_hamburguesa_verde.style = "display: block";
        Menu_hamburguesa.style = "display: none";
    }
});

// Carga del banner promocional
// ---------------------------------

setTimeout(() => {
    caja_promocional.style.transition = "opacity 0.3s";
    caja_promocional.style.display = "flex";
    
    setTimeout(() => {
        if(menu_abierto === false) {
            caja_promocional.style.opacity = "1";
        }else {
            caja_promocional.style.display = "none";
        };
    }, 10);
    
}, 1500);

// Banner promocional
// ---------------------------------

boton_banner.addEventListener("click", () => {
    boton_banner.style.transition = "all 0.5s";
    boton_banner.style.backgroundColor = "transparent";

    setTimeout(() => {
        boton_banner.style.backgroundColor = "white";
        texto_boton_banner.style.display = "none";
        texto_boton_banner2.style.display = "block";

        navigator.clipboard.writeText("NHPROMO2024").then(() => {
            console.log("Código promocional copiado al portapapeles");
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    }, 200);
});

cruz_cerrar_banner.addEventListener("click", () => {
    banner_promocional.style.display = "none";
    caja_promocional.style.display = "flex";
    texto_boton_banner2.style.display = "none";
    texto_boton_banner.style.display = "block";

    setTimeout(() => {
        caja_promocional.style.opacity = "1";
    }, 10);
});

cruz_cerrar_banner.addEventListener("mouseover", () => {
    cruz_cerrar_banner.src = "../../media/img/Iconos/cerrar_verde.png";
});

cruz_cerrar_banner.addEventListener("mouseout", () => {
    cruz_cerrar_banner.src = "../../media/img/Iconos/cerrar.png";
});

pelota_promocional.addEventListener("mouseover", () => {
    pelota_promocional.style.transform = "scale(1.1)";
});

pelota_promocional.addEventListener("mouseout", () => {
    pelota_promocional.style.transform = "scale(1)";
});

pelota_promocional.addEventListener("click", () => {
    banner_promocional.style.display = "flex";
    caja_promocional.style.display = "none";
    caja_promocional.style.opacity = "0";
});

// Menú abierto / cerrado
// ---------------------------------

Menu_hamburguesa_verde.addEventListener("click", function() {

    if (menu_abierto === false) {

        Cartel_footer.style = "display: none";
        Filtro_negro.style = "opacity: 0.7; transition: opacity 0.5s";
        Filtro_negro.style.maxWidth = "none";
        Fondo.style = "justify-content: flex-start";
        Cabecera.style = "margin-bottom: 75px";
        Desplegable.style = "display: block";
        Cabecera.style.position = "fixed";
        Cabecera.style.left = "0";
        Cabecera.style.right = "0";
        Cabecera.style.margin = "auto";
        Cabecera.style.maxWidth = "1500px";
        footer_main.style = "display: none";
        banner_promocional.style.display = "none";
        caja_promocional.style.display = "none";
        caja_promocional.style.opacity = "0";
        texto_boton_banner2.style.display = "none";
        texto_boton_banner.style.display = "block";
        setTimeout(entrar, 200);
        menu_abierto = true;

    }else {

        Cartel_footer.style = "display: flex";
        Fondo.style = "justify-content: space-between";
        Cabecera.style = "margin-bottom: 0px";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "display: block; opacity: 0; transition: opacity 0.3s";
        Cabecera.style = "position: absolute";
        Cabecera.style.maxWidth = "none";
        caja_promocional.style.display = "flex";
        
        setTimeout(() => {
            caja_promocional.style.opacity = "1";
        }, 10);
        
        if(window.innerWidth > 1300) {
            menu_superior.style = "display: flex";
            footer_main.style = "display: block";
        };

        setTimeout(salir, 300);
        menu_abierto = false;
    }
});

Menu_hamburguesa.addEventListener("click", function() {

    if (menu_abierto === false) {

        Cartel_footer.style = "display: none";
        Filtro_negro.style = "opacity: 0.7; transition: opacity 0.5s";
        Filtro_negro.style.maxWidth = "none";
        Fondo.style = "justify-content: flex-start";
        Cabecera.style = "margin-bottom: 75px";
        Desplegable.style = "display: block";
        Cabecera.style.position = "fixed";
        Cabecera.style.left = "0";
        Cabecera.style.right = "0";
        Cabecera.style.margin = "auto";
        Cabecera.style.maxWidth = "1500px";
        footer_main.style = "display: none";
        banner_promocional.style.display = "none";
        caja_promocional.style.display = "none";
        caja_promocional.style.opacity = "0";
        texto_boton_banner2.style.display = "none";
        texto_boton_banner.style.display = "block";
        setTimeout(entrar, 200);
        menu_abierto = true;

    }else {

        Cartel_footer.style = "display: flex";
        Fondo.style = "justify-content: space-between";
        Cabecera.style = "margin-bottom: 0px";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "display: block; opacity: 0; transition: opacity 0.3s";
        Cabecera.style = "position: absolute";
        Cabecera.style.maxWidth = "none";
        caja_promocional.style.display = "flex";
        
        setTimeout(() => {
            caja_promocional.style.opacity = "1";
        }, 10);

        if(window.innerWidth>=1300) {
            Menu_hamburguesa.style = "opacity: 0, cursor: default";
        }else{
            Menu_hamburguesa.style = "display: block";
        };

        if(window.innerWidth > 1300) {
            menu_superior.style = "display: flex";
            footer_main.style = "display: block";
        };
        
        setTimeout(salir, 300);
        menu_abierto = false;
    }
});

function entrar() {
    Desplegable.style = "display: block; opacity: 1; transition: opacity 1s";
};

function salir() {
    if (menu_abierto === false) {
        Desplegable.style = "display: none";
    }
    
};

// Seleccionar opciones en el menú desplegable
// ---------------------------------

for (let i=0; i<Opciones_menu.length; i++) {


    Opciones_menu[i].addEventListener("click", function() {

        // Los li no seleccionados desaparecen al hacer click.

        for(let e=0; e<Opciones_menu.length; e++) {
            Opciones_menu[e].style = "display: none";
        };

        // Redirección del menú desplegable a otros HTMLs.

        if(i===0) {
            Link = "../../html/es/la_carta.html";
        }else if(i===1) {
            Link = "../../html/es/restaurantes.html";
        }else if(i===2) {
            Link = "../../html/es/quienes_somos.html";
        }else if(i===3) {
            Link = "../../html/es/novedades.html";
        }else if(i===4) {
            Link = "../../html/es/contacto.html";
        }

        // Desplazamiento y cambio de color del li seleccionado.

        this.style = "display: block; color: #c9e265";

        Lista_opciones.style = "transition: transform 0.5s; transform: translateY(-50px)";

        setTimeout(function(){window.location = Link}, 300);
    });

}

// Redirección al hacer click en el logo de New Horizons
// ---------------------------------

Titulo_new.addEventListener("click", function() {
    window.location = "../../html/es/pagina_principal.html";
});