const Fondo = document.getElementById("fondo");
const Menu_hamburguesa = document.getElementById("menu_hamburguesa");
const Menu_hamburguesa_verde = document.getElementById("menu_hamburguesa_verde");
const Filtro_negro = document.getElementById("filtro_oscurecer");
const Cabecera = document.querySelector("header");
const Desplegable = document.getElementById("desplegable");
const Opciones_menu = document.getElementsByClassName("seleccionable"); // Seleccionar los li dentro del ul.
const Lista_opciones = document.getElementById("lista"); // Seleccionar el nav.
const Plantilla_novedades = document.getElementById("plantilla_novedades");
const Titulo_new = document.getElementById("titulos");
const Cajas = document.getElementsByClassName("caja");
const Caja_pequena = document.getElementById("caja_pequena");
const Nombre_plato_novedades = document.getElementById("nombre");
const Precio_plato_novedades = document.getElementById("precio");
const menu_superior = document.getElementById("menu_media_query");
const contenedor_cambio = document.getElementById('caja_cambio');
const texto_cambio = document.getElementById('cambiopagina');
const icon_change = document.getElementById('icono_cambio');
const platos = document.querySelectorAll('.plato_seleccionable');

let imagen_novedades;
let Link_menu = "";
let menu_abierto = false;
let num_img_novedades = 1;

// Mostrar-ocultar el menú superior en línea
// ---------------------------------

window.addEventListener("resize", function() {
    if(this.window.innerWidth >= 1300 && menu_abierto === true) {
        menu_superior.style = "display: none";
    };

    if(this.window.innerWidth >= 1300 && menu_abierto === false) {
        menu_superior.style = "display: flex";
    };

    if(this.window.innerWidth < 1300 && menu_abierto === false) {
        menu_superior.style = "display: none";
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

// Menú abierto / cerrado
// ---------------------------------

Menu_hamburguesa_verde.addEventListener("click", function() {

    if (menu_abierto === false) {

        Filtro_negro.style = "display: block";
        Desplegable.style = "display: block";
        Plantilla_novedades.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_novedades.style = "display: flex; opacity: 0";
        Cabecera.style = "position: relative";
        Cabecera.style.maxWidth = "none";

        if(window.innerWidth > 1300) {
            menu_superior.style = "display: flex";
        };

        setTimeout(salir, 100);
        menu_abierto = false;
    }
});

Menu_hamburguesa.addEventListener("click", function() {

    if (menu_abierto === false) {

        Filtro_negro.style = "opacity: 0.3; transition: opacity 0.5s";
        Desplegable.style = "display: block";
        Plantilla_novedades.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_novedades.style = "display: flex; opacity: 0";
        Cabecera.style = "position: relative";
        Cabecera.style.maxWidth = "none";

        if(window.innerWidth>=1300) {
            Menu_hamburguesa.style = "opacity: 0, cursor: default";
        }else{
            Menu_hamburguesa.style = "display: block";
        };

        if(window.innerWidth > 1300) {
            menu_superior.style = "display: flex";
        };

        setTimeout(salir, 100);
        menu_abierto = false;
    }
});

function entrar() {
    Filtro_negro.style = "display: block; opacity: 0.3; transition: opacity 0.3s";
    Desplegable.style = "display: block; opacity: 1; transition: opacity 0.8s";
};

function salir() {
    if (menu_abierto === false) {
        Filtro_negro.style = "display: none";
        Desplegable.style = "display: none";
        Plantilla_novedades.style = "opacity: 1; transition: opacity 0.5s";
    }
    
};

// Seleccionar opciones menú desplegable
// ---------------------------------

for (let i=0; i<Opciones_menu.length; i++) {


    Opciones_menu[i].addEventListener("click", function() {

        // Los li no seleccionados desaparecen al hacer click.

        for(let e=0; e<Opciones_menu.length; e++) {
            Opciones_menu[e].style = "display: none";
        };

        // Redirección del menú desplegable a otros HTMLs.

        if(i===0) {
            Link_menu = "../../html/es/la_carta.html";
        }else if(i===1) {
            Link_menu = "../../html/es/restaurantes.html";
        }else if(i===2) {
            Link_menu = "../../html/es/quienes_somos.html";
        }else if(i===3) {
            Link_menu = "../../html/es/novedades.html";
        }else if(i===4) {
            Link_menu = "../../html/es/contacto.html";
        }

        // Desplazamiento y cambio de color del li seleccionado.

        this.style = "display: block; color: #c9e265";

        Lista_opciones.style = "transition: transform 0.5s; transform: translateY(-50px)";

        setTimeout(function(){window.location = Link_menu}, 300);
    });

};

// Redirección al seleccionar un plato.
// ---------------------------------

for(let i=0; i<platos.length; i++) {
    platos[i].addEventListener("click", function() {
        const dish_name = platos[i].getAttribute("dish_name");
        const precio = platos[i].getAttribute("precio");
        window.location.href = '../../html/es/nuestros_platos.html?dish_name=' + encodeURIComponent(dish_name) + '&precio=' + encodeURIComponent(precio);
    });
};

// Redirección al hacer click en el logo de New Horizons.
// ---------------------------------

Titulo_new.addEventListener("click", function() {
    window.location = "../../html/es/pagina_principal.html";
});


// Precargar las imágenes.
// ---------------------------------

const imagenes = [];

function preload() {
    for(let i=0; i<arguments.length; i++) {
        imagenes[i] = new Image();
        imagenes[i].src = preload.arguments[i];
    };
};

preload(
    "../../media/img/Imagenes/Fondos/editadas/burguer_especial_edit.jpg",
    "../../media/img/Imagenes/Fondos/editadas/rollitos_edit.jpg",
    "../../media/img/Imagenes/Postres/cereales.jpg",
    "../../media/img/Imagenes/Fondos/editadas/tartar_edit.jpg",
    "../../media/img/Imagenes/Fondos/editadas/menu_bocadillo_cut.jpg",
    "../../media/img/Imagenes/Fondos/editadas/menu_bocadillo.jpg"
);
