const Fondo = document.getElementById("fondo");
const Menu_hamburguesa = document.getElementById("menu_hamburguesa");
const Menu_hamburguesa_verde = document.getElementById("menu_hamburguesa_verde");
const Filtro_negro = document.getElementById("filtro_oscurecer");
const Cabecera = document.querySelector("header");
const Desplegable = document.getElementById("desplegable");
const Opciones_menu = document.getElementsByClassName("seleccionable"); // Seleccionar los li dentro del ul.
const Lista_opciones = document.getElementById("lista"); // Seleccionar el nav.
const Plantilla_general = document.getElementById("plantilla_general");
const Titulo_new = document.getElementById("titulos");
const menu_superior = document.getElementById("menu_media_query");
const goback = document.getElementById('flecha_volver');

const suma_total = document.getElementById('suma_total_pedido');
const btn_continuar = document.getElementById('boton_continuar');
const txt_btn_continuar = document.getElementById('texto_btn_continuar');
const papelera = document.getElementById("imagen_basura");
const alerta = document.getElementById("alert");

const footer_order = document.getElementById("footer_add_order");
const text_ops = document.getElementById("ops");
const caja_pago = document.getElementById("main_pay_box");

const cruz_cerrar = document.getElementById('icono_cerrar');
const formularioEnvio = document.getElementById('formulario_envio');
const formularioPago = document.getElementById('formulario_pago');
const cajas_envio = document.querySelectorAll('.opcion_envio');
const cajas_pago = document.querySelectorAll('.opcion_pago');
const cajas_precio = document.querySelectorAll('.box_precio');
const cajas_generales = document.querySelectorAll('.box_envio');
const cambiar_seleccion = document.getElementById('cambiar_envio');
const cambiar_metodo_pago = document.getElementById('cambiar_pago');
const imagenes_metodos_pago = document.querySelectorAll('.image_payment');

const todos_desplegables_pago = document.querySelectorAll('.desplegable_pagos');
const desplegable_efectivo = document.getElementById('solo_efectivo');
const desplegable_tarjeta = document.getElementById('solo_tarjeta');
const desplegable_transferencia = document.getElementById('solo_transferencia');
const desplegable_bizum = document.getElementById('solo_bizum');
const codigo_pedido = document.getElementById('num_aleatorio');
const botones_add = document.querySelectorAll('.boton_add');
const mensajes = document.querySelectorAll('.message_info');

let Link_menu = "";
let menu_abierto = false;
let numero_platos_pedido = 0;

let suma_pedido = 0;
let coste_envio = 0;

let direccion = "";
let tipo_envio = "";
let tiempo_envio = "";
let numero_de_pedido = "";

let price_selected = false;
let payment_selected = false;
let discount_added = false;
let cheque_added = false;
let pasarela_pago_abierta = false;


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
        Plantilla_general.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_general.style = "display: flex; opacity: 0";
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
        Plantilla_general.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_general.style = "display: flex; opacity: 0";
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
        Plantilla_general.style = "opacity: 1; transition: opacity 0.5s";
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

// Actualizar carrito
// --------------------------------- 

const carritoDiv = document.getElementById('carrito');

function mostrarPlatosEnCarrito() {

    localStorage.setItem('precio_pedido', 0.00);

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carritoDiv.innerHTML = '';

    carrito.forEach(function(plato, indice) {

        plato.indice = indice;

        numero_platos_pedido++;
        const platoElemento = document.createElement('div');
        const tituloElemento = document.createElement('h2');
        const cantidadElemento = document.createElement('h2');
        const precioElemento = document.createElement('h2');
        const imagenElemento = document.createElement('img');
        const cruzBorrar = document.createElement('span');

        precioElemento.textContent = (parseFloat(plato.precio) * plato.cantidad).toFixed(2) + "€";
        const precioEstePlato = parseFloat(precioElemento.textContent);
        let precioTotal = parseFloat(localStorage.getItem('precio_pedido'));
        const precioFinal = precioTotal + precioEstePlato;
        localStorage.setItem('precio_pedido', precioFinal);
        console.log(precioFinal);

        tituloElemento.textContent = plato.nombre.toLowerCase();
        cantidadElemento.textContent =  plato.cantidad;
        imagenElemento.src = plato.imagen;

        platoElemento.appendChild(cruzBorrar);
        platoElemento.appendChild(imagenElemento);
        platoElemento.appendChild(cantidadElemento);
        platoElemento.appendChild(tituloElemento);
        platoElemento.appendChild(precioElemento);

        cruzBorrar.classList.add('fuente_montserrat');
        cruzBorrar.style.color = "white";
        cruzBorrar.textContent = "X";
        cruzBorrar.style.fontSize = "18px";

        cruzBorrar.addEventListener("mouseover", () => {
            cruzBorrar.style.cursor = "pointer";
            cruzBorrar.style.color = "#c9e265";
        });

        cruzBorrar.addEventListener("mouseout", () => {
            cruzBorrar.style.color = "white";
        });

        cruzBorrar.addEventListener("click", () => {
            const elementoPadre = cruzBorrar.parentNode;
            elementoPadre.remove();
            eliminarPlato(indice);

            numero_platos_pedido--;
            suma_pedido = parseFloat(parseFloat(suma_pedido) - parseFloat(precioElemento.textContent));
            localStorage.setItem('precio_pedido', suma_pedido);
            let elementosActualesCarrito = localStorage.getItem('elementosEnCarrito');
            elementosActualesCarrito -= plato.cantidad;
            localStorage.setItem('elementosEnCarrito', elementosActualesCarrito);
            console.log("Elementos en carrito actualmente:", localStorage.getItem('elementosEnCarrito'));

            updateVisualCost();

            if(numero_platos_pedido === 0) {
                alerta.style.display = "block";
            }else {
                alerta.style.display = "none";
            } 
        });

        tituloElemento.classList.add('fuente_montserrat');
        tituloElemento.style.fontSize = "14px";
        tituloElemento.style.width = "30%";

        precioElemento.classList.add('fuente_montserrat_verde');

        cantidadElemento.classList.add('fuente_montserrat');

        imagenElemento.style.height = "70px";
        imagenElemento.style.width = "100px";
        imagenElemento.style.objectFit = "cover";
        imagenElemento.style.borderRadius = "10px";
        imagenElemento.style.transition = "filter 0.5s";

        platoElemento.style.display = "flex";
        platoElemento.style.alignItems = "center";
        platoElemento.style.justifyContent = "space-between";
        platoElemento.style.marginBottom = "30px";

        carritoDiv.appendChild(platoElemento);
    });

    if(numero_platos_pedido === 0) {
        alerta.style.display = "block";
    }else {
        alerta.style.display = "none";
    } 
};

mostrarPlatosEnCarrito();

/* Actualizar suma total del pedido */

function updateVisualCost() {
    suma_pedido = parseFloat(localStorage.getItem('precio_pedido')).toFixed(2) + "€" || "0.00€";
    suma_total.textContent = suma_pedido;
};

/* Gestión del hover del botón continuar */

btn_continuar.addEventListener('mouseover', () => {
    txt_btn_continuar.style.color = "white";
    btn_continuar.style.borderColor = "white";
});

btn_continuar.addEventListener('mouseout', () => {
    txt_btn_continuar.style.color = "#c9e265";
    btn_continuar.style.borderColor = "#c9e265";
});

updateVisualCost();

/* Vaciar carrito al hacer click en la papelera */

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    suma_pedido = 0;
    numero_platos_pedido = 0;
    localStorage.setItem('elementosEnCarrito', 0);
    console.log("Elementos en carrito actualmente:", localStorage.getItem('elementosEnCarrito'));
    localStorage.setItem('precio_pedido', suma_pedido);
    updateVisualCost();
};

papelera.addEventListener("click", () => {
    vaciarCarrito();
    mostrarPlatosEnCarrito();

    if(numero_platos_pedido === 0) {
        alerta.style.display = "block";
    }else {
        alerta.style.display = "none";
    };   
});

//vaciarCarrito();  ------------------- Activar para vaciar el carrito.


// Confirmar el pedido y continuar
// -------------------------------------

btn_continuar.addEventListener("click", () => {

    if(numero_platos_pedido > 0 && pasarela_pago_abierta === false) {

        footer_order.classList.add("pay_style");
        caja_pago.style.display = "block";

        pasarela_pago_abierta = true;

        const caja_resumen = document.getElementById('extra_charges');
        const costesPedido = document.getElementById('gastos_pedido');
        caja_resumen.style.display = "block";
        costesPedido.innerHTML = "Total pedido ------------------------------------ <span id='costes_totales_pedido' style='color: #c9e265;'></span>";
        const costesPedidoNumero = document.getElementById('costes_totales_pedido');
        costesPedidoNumero.textContent = parseFloat(localStorage.getItem('precio_pedido')).toFixed(2) + " €";

        // Generar número aleatorio para el código de pedido

        numero_de_pedido = crearCodigoUnico(10);
        codigo_pedido.innerHTML = numero_de_pedido;

    }else if (pasarela_pago_abierta === false) {
        text_ops.style.transform = "rotate(10deg)";
        text_ops.style.transform = "scale(1.2)";
        btn_continuar.style.borderColor = "red";

        setTimeout(() => {
            text_ops.style.transform = "scale(1)";
        }, 300);

    }else if (pasarela_pago_abierta === true) {

        // Verificar si hay errores en el formulario antes de continuar con el pago.
        const formulario = document.getElementById('formulario_datos_personales');
        const campos_requeridos = formulario.querySelectorAll('[required]');
        let hayErrores = false;

        campos_requeridos.forEach(function(campo) {
            if (!campo.value.trim()) {
                hayErrores = true;
                campo.style.borderColor = "red";
            }else {
                campo.style.borderColor = "#c9e265";
            };
        });

        // Si no hay errores y se han seleccionado las opciones de envío y de pago, proceder al pago y a la finalización del pedido.
        if(!hayErrores && price_selected === true && payment_selected === true) {

            const elementos_ocultar = document.querySelectorAll('.ocultar_al_continuar');
            const loader = document.getElementById('cargando_orden');
            const fondo_pedido = document.getElementById('footer_add_order');
            let direccion_final = document.getElementById('direccion').value;
            let nombre_final = document.getElementById('nombre').value;
            let correo_final = document.getElementById('correo').value;

            fondo_pedido.style.overflowY = "hidden";
            
    
            for (let i = 0; i < elementos_ocultar.length; i++) {
                elementos_ocultar[i].style.display = "none";
            };
    
            loader.style.display = "flex";
    
            setTimeout(() => {
                const pedido_confirmed = document.getElementById('pedido_confirmado');
                const desc_pedido = document.getElementById('descripcion_pedido');
                const texto_direccion_final = document.getElementById('direccion_confirmada');
                const texto_tiempo_final = document.getElementById('tiempo_confirmado');
                const texto_correo_final = document.getElementById('correo_confirmado');
                const texto_num_pedido = document.getElementById('num_pedido');
                const texto_repartidor = document.getElementById('repartidor_llegara');
                texto_repartidor.innerHTML = "Has elegido <span style='color: #c9e265;'>" + tipo_envio + "</span>. El repartidor llegará a tu domicilio aproximadamente a las:";
                desc_pedido.innerHTML = "Enhorabuena " + nombre_final + ", tu pedido ha sido entregado a New Horizons y ya estamos preparándolo para entregarlo en:"
                texto_direccion_final.textContent = direccion_final;

                fondo_pedido.style.alignContent = "center";
                fondo_pedido.style.overflowY = "scroll";
                
                if(tiempo_envio === "40 - 60 minutos") {
                    const horaEntrega = generarHoraEntrega(60);
                    texto_tiempo_final.textContent = horaEntrega;
                }else if(tiempo_envio === "30 - 40 minutos") {
                    const horaEntrega = generarHoraEntrega(40);
                    texto_tiempo_final.textContent = horaEntrega;
                }else if(tiempo_envio === "15 - 20 minutos") {
                    const horaEntrega = generarHoraEntrega(20);
                    texto_tiempo_final.textContent = horaEntrega;
                };

                texto_num_pedido.innerHTML = "<span style='color: white;'>Pedido: </span>" + "#" + numero_de_pedido;
                texto_correo_final.innerHTML = "Te hemos enviado un correo a <span style='color: #c9e265;'>" + correo_final + "</span> con la factura del pedido. También podrás consultar el estado de tu pedido desde allí.";
                loader.style.display = "none";
                pedido_confirmed.style.display = "flex";
            }, 4000);

            // Botones de fin de pedido
            const btn_volvermenu = document.getElementById('ir_newhorizons');
            const btn_nuevopedido = document.getElementById('ir_pedido');

            btn_volvermenu.addEventListener('click', () => {
                vaciarCarrito();
                window.location = "../../html/es/pagina_principal.html";
            });

            btn_nuevopedido.addEventListener('click', () => {
                vaciarCarrito();
                window.location = "../../html/es/la_carta.html";
            });

        }else if (hayErrores) {
            alert('Por favor, completa los campos requeridos del formulario.');

        }else if (price_selected === false) {

            for (let i = 0; i < cajas_envio.length; i++) {
                cajas_envio[i].classList.add('rojo_error');
            };

            alert('Por favor, elige el tipo de envío.');

        }else if (payment_selected === false) {

            for (let i = 0; i < cajas_pago.length; i++) {
                cajas_pago[i].classList.add('rojo_error');
            };

            alert('Por favor, selecciona un método de pago');
        };
    };
});

function generarHoraEntrega(minutos) {
    const hora = new Date();
    hora.setMinutes(hora.getMinutes() + minutos);
    const horasFinales = hora.getHours().toString().padStart(2, '0');
    const minutosFinales = hora.getMinutes().toString().padStart(2, '0');
    return(`${horasFinales}:${minutosFinales}`);
};

function crearCodigoUnico(length) {

    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        code += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    };
    return code;
};

// Seleccionar tipo de envío y añadir costes adicionales
// -------------------------------------

for (let i = 0; i < cajas_envio.length; i++) {
    cajas_envio[i].addEventListener('mouseover', () => {
        cajas_envio[i].style.cursor = "pointer";

        if(price_selected === false) {
            cajas_envio[i].style.borderColor = "#c9e265";
            cajas_generales[i].style.transform = "scale(0.99)";
        };
        
    });

    cajas_envio[i].addEventListener('mouseout', () => {

        if(price_selected === false) {
            cajas_envio[i].style.borderColor = "white";
            cajas_generales[i].style.transform = "scale(1)";
        };
        
    });

    cajas_envio[i].addEventListener('click', () => {

        for (let i = 0; i < cajas_envio.length; i++) {
            cajas_envio[i].classList.remove('rojo_error'); 
        };

        const gastosEnvioText = document.getElementById('gastos_envio');
        gastosEnvioText.style.display = "block";

        if(i === 0) {
            gastosEnvioText.innerHTML = "Envío económico ------------------------------- <span style='color: #c9e265;'>(+ 1.50 €)</span>";
            let pedido_actual = localStorage.getItem('precio_pedido');
            const nuevoPedido = parseFloat(pedido_actual) + 1.50;
            coste_envio = 1.50;
            tipo_envio = "envío económico";
            tiempo_envio = "40 - 60 minutos";
            localStorage.setItem('precio_pedido', nuevoPedido);
            updateVisualCost();
        };

        if(i === 1) {
            gastosEnvioText.innerHTML = "Envío estándar ------------------------------- <span style='color: #c9e265;'>(+ 2.50 €)</span>";
            let pedido_actual = localStorage.getItem('precio_pedido');
            const nuevoPedido = parseFloat(pedido_actual) + 2.50;
            coste_envio = 2.50;
            tipo_envio = "envío estándar";
            tiempo_envio = "30 - 40 minutos";
            localStorage.setItem('precio_pedido', nuevoPedido);
            updateVisualCost();
        };

        if(i === 2) {
            gastosEnvioText.innerHTML = "Envío premium ------------------------------- <span style='color: #c9e265;'>(+ 4.00 €)</span>";
            let pedido_actual = localStorage.getItem('precio_pedido');
            const nuevoPedido = parseFloat(pedido_actual) + 4.00;
            coste_envio = 4.00;
            tipo_envio = "envío premium";
            tiempo_envio = "15 - 20 minutos";
            localStorage.setItem('precio_pedido', nuevoPedido);
            updateVisualCost();
        };

        price_selected = true;

        for (let e = 0; e < cajas_generales.length; e++) {
            cajas_generales[e].style.display = "none";
        };

        cajas_generales[i].style.display = "flex";
        formularioEnvio.style.gap = "0px";
        cambiar_seleccion.style.display = "block";
    });
};

// Cambiar el tipo de envío (te has equivocado al seleccionar)
// -------------------------------------

cambiar_seleccion.addEventListener('click', () => {

    price_selected = false;

    const gastosEnvioText = document.getElementById('gastos_envio');
    gastosEnvioText.style.display = "none";

    let precioErroneo = localStorage.getItem('precio_pedido');
    const precioActualizado = parseFloat(precioErroneo) - coste_envio;
    localStorage.setItem('precio_pedido', precioActualizado);
    updateVisualCost();

    for (let i = 0; i < cajas_generales.length; i++) {
        cajas_generales[i].style.display = "flex";
        cajas_envio[i].style.borderColor = "white";
        cajas_generales[i].style.transform = "scale(1)";
    };

    formularioEnvio.style.gap = "40px";
    cambiar_seleccion.style.display = "none";
});

// Seleccionar método de pago
// -------------------------------------

for (let i = 0; i < cajas_pago.length; i++) {
    cajas_pago[i].addEventListener('mouseover', () => {
        cajas_pago[i].style.cursor = "pointer";

        if(payment_selected === false) {
            cajas_pago[i].style.borderColor = "#c9e265";
            cajas_pago[i].style.transform = "scale(0.99)";
        };
        
    });

    cajas_pago[i].addEventListener('mouseout', () => {

        if(payment_selected === false) {
            cajas_pago[i].style.borderColor = "white";
            cajas_pago[i].style.transform = "scale(1)";
        };
        
    });

    cajas_pago[i].addEventListener('click', () => {


        payment_selected = true;

        for (let i = 0; i < cajas_pago.length; i++) {
            cajas_pago[i].classList.remove('rojo_error');
        };

        cambiar_metodo_pago.style.display = "block";
        formularioPago.style.gap = "0px";

        payment_selected = true;

        for (let e = 0; e < cajas_pago.length; e++) {
            cajas_pago[e].style.display = "none";
        };

        cajas_pago[i].style.display = "flex";
        cajas_pago[i].style.width = "90%";
        cajas_pago[i].style.height = "80px";
        cajas_pago[i].style.display = "flex";
        cajas_pago[i].style.alignItems = "center";
        cajas_pago[i].style.justifyContent = "center";
        cajas_pago[i].style.padding = "0px";
        cajas_pago[i].style.gap = "50px";
        cajas_pago[i].style.transition = "none";
        
        for (let i = 0; i < imagenes_metodos_pago.length; i++) {
            imagenes_metodos_pago[i].style.width = "auto";
            imagenes_metodos_pago[i].style.height = "40px";
        };

        if(i === 0) {
            desplegable_efectivo.style.display = "block";
        };

        if(i === 1) {
            desplegable_tarjeta.style.display = "block";
        };

        if(i === 2) {
            desplegable_transferencia.style.display = "block";
        };

        if(i === 3) {
            desplegable_bizum.style.display = "block";
        };
    });
};

// Cambiar el método de pago (te has equivocado al seleccionar)
// -------------------------------------

cambiar_metodo_pago.addEventListener('click', () => {

    payment_selected = false;
    
    for (let i = 0; i < cajas_pago.length; i++) {
        cajas_pago[i].style.display = "block";
        cajas_pago[i].style.width = "40%";
        cajas_pago[i].style.height = "auto";
        cajas_pago[i].style.padding = "20px";
        cajas_pago[i].style.borderColor = "white";
        cajas_pago[i].style.transform = "scale(1)";
    };

    formularioPago.style.gap = "40px";
    cambiar_metodo_pago.style.display = "none";
    
    for (let i = 0; i < todos_desplegables_pago.length; i++) {
        todos_desplegables_pago[i].style.display = "none";
    };
});

// Añadir códigos promocionales y de descuento
// -------------------------------------

for (let i = 0; i < botones_add.length; i++) {

    const txt_botones_add = document.querySelectorAll('.texto_boton_add');

    botones_add[i].addEventListener('mouseover', () => {
        txt_botones_add[i].style.color = "white";
        botones_add[i].style.borderColor = "white";
    });

    botones_add[i].addEventListener('mouseout', () => {
        txt_botones_add[i].style.color = "#c9e265";
        botones_add[i].style.borderColor = "#c9e265";
    });
};

botones_add[0].addEventListener('click', () => {
    const discount_code = document.getElementById('codigo_descuento');

    if(discount_code.value === "NHPROMO2024" && discount_added === false) {

        discount_added = true;

        const codigoDescuentoText = document.getElementById('cupon_descuento');
        codigoDescuentoText.style.display = "block";
        codigoDescuentoText.innerHTML = "Código desc. 'NHPROMO2024' ---------- <span style='color: #c9e265;'>(- 3.00 €)</span>";

        let precio_actual = parseFloat(localStorage.getItem('precio_pedido'));
        precio_actual -= 3.00;
        localStorage.setItem('precio_pedido', precio_actual);
        updateVisualCost();

        mensajes[0].textContent = "Código descuento aplicado correctamente";
        discount_code.value = "";
        mensajes[0].style.color = "#c9e265";
        mensajes[0].style.transition = "opacity 0.5s";
        mensajes[0].style.display = "block";
        mensajes[0].style.opacity = "1";

        setTimeout(() => {
            mensajes[0].style.opacity = "0";
        }, 4000);

        setTimeout(() => {
            mensajes[0].style.display = "none";
        }, 4500);

    }else if(discount_code.value != "WELCOME") {

        mensajes[0].textContent = "El código descuento introducido no existe";
        mensajes[0].style.color = "red";
        mensajes[0].style.transition = "opacity 0.5s";
        mensajes[0].style.display = "block";
        mensajes[0].style.opacity = "1";

        setTimeout(() => {
            mensajes[0].style.opacity = "0";
        }, 4000);

        setTimeout(() => {
            mensajes[0].style.display = "none";
        }, 4500);

    }else if(discount_code.value === "WELCOME" && discount_added === true) {

        mensajes[0].textContent = "El código descuento ya ha sido utilizado o ha expirado";
        mensajes[0].style.color = "red";
        mensajes[0].style.transition = "opacity 0.5s";
        mensajes[0].style.display = "block";
        mensajes[0].style.opacity = "1";

        setTimeout(() => {
            mensajes[0].style.opacity = "0";
        }, 4000);

        setTimeout(() => {
            mensajes[0].style.display = "none";
        }, 4500);
    };
});

botones_add[1].addEventListener('click', () => {
    const cheque_regalo = document.getElementById('cheque_regalo');

    if(cheque_regalo.value === "Zh729qDM1" && cheque_added === false) {

        cheque_added = true;

        const chequeRegaloText = document.getElementById('cheques_regalo');
        chequeRegaloText.style.display = "block";
        chequeRegaloText.innerHTML = "Cheque regalo 'Zh729qDM1' ----------------- <span style='color: #c9e265;'>(- 5.50 €)</span>";
        let precio_actual = parseFloat(localStorage.getItem('precio_pedido'));
        precio_actual -= 5.50;
        localStorage.setItem('precio_pedido', precio_actual);
        updateVisualCost();

        mensajes[1].textContent = "Cheque regalo aplicado correctamente";
        cheque_regalo.value = "";
        mensajes[1].style.color = "#c9e265";
        mensajes[1].style.transition = "opacity 0.5s";
        mensajes[1].style.display = "block";
        mensajes[1].style.opacity = "1";

        setTimeout(() => {
            mensajes[1].style.opacity = "0";
        }, 4000);

        setTimeout(() => {
            mensajes[1].style.display = "none";
        }, 4500);

    }else if(cheque_regalo.value != "Zh729qDM1") {

        mensajes[1].textContent = "El cheque regalo introducido no existe";
        mensajes[1].style.color = "red";
        mensajes[1].style.transition = "opacity 0.5s";
        mensajes[1].style.display = "block";
        mensajes[1].style.opacity = "1";

        setTimeout(() => {
            mensajes[1].style.opacity = "0";
        }, 4000);

        setTimeout(() => {
            mensajes[1].style.display = "none";
        }, 4500);

    }else if(cheque_regalo.value === "Zh729qDM1" && cheque_added === true) {

        mensajes[1].textContent = "El código descuento ya ha sido utilizado o ha expirado";
        mensajes[1].style.color = "red";
        mensajes[1].style.transition = "opacity 0.5s";
        mensajes[1].style.display = "block";
        mensajes[1].style.opacity = "1";

        setTimeout(() => {
            mensajes[1].style.opacity = "0";
        }, 4000);

        setTimeout(() => {
            mensajes[1].style.display = "none";
        }, 4500);
    };
});

// Cerrar menu de pago
// -------------------------------------

cruz_cerrar.addEventListener('mouseover', () => {
    cruz_cerrar.src = "../../media/img/Iconos/cerrar_verde.png";
});

cruz_cerrar.addEventListener('mouseout', () => {
    cruz_cerrar.src = "../../media/img/Iconos/cerrar.png";
});

cruz_cerrar.addEventListener('click', () => {
    const caja_resumen = document.getElementById('extra_charges');
    caja_resumen.style.display = "none";

    pasarela_pago_abierta = false;
    numero_platos_pedido = 0;

    footer_order.classList.remove("pay_style");
    footer_order.style.scrollBehavior = "none";
    caja_pago.style.display = "none";

    //Cerrar tipo de envío
    price_selected = false;
    const gastosEnvioText = document.getElementById('gastos_envio');
    gastosEnvioText.style.display = "none";

    for (let i = 0; i < cajas_generales.length; i++) {
        cajas_generales[i].style.display = "flex";
        cajas_envio[i].style.borderColor = "white";
        cajas_generales[i].style.transform = "scale(1)";
    };

    formularioEnvio.style.gap = "40px";
    cambiar_seleccion.style.display = "none";

    //Cerrar métodos de pago
    payment_selected = false;
    
    for (let i = 0; i < cajas_pago.length; i++) {
        cajas_pago[i].style.display = "block";
        cajas_pago[i].style.width = "40%";
        cajas_pago[i].style.height = "auto";
        cajas_pago[i].style.padding = "20px";
        cajas_pago[i].style.borderColor = "white";
        cajas_pago[i].style.transform = "scale(1)";
    };

    formularioPago.style.gap = "40px";
    cambiar_metodo_pago.style.display = "none";
    
    for (let i = 0; i < todos_desplegables_pago.length; i++) {
        todos_desplegables_pago[i].style.display = "none";
    };

    //Cerrar y vaciar cheques y descuentos
    discount_added = false;
    cheque_added = false;
    const discount_code = document.getElementById('codigo_descuento');
    const cheque_regalo = document.getElementById('cheque_regalo');
    discount_code.value = "";
    cheque_regalo.value = "";
    const codigoDescuentoText = document.getElementById('cupon_descuento');
    codigoDescuentoText.style.display = "none";
    const chequeRegaloText = document.getElementById('cheques_regalo');
    chequeRegaloText.style.display = "none";


    //Actualizar carrito sin los costes extra
    mostrarPlatosEnCarrito();
    updateVisualCost();

});
