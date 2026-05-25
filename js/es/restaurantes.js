const Fondo = document.getElementById("fondo");
const Menu_hamburguesa = document.getElementById("menu_hamburguesa");
const Menu_hamburguesa_verde = document.getElementById("menu_hamburguesa_verde");
const Filtro_negro = document.getElementById("filtro_oscurecer");
const Cabecera = document.querySelector("header");
const Desplegable = document.getElementById("desplegable");
const Opciones_menu = document.getElementsByClassName("seleccionable"); // Seleccionar los li dentro del ul.
const Lista_opciones = document.getElementById("lista"); // Seleccionar el nav.
const Plantilla_restaurantes = document.getElementById("plantilla_restaurantes");
const Titulo_new = document.getElementById("titulos");
const Cajas = document.getElementsByClassName("caja");
const menu_superior = document.getElementById("menu_media_query");

const botones_reservar = document.querySelectorAll('.boton');
const mesas_reservar = document.querySelectorAll('.mesa');
const mesas_reservar_conjunto = document.querySelectorAll('.mesa_conjunto');
const mesas_imagenes = document.querySelectorAll('.mesa_icon');
const nombre_mesas_reservar = document.querySelectorAll('.nombre_mesa');
const texto_contador_servicios = document.querySelectorAll('.info_reserva');
const flecha_atras = document.getElementById('flecha_volver');
const formulario = document.getElementById('formulario_reserva');
const confirmed_reservation = document.getElementById('reserva_confirmada');
const boton_volver_nh = document.getElementById('back_new');

let Link_menu = "";
let menu_abierto = false;
let mesa_seleccionada = null;
let mesa1_seleccionada = false;
let mesa2_seleccionada = false;
let mesa3_seleccionada = false;
let mesa4_seleccionada = false;
let mesa5_seleccionada = false;
let mesa6_seleccionada = false;
let restaurante_elegido = "";
let comensales_seleccionados = "";
let fase = 0;

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
        Plantilla_restaurantes.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_restaurantes.style = "display: flex; opacity: 0";
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
        Plantilla_restaurantes.style = "display: none; opacity: 0";
        Cabecera.style.position = "fixed";
        Cabecera.style.maxWidth = "1500px";
        setTimeout(entrar, 100);
        menu_abierto = true;

    }else {

        Fondo.style = "justify-content: space-between";
        Filtro_negro.style = "opacity: 0; transition: opacity 0.5s";
        Desplegable.style = "opacity: 0; transition: opacity 1s";
        Plantilla_restaurantes.style = "display: flex; opacity: 0";
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
        Plantilla_restaurantes.style = "opacity: 1; transition: opacity 0.5s";
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

// Reservar una mesa.
// ---------------------------------

// Pulsar botones de reservar.

const botones_llegar = document.querySelectorAll('.como_llegar');
const horarios_tlf = document.querySelectorAll('.horario_telefono');
const barcelona_box = document.getElementById('caja_barcelona');
const roma_box = document.getElementById('caja_roma');
const black_filter = document.querySelectorAll('.capa_negra');
const calendario = document.getElementById('icono_calendario');
const ubicacion_restaurante = document.querySelectorAll('.texto_principal_restaurante');
const select_asientos1 = document.getElementById('selector_asientos1');
const reservar_box = document.querySelectorAll('.textos_info');
const info_reservados = document.querySelectorAll('.info_reserva');
const footer_reserva = document.getElementById('footer_info_reserva');
const footer_reserva2 = document.getElementById('footer_info_reserva2');
const recinto_mesas = document.getElementById('recinto1');
const datos_ticket = document.getElementById("datos_reserva");

const viajar = () => {
    window.location = "../../html/es/restaurantes.html";
    fase = 0;
    flecha_atras.removeEventListener('click', volver);
    flecha_atras.removeEventListener('click', viajar);
}; 

const volver = () => {
    fase = 1;

    comensales_seleccionados = "";

    for (let i = 0; i < mesas_reservar_conjunto.length; i++) {
        mesas_reservar_conjunto[i].style.display = "flex";
        mesas_reservar_conjunto[i].style.width = "auto";
        mesas_reservar_conjunto[i].style.justifyContent = "";
        mesas_reservar_conjunto[i].style.marginBottom = "170px";
    };

    mesa1_seleccionada = false;
    mesa2_seleccionada = false;
    mesa3_seleccionada = false;
    mesa4_seleccionada = false;
    mesa5_seleccionada = false;
    mesa6_seleccionada = false;
    mesa_seleccionada = null;
    formulario.style.display = "none";

    const idioma_actual = localStorage.getItem('idioma_seleccionado');
    if(idioma_actual === 'es') {
        info_reservados[0].textContent = "Seleccionar comensales";
    }else if(idioma_actual === 'en') {
        info_reservados[0].textContent = "Select diners";
    }else if(idioma_actual === 'it') {
        info_reservados[0].textContent = "Seleziona i commensali";
    };
    
    barcelona_box.style.overflowY = "scroll";
    recinto_mesas.classList.remove('modificador_recinto');
    black_filter[0].classList.remove('reservar_modo');
    black_filter[0].style.backgroundColor = "#0000008f";
    black_filter[0].style.opacity = "1";

    flecha_atras.removeEventListener('click', volver);
    flecha_atras.addEventListener('click', viajar);

};

for (let i = 0; i < botones_reservar.length; i++) {

    botones_reservar[i].addEventListener('click', () => {

        function fijarBotones() {
            if(this.window.innerWidth >= 1500) {
                for (let i = 0; i < botones_reservar.length; i++) {
                    botones_reservar[i].classList.add('fijar_botones');
                };
            };
    
            if(this.window.innerWidth < 1500) {
                botones_reservar[i].classList.remove('fijar_botones');
            };
        };

        fijarBotones();

        window.addEventListener("resize", () => {
            fijarBotones();
        });

        if(fase === 0) {
            flecha_atras.style.display = "block";
            roma_box.style.display = "none";
            barcelona_box.classList.add('reservar_modo');
            barcelona_box.style.height = "100vh";
            barcelona_box.style.marginTop = "50px";
            black_filter[0].classList.add('reservar_modo');
            black_filter[0].style.height = "3000px";
            botones_llegar[0].style.display = "none";
            calendario.style.display = "none";
            horarios_tlf[0].style.display = "none";
            botones_reservar[0].style.right = "0";
            botones_reservar[0].style.margin = "40px 46px 0px 230px";

            const idioma_actual = localStorage.getItem('idioma_seleccionado');
            if(idioma_actual === 'es') {
                botones_reservar[0].textContent = "CONTINUAR";
            }else if(idioma_actual === 'en') {
                botones_reservar[0].textContent = "CONTINUE";
            }else if(idioma_actual === 'it') {
                botones_reservar[0].textContent = "CONTINUA";
            };

            botones_reservar[0].style.position = "fixed";
            ubicacion_restaurante[0].style.display = "none";
            select_asientos1.style.display = "flex";
            reservar_box[0].style.marginTop = "-50px";
            info_reservados[0].style.display = "block";
            fase = 1;

            if(i === 0) {
                restaurante_elegido = "New Horizons Barcelona";
                footer_reserva.style.display = "block";
                footer_reserva.style.bottom = "0";
                footer_reserva.style.marginBottom = "0";
                footer_reserva.style.paddingBottom = "70px";
            };
        
            if(i === 1) {
                restaurante_elegido = "New Horizons Roma";
                footer_reserva2.style.display = "block";
                footer_reserva2.style.bottom = "0";
                footer_reserva2.style.marginBottom = "0";
                footer_reserva2.style.paddingBottom = "70px";
                barcelona_box.style.backgroundImage = "url(../../media/img/Imagenes/Restaurante/restaurante.jpg)";
            };  

            // Volver atrás
            flecha_atras.removeEventListener('click', volver);
            flecha_atras.addEventListener('click', viajar);

        }else if(fase === 1 && mesa_seleccionada != null) {

            for (let i = 0; i < mesas_reservar_conjunto.length; i++) {
                mesas_reservar_conjunto[i].style.display = "none";
            };

            mesas_reservar_conjunto[mesa_seleccionada].style.display = "flex";
            mesas_reservar_conjunto[mesa_seleccionada].style.marginBottom = "50px";
            mesas_reservar_conjunto[mesa_seleccionada].style.width = "100%";
            mesas_reservar_conjunto[mesa_seleccionada].style.justifyContent= "center";

            mesas_imagenes[mesa_seleccionada].style.filter = "none";
            recinto_mesas.classList.add('modificador_recinto');

            const idioma_actual = localStorage.getItem('idioma_seleccionado');
            if(idioma_actual === 'es') {
                info_reservados[0].textContent = "Seleccionar fecha y hora";
            }else if(idioma_actual === 'en') {
                info_reservados[0].textContent = "Select date and time";
            }else if(idioma_actual === 'it') {
                info_reservados[0].textContent = "Seleziona data e ora";
            };
            
            formulario.style.display = "flex";
            black_filter[0].style.backgroundColor = "black";
            black_filter[0].style.opacity = "80%";
            barcelona_box.scrollTo({
                top: 0,
                behavior:  "instant"
            });
            barcelona_box.style.overflowY = "hidden";

            // Volver atrás
            flecha_atras.removeEventListener('click', viajar);
            flecha_atras.addEventListener('click', volver);

            fase = 2;
            
        }else if(fase === 1 && mesa_seleccionada === null) {
            const idioma_actual = localStorage.getItem('idioma_seleccionado');
            if(idioma_actual === 'es') {
                alert("Selecciona el número de comensales");
            }else if(idioma_actual === 'en') {
                alert("Select the number of diners");
            }else if(idioma_actual === 'it') {
                alert("Seleziona il numero di commensali");
            };

        }else if(fase === 2) {

            // Verificar si hay errores en el formulario antes de continuar con el pago.
            const formulario = document.getElementById('formulario_reserva');
            const campos_requeridos = formulario.querySelectorAll('[required]');
            const selectElement = document.getElementById('hora_contacto');
            let hayErrores = false;

            campos_requeridos.forEach(function(campo) {
                if (!campo.value.trim()) {
                    hayErrores = true;
                    campo.style.borderColor = "red";
                }else {
                    campo.style.borderColor = "white";
                };
            });

            if (selectElement.value === "Selecciona una hora" || selectElement.value === "Select a time" || selectElement.value === "Seleziona un orario") {
                hayErrores = true;
                selectElement.style.borderColor = "red";
            }else {
                selectElement.style.borderColor = "white";
            };

            if(!hayErrores) {

                const loader = document.getElementById('realizando_reserva');
                const elementos_ocultar = document.querySelectorAll('.ocultar_al_continuar');
                const data_conjunto = document.querySelectorAll('.complete_data');

                barcelona_box.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Comportamiento suave
                });

                select_asientos1.style.overflow = "visible";

                // Guardar datos del formulario

                const nombreCliente = document.getElementById('nombre_contacto').value;
                const correoCliente = document.getElementById('correo_electronico').value;
                // restaurante_elegido. (barcelona/roma).
                const fechaElegida = document.getElementById('fecha').value;
                const horaElegida = document.getElementById('hora_contacto').value;

                boton_volver_nh.addEventListener("click", () => {
                    window.location = "../../html/es/pagina_principal.html";
                });

                for (let i = 0; i < elementos_ocultar.length; i++) {
                    elementos_ocultar[i].style.display = "none";
                };

                mesas_reservar_conjunto[mesa_seleccionada].style.display = "none";
                recinto_mesas.style.height = "100%";
                recinto_mesas.style.marginTop = "0";
                recinto_mesas.style.flexDirection = "row";

                const idioma_actual = localStorage.getItem('idioma_seleccionado');
                if(idioma_actual === 'es') {
                    info_reservados[0].textContent = "Por favor, espere mientras confirmamos su reserva";
                    if(mesa_seleccionada === 0) {
                        comensales_seleccionados = "1 comensal";
                    }else if(mesa_seleccionada === 1) {
                        comensales_seleccionados = "2 comensales";
                    }else if(mesa_seleccionada === 2) {
                        comensales_seleccionados = "3 comensales";
                    }else if(mesa_seleccionada === 3) {
                        comensales_seleccionados = "4 comensales";
                    }else if(mesa_seleccionada === 4) {
                        comensales_seleccionados = "5 comensales";
                    }else if(mesa_seleccionada === 5) {
                        comensales_seleccionados = "6+ comensales";
                    };
                    data_conjunto[0].innerHTML = `Nombre: <br><span class="bigger_text">${nombreCliente.toUpperCase()}</span>`;
                    data_conjunto[1].innerHTML = `Correo electrónico: <br><span class="bigger_text">${correoCliente}</span>`;
                    data_conjunto[2].innerHTML = `Restaurante: <br><span class="bigger_text">${restaurante_elegido.toUpperCase()}</span>`;
                    data_conjunto[3].innerHTML = `Número de comensales: <br><span class="bigger_text">${comensales_seleccionados.toUpperCase()}</span>`;
                    data_conjunto[4].innerHTML = `Fecha: <br><span class="bigger_text">${fechaElegida.toUpperCase()}</span>`;
                    data_conjunto[5].innerHTML = `Hora: <br><span class="bigger_text">${horaElegida.toUpperCase()}</span>`;
                }else if(idioma_actual === 'en') {
                    info_reservados[0].textContent = "Please wait while we confirm your reservation";
                    if(mesa_seleccionada === 0) {
                        comensales_seleccionados = "1 diner";
                    }else if(mesa_seleccionada === 1) {
                        comensales_seleccionados = "2 diners";
                    }else if(mesa_seleccionada === 2) {
                        comensales_seleccionados = "3 diners";
                    }else if(mesa_seleccionada === 3) {
                        comensales_seleccionados = "4 diners";
                    }else if(mesa_seleccionada === 4) {
                        comensales_seleccionados = "5 diners";
                    }else if(mesa_seleccionada === 5) {
                        comensales_seleccionados = "6+ diners";
                    };
                    data_conjunto[0].innerHTML = `Name: <br><span class="bigger_text">${nombreCliente.toUpperCase()}</span>`;
                    data_conjunto[1].innerHTML = `Email: <br><span class="bigger_text">${correoCliente}</span>`;
                    data_conjunto[2].innerHTML = `Restaurant: <br><span class="bigger_text">${restaurante_elegido.toUpperCase()}</span>`;
                    data_conjunto[3].innerHTML = `Number of diners: <br><span class="bigger_text">${comensales_seleccionados.toUpperCase()}</span>`;
                    data_conjunto[4].innerHTML = `Date: <br><span class="bigger_text">${fechaElegida.toUpperCase()}</span>`;
                    data_conjunto[5].innerHTML = `Time: <br><span class="bigger_text">${horaElegida.toUpperCase()}</span>`;
                }else if(idioma_actual === 'it') {
                    info_reservados[0].textContent = "Ti preghiamo di attendere mentre confermiamo la tua prenotazione";
                    if(mesa_seleccionada === 0) {
                        comensales_seleccionados = "1 cena";
                    }else if(mesa_seleccionada === 1) {
                        comensales_seleccionados = "2 commensali";
                    }else if(mesa_seleccionada === 2) {
                        comensales_seleccionados = "3 commensali";
                    }else if(mesa_seleccionada === 3) {
                        comensales_seleccionados = "4 commensali";
                    }else if(mesa_seleccionada === 4) {
                        comensales_seleccionados = "5 commensali";
                    }else if(mesa_seleccionada === 5) {
                        comensales_seleccionados = "6+ commensali";
                    };
                    data_conjunto[0].innerHTML = `Nome: <br><span class="bigger_text">${nombreCliente.toUpperCase()}</span>`;
                    data_conjunto[1].innerHTML = `E-mail: <br><span class="bigger_text">${correoCliente}</span>`;
                    data_conjunto[2].innerHTML = `Ristorante: <br><span class="bigger_text">${restaurante_elegido.toUpperCase()}</span>`;
                    data_conjunto[3].innerHTML = `Numero di commensali: <br><span class="bigger_text">${comensales_seleccionados.toUpperCase()}</span>`;
                    data_conjunto[4].innerHTML = `Data: <br><span class="bigger_text">${fechaElegida.toUpperCase()}</span>`;
                    data_conjunto[5].innerHTML = `Ora: <br><span class="bigger_text">${horaElegida.toUpperCase()}</span>`;
                };
        
                loader.style.display = "flex";

                setTimeout(() => {
                    const idioma_actual = localStorage.getItem('idioma_seleccionado');
                    if(idioma_actual === 'es') {
                        info_reservados[0].textContent = "Reserva confirmada";
                    }else if(idioma_actual === 'en') {
                        info_reservados[0].textContent = "Confirmed reservation";
                    }else if(idioma_actual === 'it') {
                        info_reservados[0].textContent = "Prenotazione confermata";
                    };
                    loader.style.display = "none";
                    confirmed_reservation.style.display = "flex";
                    confirmed_reservation.style.marginTop = "50px";
                    recinto_mesas.style.position = "relative";
                    footer_reserva.style.display = "none";
                    footer_reserva2.style.display = "none";
                }, 4000);

            }else if(hayErrores) {
                const idioma_actual = localStorage.getItem('idioma_seleccionado');
                if(idioma_actual === 'es') {
                    alert('Por favor, completa los campos requeridos del formulario.');
                }else if(idioma_actual === 'en') {
                    alert("Please complete the required fields of the form.");
                }else if(idioma_actual === 'it') {
                    alert("Si prega di compilare i campi obbligatori del modulo.");
                };
            };
        };
        
    }); 
};

// Seleccionar mesa.

for (let i = 0; i < mesas_reservar.length; i++) {

    mesas_reservar[i].addEventListener('click', () => {
        

        if(i === 0 && fase === 1) {
            if(mesa1_seleccionada === false) {

                mesa1_seleccionada = true;
                mesa2_seleccionada = false;
                mesa3_seleccionada = false;
                mesa4_seleccionada = false;
                mesa5_seleccionada = false;
                mesa6_seleccionada = false;
                mesa_seleccionada = 0;
                mesas_imagenes[0].style.filter = "hue-rotate(35deg) brightness(1.2)";
                restaurarColorMesas();

            }else {
                mesa1_seleccionada = false;
                mesas_imagenes[0].style.filter = "none";
                mesa_seleccionada = null;
                restaurarColorMesas();
            };
        };

        if(i === 1 && fase === 1) {
            if(mesa2_seleccionada === false) {

                mesa1_seleccionada = false;
                mesa2_seleccionada = true;
                mesa3_seleccionada = false;
                mesa4_seleccionada = false;
                mesa5_seleccionada = false;
                mesa6_seleccionada = false;
                mesa_seleccionada = 1;
                mesas_imagenes[1].style.filter = "hue-rotate(35deg) brightness(1.2)";
                restaurarColorMesas();

            }else {
                mesa2_seleccionada = false;
                mesas_imagenes[1].style.filter = "none";
                mesa_seleccionada = null;
                restaurarColorMesas();
            };
        };

        if(i === 2 && fase === 1) {
            if(mesa3_seleccionada === false) {

                mesa1_seleccionada = false;
                mesa2_seleccionada = false;
                mesa3_seleccionada = true;
                mesa4_seleccionada = false;
                mesa5_seleccionada = false;
                mesa6_seleccionada = false;
                mesa_seleccionada = 2;
                mesas_imagenes[2].style.filter = "hue-rotate(35deg) brightness(1.2)";
                restaurarColorMesas();

            }else {
                mesa3_seleccionada = false;
                mesas_imagenes[2].style.filter = "none";
                mesa_seleccionada = null;
                restaurarColorMesas();
            };
        };

        if(i === 3 && fase === 1) {
            if(mesa4_seleccionada === false) {

                mesa1_seleccionada = false;
                mesa2_seleccionada = false;
                mesa3_seleccionada = false;
                mesa4_seleccionada = true;
                mesa5_seleccionada = false;
                mesa6_seleccionada = false;
                mesa_seleccionada = 3;
                mesas_imagenes[3].style.filter = "hue-rotate(35deg) brightness(1.2)";
                restaurarColorMesas();

            }else {
                mesa4_seleccionada = false;
                mesas_imagenes[3].style.filter = "none";
                mesa_seleccionada = null;
                restaurarColorMesas();
            };
        };

        if(i === 4 && fase === 1) {
            if(mesa5_seleccionada === false) {

                mesa1_seleccionada = false;
                mesa2_seleccionada = false;
                mesa3_seleccionada = false;
                mesa4_seleccionada = false;
                mesa5_seleccionada = true;
                mesa6_seleccionada = false;
                mesa_seleccionada = 4;
                mesas_imagenes[4].style.filter = "hue-rotate(35deg) brightness(1.2)";
                restaurarColorMesas();

            }else {
                mesa5_seleccionada = false;
                mesas_imagenes[4].style.filter = "none";
                mesa_seleccionada = null;
                restaurarColorMesas();
            };
        };

        if(i === 5 && fase === 1) {
            if(mesa6_seleccionada === false) {

                mesa1_seleccionada = false;
                mesa2_seleccionada = false;
                mesa3_seleccionada = false;
                mesa4_seleccionada = false;
                mesa5_seleccionada = false;
                mesa6_seleccionada = true;
                mesa_seleccionada = 5;
                mesas_imagenes[5].style.filter = "hue-rotate(35deg) brightness(1.2)";
                restaurarColorMesas();

            }else {
                mesa6_seleccionada = false;
                mesas_imagenes[5].style.filter = "none";
                mesa_seleccionada = null;
                restaurarColorMesas();
            };
        };

        function restaurarColorMesas() {

            if(mesa1_seleccionada === false) {
                mesas_imagenes[0].style.filter = "none";
            };

            if(mesa2_seleccionada === false) {
                mesas_imagenes[1].style.filter = "none";
            };

            if(mesa3_seleccionada === false) {
                mesas_imagenes[2].style.filter = "none";
            };

            if(mesa4_seleccionada === false) {
                mesas_imagenes[3].style.filter = "none";
            };

            if(mesa5_seleccionada === false) {
                mesas_imagenes[4].style.filter = "none";
            };

            if(mesa6_seleccionada === false) {
                mesas_imagenes[5].style.filter = "none";
            };
        }

        
    });
};





