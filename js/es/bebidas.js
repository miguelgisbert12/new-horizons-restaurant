const Fondo = document.getElementById("fondo");
const Menu_hamburguesa = document.getElementById("menu_hamburguesa");
const Menu_hamburguesa_verde = document.getElementById("menu_hamburguesa_verde");
const Filtro_negro = document.getElementById("filtro_oscurecer");
const Cabecera = document.querySelector("header");
const Desplegable = document.getElementById("desplegable");
const Opciones_menu = document.getElementsByClassName("seleccionable"); // Seleccionar los li dentro del ul.
const Lista_opciones = document.getElementById("lista"); // Seleccionar el nav.
const Plantilla_bebidas = document.getElementById("plantilla_bebidas");
const Titulo_new = document.getElementById("titulos");
const Cajas = document.getElementsByClassName("caja");
const Caja_pequena = document.getElementById("caja_pequena");
const menu_superior = document.getElementById("menu_media_query");
const contenedor_cambio = document.getElementById('caja_cambio');
const texto_cambio = document.getElementById('cambiopagina');
const icon_change = document.getElementById('icono_cambio');
const platos = document.querySelectorAll('.plato_seleccionable');

const cubiertos = document.getElementById("caja_pedido_top");
const cubiertos_bottom = document.getElementById("caja_pedido");
const simbolo_cubiertos_top = document.getElementById("cart");
const num_elementos_top = document.getElementById('numero_elementos_top');
const simbolo_cubiertos_bottom = document.getElementById("cart_bottom");
const circulo_cubiertos_bottom = document.getElementById("circulo_cubiertos");
const circulo_numero = document.getElementById("circulo_numero_pedido");
const numero_bottom = document.getElementById("num_btm");

const full_content = document.getElementById("contenido_general");

let Link_menu = "";
let menu_abierto = false;

// Mostrar-ocultar el menú superior en línea
// ---------------------------------

function ResizeWindow() {
    
    if(this.window.innerWidth >= 1300 && menu_abierto === true) {
        menu_superior.style.display = "none";
    };

    if(this.window.innerWidth >= 1300 && menu_abierto === false) {
        menu_superior.style.display = "flex";
    };

    if(this.window.innerWidth >= 1300) {
        cubiertos.style.display = "none";
        cubiertos_bottom.style.display = "flex";
    }

    if(this.window.innerWidth < 1300 && menu_abierto === false) {
        menu_superior.style = "display: none";
    };

    if(this.window.innerWidth < 1300) {
        cubiertos_bottom.style.display = "none";
        cubiertos.style.display = "flex";
    }

    if(this.window.innerWidth > 1700) {
        circulo_cubiertos_bottom.style.backgroundColor = "white";
        circulo_numero.style.backgroundColor = "white";
        numero_bottom.style.fontWeight = 800;
        numero_bottom.style.color = "#1a1b1e";
        simbolo_cubiertos_bottom.src = "../../media/img/Iconos/cart_black.png";
    };

    if(this.window.innerWidth < 1700) {
        circulo_cubiertos_bottom.style.backgroundColor = "#1a1b1e";
        circulo_numero.style.backgroundColor = "#1a1b1e";
        numero_bottom.style.color = "white";
        simbolo_cubiertos_bottom.src = "../../media/img/Iconos/cart.png";
    };
};

ResizeWindow();

window.addEventListener("resize", function() {
ResizeWindow();
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
        Plantilla_bebidas.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_bebidas.style = "display: flex; opacity: 0";
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
        Plantilla_bebidas.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_bebidas.style = "display: flex; opacity: 0";
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
        Plantilla_bebidas.style = "opacity: 1; transition: opacity 0.5s";
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

}

// Redirección al hacer click en el logo de New Horizons.
// ---------------------------------

Titulo_new.addEventListener("click", function() {
    window.location = "../../html/es/pagina_principal.html";
});

// Redirección al seleccionar un plato.
// ---------------------------------

for(let i=0; i<platos.length; i++) {
    platos[i].addEventListener("click", function() {
        const dish_name = platos[i].getAttribute("dish_name");
        const precio = platos[i].getAttribute("precio");
        window.location.href = '../../html/es/nuestros_platos.html?dish_name=' + encodeURIComponent(dish_name) + '&precio=' + encodeURIComponent(precio);
    });
};

// Cambio de página entrantes-principales-menús...
// ---------------------------------

contenedor_cambio.addEventListener("mouseover", () => {
    icon_change.style.transform = "rotate(180deg)";
    texto_cambio.style.color = "white";
    icon_change.style.opacity = 1;
});

contenedor_cambio.addEventListener("mouseout", () => {
    icon_change.style.transform = "rotate(0deg)";
    texto_cambio.style.color = "#ffffff5b";
    icon_change.style.opacity = 0.4;
});

contenedor_cambio.addEventListener("click", () => {
    window.location = "../../html/es/entrantes.html";
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
    "../../media/img/Imagenes/Fondos/editadas/batido_fresa.jpg",
    "../../media/img/Imagenes/Bebidas/batido_frambuesa.jpg",
    "../../media/img/Imagenes/Fondos/editadas/bebida_frutos.jpg",
    "../../media/img/Imagenes/Bebidas/chocolate_caliente.jpg"
);

// Carrito.
// ---------------------------------

cubiertos.addEventListener("mouseover", () => {
    simbolo_cubiertos_top.src = "../../media/img/Iconos/cart_green.png";
});

cubiertos.addEventListener("mouseout", () => {
    simbolo_cubiertos_top.src = "../../media/img/Iconos/cart.png";
});

cubiertos.addEventListener("click", () => {
    //Aquí iría la funcionalidad al hacer click en los cubiertos.
});

circulo_cubiertos_bottom.addEventListener("mouseover", () => {

    simbolo_cubiertos_bottom.src = "../../media/img/Iconos/cart_green.png";

    if(this.window.innerWidth > 1700) {
        circulo_cubiertos_bottom.style.backgroundColor = "#4d4f52";
    };

    if(this.window.innerWidth < 1700) {
        circulo_cubiertos_bottom.style.backgroundColor = "#1a1b1e";
    };
    
});

circulo_cubiertos_bottom.addEventListener("mouseout", () => {
    
    if(this.window.innerWidth > 1700) {
        circulo_cubiertos_bottom.style.backgroundColor = "white";
        simbolo_cubiertos_bottom.src = "../../media/img/Iconos/cart_black.png";
    };
    
    if(this.window.innerWidth < 1700) {
        simbolo_cubiertos_bottom.src = "../../media/img/Iconos/cart.png";
    };
    
});

simbolo_cubiertos_top.addEventListener("click", () => {
    window.location = "../../html/es/mi_pedido.html";
});

circulo_cubiertos_bottom.addEventListener("click", () => {
    window.location = "../../html/es/mi_pedido.html";
});

// Actualizar elementos en carrito
// -------------------------------------

function addCartElements() {

    const elementos_carrito = localStorage.getItem('elementosEnCarrito');
    num_elementos_top.textContent = elementos_carrito;
    numero_bottom.textContent = elementos_carrito;
};

addCartElements();
