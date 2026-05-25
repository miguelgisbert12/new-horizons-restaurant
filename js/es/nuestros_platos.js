const Fondo = document.getElementById("fondo");
const Menu_hamburguesa = document.getElementById("menu_hamburguesa");
const Menu_hamburguesa_verde = document.getElementById("menu_hamburguesa_verde");
const Filtro_negro = document.getElementById("filtro_oscurecer");
const Cabecera = document.querySelector("header");
const Desplegable = document.getElementById("desplegable");
const Opciones_menu = document.getElementsByClassName("seleccionable"); // Seleccionar los li dentro del ul.
const Lista_opciones = document.getElementById("lista"); // Seleccionar el nav.
const Plantilla_plato = document.getElementById("plantilla_plato");
const Titulo_new = document.getElementById("titulos");
const menu_superior = document.getElementById("menu_media_query");
const goback = document.getElementById('flecha_volver');
const footer_add = document.querySelector("footer");
const contenido_sin_footer = document.getElementById("plantilla_plato");
const precio_superior_actual = document.getElementById("precio_superior");

const numero_cantidad_seleccionada = document.getElementById("cantidad_to_add");
const btn_sumar = document.getElementById("boton_sumar");
const btn_restar = document.getElementById("boton_restar");
const suma_precio = document.getElementById("total_price");
const btn_add_cart = document.getElementById("boton_add_cart");
const btn_ver_pedido = document.getElementById("boton_ver_pedido");
const texto_cambiante_footer = document.getElementById("add_to_order");
const icono_cambiante = document.getElementById("icon_add");
const iconos_comida = document.querySelectorAll(".comida_icono");

const cubiertos = document.getElementById("caja_pedido_top");
const cubiertos_bottom = document.getElementById("caja_pedido");
const simbolo_cubiertos_top = document.getElementById("cart");
const num_elementos_top = document.getElementById('numero_elementos_top');
const simbolo_cubiertos_bottom = document.getElementById("cart_bottom");
const circulo_cubiertos_bottom = document.getElementById("circulo_cubiertos");
const circulo_numero = document.getElementById("circulo_numero_pedido");
const numero_bottom = document.getElementById("num_btm");

let Link_menu = "";
let menu_abierto = false;
let footer_add_abierto = false;
let exception_footer = false;

let cantidad_seleccionada = 0;
let posicion_icono = 0;

const urlParams = new URLSearchParams(window.location.search);
const precioPlato = urlParams.get('precio');
const precio_numerico = parseFloat(precioPlato);
console.log("Precio del plato:", precioPlato);

let precio_total = parseFloat(0.00).toFixed(2);
let precio_pedido = parseFloat(0.00).toFixed(2); // precio total del pedido.


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
        circulo_cubiertos_bottom.style.backgroundColor = "white";
        circulo_numero.style.backgroundColor = "white";
        numero_bottom.style.color = "#1a1b1e";
        numero_bottom.style.fontWeight = 800;
        simbolo_cubiertos_bottom.src = "../../media/img/Iconos/cart_black.png";
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

        cerrarFooter();
        footer_add.style.display = "none";
        Filtro_negro.style = "display: block";
        Desplegable.style = "display: block";
        Plantilla_plato.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        footer_add.style.display = "flex";
        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_plato.style = "display: flex; opacity: 0";
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

        cerrarFooter();
        footer_add.style.display = "none";
        Filtro_negro.style = "opacity: 0.3; transition: opacity 0.5s";
        Desplegable.style = "display: block";
        Plantilla_plato.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        footer_add.style.display = "flex";
        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_plato.style = "display: flex; opacity: 0";
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
        Plantilla_plato.style = "opacity: 1; transition: opacity 0.5s";
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


// Añadirlo a tu pedido
// ---------------------------------

footer_add.addEventListener("mouseenter", () => {
    if(footer_add_abierto === false) {
        footer_add.style.height = "120px";
    };
});

footer_add.addEventListener("mouseleave", () => {
    if(footer_add_abierto === false) {
        footer_add.style.height = "100px";
    };
});


footer_add.addEventListener("click", () => {

    if(footer_add_abierto === false && exception_footer === false) {
        abrirFooter();
    };

    if(footer_add_abierto === true) {
        footer_add.style.cursor = "default";

        contenido_sin_footer.addEventListener("click", () => {
            cerrarFooter();
        });
    };
    
});

function abrirFooter() {
    footer_add.style.height = "550px";
    footer_add.style.borderTopColor = "#c9e26583";
    contenido_sin_footer.style.opacity = "0.2";
    footer_add_abierto = true;
    cubiertos_bottom.style.display = "none";
};

function cerrarFooter() {
    footer_add.style.height = "100px";
    footer_add_abierto = false;
    footer_add.style.cursor = "pointer";
    contenido_sin_footer.style.opacity = "1";
    footer_add.style.borderTopColor = "";

    setTimeout(() => {
        cantidad_seleccionada = 0;
        numero_cantidad_seleccionada.textContent = cantidad_seleccionada;
        precio_total = 0.00;
        suma_precio.textContent = "0.00 €";
        posicion_icono = 0;
        
        for (let i = 0; i < iconos_comida.length; i++) {
            iconos_comida[i].style.opacity = "0"; 
        };

        if(this.innerWidth >= 1300) {
            cubiertos_bottom.style.display = "flex";
        };

    }, 700);
};

// Sumar/restar cantidad
// ---------------------------------

btn_sumar.addEventListener("click", () => {
    if(cantidad_seleccionada <= 100) {
        cantidad_seleccionada++;
        numero_cantidad_seleccionada.textContent = cantidad_seleccionada;
        

        precio_total = (parseFloat(precio_total) + parseFloat(precio_numerico)).toFixed(2);
        suma_precio.textContent = `${precio_total} €`;

        if(posicion_icono < 5) {
            iconos_comida[posicion_icono].style.opacity = "1";
        };

        posicion_icono++;

        console.log("posicion:", posicion_icono);
        
    };
});

btn_restar.addEventListener("click", () => {
    if(cantidad_seleccionada > 0) {
        cantidad_seleccionada--;
        numero_cantidad_seleccionada.textContent = cantidad_seleccionada;

        precio_total = (parseFloat(precio_total) - parseFloat(precio_numerico)).toFixed(2);
        suma_precio.textContent = `${precio_total} €`;

        posicion_icono--;  

        if(posicion_icono >= 0 && posicion_icono < 5) {          
            iconos_comida[posicion_icono].style.opacity = "0";
        };

        console.log("posicion:", posicion_icono);
    };
});

// Añadir la cantidad seleccionada
// ---------------------------------

btn_add_cart.addEventListener("click", () => {
    
    if(cantidad_seleccionada > 0) {
        const precio_pedido_actual = localStorage.getItem('precio_pedido');
        precio_pedido = parseFloat(precio_pedido_actual) + parseFloat(precio_total);
        agregarPlatoAlCarrito(cantidad_seleccionada);
        updateCost();
        addCartElements();
        exception_footer = true;
        cerrarFooter();
        texto_cambiante_footer.style.transition = "opacity 1s";
        icono_cambiante.style.transition = "opacity 1s";
        texto_cambiante_footer.textContent = "Añadido con éxito";
        texto_cambiante_footer.style.color = "#c9e265";
        icono_cambiante.src = "../../media/img/Iconos/correct.png";
        icono_cambiante.style.width = "15px";

        setTimeout(() => {
            texto_cambiante_footer.style.opacity = "0";
            icono_cambiante.style.opacity = "0";
        }, 1500);

        setTimeout(() => {
            texto_cambiante_footer.textContent = "Añadir a mi pedido";
            texto_cambiante_footer.style.color = "white";
            icono_cambiante.src = "../../media/img/Iconos/add.png";
            icono_cambiante.style.width = "10px";
            texto_cambiante_footer.style.opacity = "1";
            icono_cambiante.style.opacity = "1";
        }, 2500);

        setTimeout(() => {
            exception_footer = false;
        }, 100);

    }else if(cantidad_seleccionada <= 0 && exception_footer === false) {

        texto_cambiante_footer.style.transition = "opacity 1s";
        icono_cambiante.style.transition = "opacity 1s";
        texto_cambiante_footer.textContent = "Debes añadir al menos una unidad";
        texto_cambiante_footer.style.color = "#db6363";
        icono_cambiante.src = "../../media/img/Iconos/error.png";
        icono_cambiante.style.width = "15px";

        setTimeout(() => {
            texto_cambiante_footer.style.opacity = "0";
            icono_cambiante.style.opacity = "0";
        }, 1500);

        setTimeout(() => {
            texto_cambiante_footer.textContent = "Añadir a mi pedido";
            texto_cambiante_footer.style.color = "white";
            icono_cambiante.src = "../../media/img/Iconos/add.png";
            icono_cambiante.style.width = "10px";
            texto_cambiante_footer.style.opacity = "1";
            icono_cambiante.style.opacity = "1";
            exception_footer = false;
        }, 2500);
    };
});

// Actualizar el precio del plato (titulo superior)
// ---------------------------------

precio_superior_actual.textContent = precioPlato;

// Redirección al hacer click en el logo de New Horizons.
// ---------------------------------

Titulo_new.addEventListener("click", function() {
    window.location = "../../html/es/pagina_principal.html";
});

// Flecha para volver atrás
// ---------------------------------

goback.addEventListener("click", () => {
    window.history.back();
});

// Ver pedido
// ---------------------------------

btn_ver_pedido.addEventListener("click", () => {
    window.location = "../../html/es/mi_pedido.html";
});

// Actualizar pedido en el Local Storage
// ---------------------------------

function updateCost() {
    localStorage.setItem('precio_pedido', precio_pedido);
};

// Carrito.
// ---------------------------------

cubiertos.addEventListener("mouseover", () => {
    simbolo_cubiertos_top.src = "../../media/img/Iconos/cart_green.png";
});

cubiertos.addEventListener("mouseout", () => {
    simbolo_cubiertos_top.src = "../../media/img/Iconos/cart.png";
});

circulo_cubiertos_bottom.addEventListener("mouseover", () => {

    simbolo_cubiertos_bottom.src = "../../media/img/Iconos/cart_green.png";
    circulo_cubiertos_bottom.style.backgroundColor = "#4d4f52";
   
});

circulo_cubiertos_bottom.addEventListener("mouseout", () => {
        simbolo_cubiertos_bottom.src = "../../media/img/Iconos/cart_black.png";
        circulo_cubiertos_bottom.style.backgroundColor = "white";
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
    
);
