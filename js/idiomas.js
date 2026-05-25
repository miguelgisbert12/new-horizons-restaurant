
let imagenurl = '';
let nombreplato = '';

document.addEventListener('DOMContentLoaded', function() {

    let idioma_seleccionado = '';

    if(localStorage.getItem('elementosEnCarrito') === null) {
        localStorage.setItem('elementosEnCarrito', 0);
        vaciarCarrito();
    };

    console.log("Elementos en carrito actualmente:", localStorage.getItem('elementosEnCarrito'));
    
    const urlParams = new URLSearchParams(window.location.search);
    const dish_name = urlParams.get('dish_name');
    console.log("Código del plato:", dish_name);

    const platos_elegir = document.querySelectorAll('.plato_seleccionable');
    const banderas = document.querySelectorAll('.bandera');
    const mapobject = document.getElementById('mapa');
    const nameobject = document.getElementById('nombre');
    const mailobject = document.getElementById('email');
    const asuntobject = document.getElementById('asunto');
    const mensajeobject = document.getElementById('mensaje');
    const enviarobject = document.getElementById('enviar');
    const icono_change = document.getElementById('icono_cambio');

    /* Todas las traducciones */

    const claves_comunes = {

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_alergenos": {
            "es": "ALÉRGENOS",
            "it": "ALLERGENI",
            "en": "ALLERGENS"
        },

        "texto_propiedades": {
            "es": "PROPIEDADES",
            "it": "PROPRIETÀ",
            "en": "PROPERTIES"
        },

        "etiqueta1": {
            "es": "Saludable",
            "it": "Salutare",
            "en": "Healthy"
        },

        "etiqueta3": {
            "es": "Saciante",
            "it": "Saziante",
            "en": "Satiating"
        },

        "etiqueta4": {
            "es": "Popularidad",
            "it": "Popolarità",
            "en": "Popularity"
        },

        "footer_add": {
            "es": "Añadir a mi pedido",
            "it": "Aggiungi al mio ordine",
            "en": "Add to my order"
        },

        "texto_ver_pedido": {
            "es": "Ver pedido",
            "it": "Visualizza ordine",
            "en": "View order"
        },
    }

    const traducciones_mainpage = {

        "texto_main_inferior": {
            "es": "Descubre New Horizons:",
            "it": "Scopri New Horizons:",
            "en": "Discover New Horizons:"
        },

        "texto_main_inferior2": {
            "es": "platos con <span class='verde'>ingredientes 100% naturales</span> con un sabor único",
            "it": "piatti con <span class='verde'>ingredienti 100% naturali</span> dal sapore unico",
            "en": "dishes with <span class='verde'>100% natural ingredients</span> with a unique flavor"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_promocion": {
            "es": "Promoción de nueva inauguración",
            "it": "Nuova promozione di apertura",
            "en": "New opening promotion"
        },

        "texto_promocion2": {
            "es": "de descuento en tu pedido",
            "it": "sconto sul tuo ordine",
            "en": "discount on your order"
        },

        "texto_copiar_codigo": {
            "es": "COPIAR CÓDIGO",
            "it": "COPIARE IL CODICE",
            "en": "COPY CODE"
        },

        "texto_copiar_codigo2": {
            "es": "COPIADO",
            "it": "COPIATO",
            "en": "COPIED"
        },

        "texto_promocion_aviso": {
            "es": "¡Promoción nueva apertura!",
            "it": "Nuova promozione di apertura!",
            "en": "New opening promotion!"
        },
    };

    const traducciones_loadingpage = {

        "texto_mainload": {
            "es": "DESCUBRE EL NUEVO MUNDO HEALTHY",
            "it": "SCOPRI IL NUOVO MONDO SANO",
            "en": "DISCOVER THE NEW HEALTHY WORLD"
        }
    };

    const traducciones_carta = {

        "titulo_pagina_carta": {
            "es": "New Horizons - La carta",
            "it": "New Horizons - Il menù",
            "en": "New Horizons - The menu"
        },

        "titulo_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_tarjeta_entrantes": {
            "es": "<span>ENTR</span>ANTES",
            "it": "<span>ANTI</span>PASTI",
            "en": "<span>STAR</span>TERS"
        },

        "texto_tarjeta_principales": {
            "es": "<span>PRINCI</span>PALES",
            "it": "<span>PRIN</span>CIPALI",
            "en": "<span>MA</span>INS"
        },

        "texto_tarjeta_menus": {
            "es": "<span>ME</span>NÚS",
            "it": "<span>ME</span>NU",
            "en": "<span>ME</span>NUS"
        },

        "texto_tarjeta_postres": {
            "es": "<span>POS</span>TRES",
            "it": "<span>DO</span>LCI",
            "en": "<span>DESS</span>ERTS"
        },

        "texto_tarjeta_bebidas": {
            "es": "<span>BEB</span>IDAS",
            "it": "<span>BEV</span>ANDE",
            "en": "<span>DRI</span>NKS"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_entrantes = {

        "titulo_pagina_entrantes": {
            "es": "New Horizons - Entrantes",
            "it": "New Horizons - Antipasti",
            "en": "New Horizons - Starters"
        },

        "titulo_entrantes": {
            "es": "ENTRANTES",
            "it": "ANTIPASTI",
            "en": "STARTERS"
        },

        "titulo_principales_change": {
            "es": "PRINCIPALES",
            "it": "PRINCIPALI",
            "en": "MAINS"
        },

        "texto_bollos": {
            "es": "Bollos de carne al vapor",
            "it": "Panini di carne al vapore",
            "en": "Steamed meat buns"
        },

        "texto_ensalada": {
            "es": "Ensalada de atún",
            "it": "Insalata di tonno",
            "en": "Tuna salad"
        },

        "texto_platano_frito": {
            "es": "Plátano frito",
            "it": "Platano fritto",
            "en": "Fried plantain"
        },

        "texto_rollitos": {
            "es": "Rollitos vegetales",
            "it": "Involtini di verdure",
            "en": "Vegetable rolls"
        },

        "texto_tosta_huevo": {
            "es": "Tosta de huevo",
            "it": "Pane tostato all'uovo",
            "en": "Egg toast"
        },

        "texto_tostas_brocoli": {
            "es": "Tosta de brócoli",
            "it": "Pane ai broccoli",
            "en": "Broccoli toast"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_principales = {

        "titulo_pagina_principales": {
            "es": "New Horizons - Principales",
            "it": "New Horizons - Principali",
            "en": "New Horizons - Mains"
        },

        "titulo_principales": {
            "es": "PRINCIPALES",
            "it": "PRINCIPALI",
            "en": "MAINS"
        },

        "titulo_menus_change": {
            "es": "MENÚS",
            "it": "MENU",
            "en": "MENUS"
        },

        "texto_hamburguesa": {
            "es": "Hamburguesa premium",
            "it": "Hamburguer premium",
            "en": "Premium burger"
        },

        "texto_tartar": {
            "es": "Tartar vegetal con frutos rojos",
            "it": "Tartare di verdure ai frutti rossi",
            "en": "Vegetable tartar with red fruits"
        },

        "texto_merluza": {
            "es": "Merluza al horno",
            "it": "Nasello al forno",
            "en": "Baked hake"
        },

        "texto_poke": {
            "es": "Poke Tres Estaciones",
            "it": "Colpire Tre Stagioni",
            "en": "Poke Three Seasons"
        },

        "texto_tallarines": {
            "es": "Tallarines a la remolacha",
            "it": "Tagliatelle di barbabietola",
            "en": "Beet noodles"
        },

        "texto_pinchos": {
            "es": "Pinchos de pollo",
            "it": "Spiedini di pollo",
            "en": "Chicken skewers"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_menus = {

        "titulo_pagina_menus": {
            "es": "New Horizons - Menús",
            "it": "New Horizons - Menu",
            "en": "New Horizons - Menus"
        },

        "titulo_menus": {
            "es": "MENÚS",
            "it": "MENU",
            "en": "MENUS"
        },

        "titulo_postres_change": {
            "es": "POSTRES",
            "it": "DOLCI",
            "en": "DESSERTS"
        },

        "texto_menu_hamburguesa": {
            "es": "Menú hamburguesa premium",
            "it": "Menù hamburger premium",
            "en": "Premium hamburger menu"
        },

        "texto_menu_crispy": {
            "es": "Menú Crispy Chicken",
            "it": "Menù Crispy Chicken",
            "en": "Crispy Chicken Menu"
        },

        "texto_zumo": {
            "es": "¡Añade un zumo de naranja natural a tu menú!",
            "it": "Aggiungi il succo d'arancia fresco al tuo menu!",
            "en": "Add fresh orange juice to your menu!"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_postres = {

        "titulo_pagina_postres": {
            "es": "New Horizons - Postres",
            "it": "New Horizons - Dolci",
            "en": "New Horizons - Desserts"
        },

        "titulo_postres": {
            "es": "POSTRES",
            "it": "DOLCI",
            "en": "DESSERTS"
        },

        "titulo_bebidas_change": {
            "es": "BEBIDAS",
            "it": "BEVANDE",
            "en": "DRINKS"
        },

        "texto_smoothie": {
            "es": "Desayuno New Horizons",
            "it": "Colazione New Horizons",
            "en": "New Horizons breakfast"
        },

        "texto_brownie": {
            "es": "Brownie de chocolate",
            "it": "Brownie al cioccolato",
            "en": "Chocolate brownie"
        },

        "texto_macedonia": {
            "es": "Macedonia de cereales",
            "it": "Macedonia di cereali",
            "en": "Cereal Macedonia"
        },

        "texto_macaroons": {
            "es": "Macaroons (4 uds.)",
            "it": "Macaroons (4 pz.)",
            "en": "Macaroons (4 pcs.)"
        },

        "texto_mandarinas": {
            "es": "Mandarinas (2 uds.)",
            "it": "Mandarini (2 pz.)",
            "en": "Tangerines (2 pcs.)"
        },

        "texto_kiwi": {
            "es": "Kiwi (1 ud.)",
            "it": "Kiwi (1 pz.)",
            "en": "Kiwi (1 pcs.)"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_bebidas = {

        "texto_coctel": {
            "es": "Cóctel de fresa",
            "it": "Cocktail alla fragola",
            "en": "Strawberry cocktail"
        },

        "texto_batidos": {
            "es": "Batidos (frambuesa - plátano)",
            "it": "Frullati (lampone - banana)",
            "en": "Smoothies (raspberry - banana)"
        },

        "texto_sweetroses": {
            "es": "Sweet & Roses",
            "it": "Sweet & Roses",
            "en": "Sweet & Roses"
        },

        "texto_chocolate": {
            "es": "Chocolate caliente",
            "it": "Cioccolata calda",
            "en": "Hot chocolate"
        },

        "titulo_pagina_bebidas": {
            "es": "New Horizons - Bebidas",
            "it": "New Horizons - Bevande",
            "en": "New Horizons - Drinks"
        },

        "titulo_bebidas": {
            "es": "BEBIDAS",
            "it": "BEVANDE",
            "en": "DRINKS"
        },

        "titulo_entrantes_change": {
            "es": "ENTRANTES",
            "it": "ANTIPASTI",
            "en": "STARTERS"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_restaurantes = {

        "texto_calle_roma": {
            "es": "Via di S.Giovanni in Laterano, 34-38, Roma, Italia.",
            "it": "Via di S.Giovanni in Laterano, 34-38, Roma, Italia.",
            "en": "Via di S.Giovanni in Laterano, 34-38, Rome, Italy."
        },

        "texto_localizacion_roma": {
            "es": "<span>Roma</span>, Italia",
            "it": "<span>Roma</span>, Italia",
            "en": "<span>Rome</span>, Italy"
        },

        "texto_como_llegar": {
            "es": "Cómo llegar",
            "it": "Come arrivare",
            "en": "Get directions"
        },

        "texto_calle_barcelona": {
            "es": "Carrer de Lepant, 277, Barcelona, España.",
            "it": "Carrer de Lepant, 277, Barcellona, Spagna.",
            "en": "Carrer de Lepant, 277, Barcelona, Spain."
        },

        "texto_localizacion_barcelona": {
            "es": "<span>Barcelona</span>, España",
            "it": "<span>Barcellona</span>, Spagna",
            "en": "<span>Barcelona</span>, Spain"
        },

        "texto_horario_mananas": {
            "es": "12:00 a 16:00",
            "it": "12:00 alle 16:00",
            "en": "12:00 to 16:00"
        },

        "texto_horario_tardes": {
            "es": "20:00 a 0:00",
            "it": "20:00 alle 0:00",
            "en": "20:00 to 0:00"
        },

        "texto_reservar": {
            "es": "RESERVAR",
            "it": "RISERVA",
            "en": "BOOK"
        },

        "titulo_pagina_restaurantes": {
            "es": "New Horizons - Restaurantes",
            "it": "New Horizons - Ristoranti",
            "en": "New Horizons - Restaurants"
        },

        "titulo_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_1comensal": {
            "es": "1 COMENSAL",
            "it": "1 CENA",
            "en": "1 DINER"
        },

        "texto_2comensales": {
            "es": "2 COMENSALES",
            "it": "2 CENERI",
            "en": "2 DINERS"
        },

        "texto_3comensales": {
            "es": "3 COMENSALES",
            "it": "3 CENERI",
            "en": "3 DINERS"
        },

        "texto_4comensales": {
            "es": "4 COMENSALES",
            "it": "4 CENERI",
            "en": "4 DINERS"
        },

        "texto_5comensales": {
            "es": "5 COMENSALES",
            "it": "5 CENERI",
            "en": "5 DINERS"
        },

        "texto_6comensales": {
            "es": "6+ COMENSALES",
            "it": "6+ CENERI",
            "en": "6+ DINERS"
        },

        "texto_reservando_en": {
            "es": "Estás reservando en:",
            "it": "Stai prenotando presso:",
            "en": "You are booking at:"
        },

        "texto_seleccionar_comensales": {
            "es": "Seleccionar comensales",
            "it": "Seleziona i commensali",
            "en": "Select diners"
        },

        "texto_nombre": {
            "es": "Nombre",
            "it": "Nome",
            "en": "Name"
        },

        "texto_correo": {
            "es": "Correo electrónico",
            "it": "E-mail",
            "en": "Email"
        },

        "texto_fecha": {
            "es": "Elegir fecha",
            "it": "Scegli la data",
            "en": "Choose time"
        },

        "texto_hora": {
            "es": "Elegir hora",
            "it": "Scegli l'orario",
            "en": "Choose date"
        },

        "texto_seleccionar_hora": {
            "es": "Selecciona una hora",
            "it": "Seleziona un orario",
            "en": "Select a time"
        },

        "texto_realizando_reserva": {
            "es": "Realizando reserva...",
            "it": "Effettuando la prenotazione...",
            "en": "Making reservation..."
        },

        "texto_reserva_realizada": {
            "es": "Reserva realizada correctamente",
            "it": "Prenotazione effettuata correttamente",
            "en": "Reservation made correctly"
        },

        "texto_gracias": {
            "es": "¡Gracias por confiar en New Horizons!",
            "it": "Grazie per aver fiducia in New Horizons!",
            "en": "Thank you for trusting New Horizons!"
        },

        "texto_datos_reserva": {
            "es": "Los datos de tu reserva:",
            "it": "Dettagli della tua prenotazione:",
            "en": "Your reservation details:"
        },

        "texto_hemos_enviado": {
            "es": "Te hemos enviado un correo con los datos de tu reserva.",
            "it": "Ti abbiamo inviato un'e-mail con i dettagli della tua prenotazione.",
            "en": "We have sent you an email with your reservation details."
        },

        "texto_volver_nh": {
            "es": "VOLVER A NEW HORIZONS",
            "it": "RITORNO A NUOVI ORIZZONTI",
            "en": "RETURN TO NEW HORIZONS"
        },
    };

    const traducciones_quienes_somos = {

        "texto_valoracion3": {
            "es": '"Ambiente tranquilo y elegante. <br class="br"> Estaba todo muy bueno."',
            "it": '"Atmosfera tranquilla ed elegante. <br class="br"> Tutto era molto gustoso."',
            "en": '"Calm and elegant atmosphere. <br class="br"> Everything was very tasty."'
        },

        "texto_valoracion2": {
            "es": '"Fantástico restaurante, saben cómo tratar a <br class="br"> sus clientes. La comida estaba buenísima."',
            "it": '"Ristorante fantastico, sanno come trattare <br class="br"> i clienti. Il cibo era delizioso."',
            "en": '"Fantastic restaurant, they know how to treat <br class="br"> their customers. The food was delicious."'
        },

        "texto_valoracion1": {
            "es": '"Buena comida, buen ambiente y mejor <br class="br"> servicio. Volveremos pronto."',
            "it": '"Buon cibo, buona atmosfera e il miglior servizio <br class="br">. Torneremo presto."',
            "en": '"Good food, good atmosphere and best <br class="br"> service. We will be back soon."'
        },

        "texto_intro3": {
            "es": "Porque nuestros clientes son lo primero,<br> y queremos lo mejor para ellos.",
            "it": "Perché i nostri clienti vengono prima di tutto<br> e per loro vogliamo il meglio.",
            "en": "Because our customers come first,<br> and we want the best for them."
        },

        "texto_propiedad_calidad": {
            "es": "<span>D</span>E CALIDAD",
            "it": "<span>D</span>I QUALITÀ",
            "en": "<span>Q</span>UALITY"
        },

        "texto_propiedad_saludables": {
            "es": "<span>S</span>ALUDABLES",
            "it": "<span>S</span>ALUTARE",
            "en": "<span>H</span>EALTHY"
        },

        "texto_propiedad_naturales": {
            "es": "<span>N</span>ATURALES",
            "it": "<span>N</span>ATURALE",
            "en": "<span>N</span>ATURAL"
        },

        "texto_intro2": {
            "es": "Por eso todos nuestros platos son",
            "it": "Ecco perché tutti i nostri piatti lo sono",
            "en": "That's why all our dishes are"
        },

        "texto_intro": {
            "es": "En New Horizons sabemos lo que importa.",
            "it": "A New Horizons sappiamo cosa conta.",
            "en": "At New Horizons we know what matters."
        },

        "titulo_pagina_quienes_somos": {
            "es": "New Horizons - ¿Quiénes somos?",
            "it": "New Horizons - ¿Chi siamo?",
            "en": "New Horizons - About us"
        },

        "titulo_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_novedades = {

        "texto_novedades_crispy": {
            "es": "Menú Crispy Chicken",
            "it": "Menù Crispy Chicken",
            "en": "Crispy Chicken menu"
        },

        "texto_novedades_tartar": {
            "es": "Tartar vegetal con frutos rojos",
            "it": "Tartare di verdure ai frutti rossi",
            "en": "Vegetable tartar with red fruits"
        },

        "texto_novedades_macedonia": {
            "es": "Macedonia de cereales",
            "it": "Macedonia di cereali",
            "en": "Cereal Macedonia"
        },

        "texto_novedades_rollitos": {
            "es": "Rollitos vegetales",
            "it": "Involtini di verdure",
            "en": "Vegetable rolls"
        },

        "texto_novedades_hamburguesa": {
            "es": "Hamburguesa premium",
            "it": "Hamburguer premium",
            "en": "Premium burger"
        },

        "titulo_pagina_novedades": {
            "es": "New Horizons - Novedades",
            "it": "New Horizons - Notizie",
            "en": "New Horizons - News"
        },

        "titulo_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_contacto = {

        "texto_titulo_formulario": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_ubicacion_roma": {
            "es": "<span class='blanco'>Via</span> di S.Giovanni in Laterano, 34-38 (Roma).",
            "it": "<span class='blanco'>Via</span> di S.Giovanni in Laterano, 34-38 (Roma).",
            "en": "<span class='blanco'>Via</span> di S.Giovanni in Laterano, 34-38 (Rome)."
        },

        "texto_ubicacion_barcelona": {
            "es": "<span class='blanco'>Carrer</span> de Lepant, 277 (Barcelona).",
            "it": "<span class='blanco'>Carrer</span> de Lepant, 277 (Barcellona).",
            "en": "<span class='blanco'>Carrer</span> de Lepant, 277 (Barcelona)."
        },

        "texto_telf_roma": {
            "es": "<span class='blanco'>601 763 128</span> (Roma)",
            "it": "<span class='blanco'>601 763 128</span> (Roma)",
            "en": "<span class='blanco'>601 763 128</span> (Rome)"
        },

        "texto_telf_barcelona": {
            "es": "<span class='blanco'>601 754 331</span> (Barcelona)",
            "it": "<span class='blanco'>601 754 331</span> (Barcellona)",
            "en": "<span class='blanco'>601 754 331</span> (Barcelona)"
        },

        "titulo_pagina_contacto": {
            "es": "New Horizons - Contacto",
            "it": "New Horizons - Contatto",
            "en": "New Horizons - Contact"
        },

        "titulo_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },
    };

    const traducciones_platos = {

        // Entrantes

        "bollos_carne": {

            "titulo_pagina": {
                "es": "New Horizons - Bollos de carne al vapor",
                "it": "New Horizons - Panini di carne al vapore",
                "en": "New Horizons - Steamed meat buns"
            },
    
            "titulo_plato": {
                "es": "BOLLOS DE CARNE AL VAPOR",
                "it": "PANINI DI CARNE AL VAPORE",
                "en": "STEAMED MEAT BUNS"
            },

            "titulo_plato_minus": {
                "es": "Bollos de carne al vapor",
                "it": "Panini di carne al vapore",
                "en": "Steamed meat buns"
            },
    
            "texto_plato": {
                "es": "Descubre la perfección en cada bocado con nuestros bollos de carne al vapor. Rellenos de suculenta <span>carne sazonada</span> y envueltos en una <span>masa tierna</span>, son una delicia que te transportará directamente a la auténtica <span>cocina asiática</span>. ¡Una explosión de sabores en cada mordisco!",
                "it": "Scopri la perfezione in ogni boccone con i nostri panini di carne al vapore. Ripieni di succulenta <span>carne condita</span> e avvolti in un <span>tenero impasto</span>, sono una delizia che vi trasporterà direttamente nell'autentica <span>cucina asiatica</span>. Un'esplosione di sapori ad ogni boccone!",
                "en": "Discover perfection in every bite with our steamed meat buns. Stuffed with succulent <span>seasoned meat</span> and wrapped in a <span>tender dough</span>, they are a delight that will transport you directly to authentic <span>Asian cuisine</span>. An explosion of flavors in every bite!"
            },

            "imagen_plato": "../../media/img/Imagenes/Entrantes/bollos_vapor.jpg",

            "imagen_icono": "../../media/img/Iconos/bollo_carne_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/meat.png",

            "imagen_ingrediente2": "../../media/img/Iconos/egg.png",

            "imagen_ingrediente3": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente4": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Carne de cerdo",
                "it": "Carne di maiale",
                "en": "Pork meat"
            },

            "titulo_ingrediente2": {
                "es": "Huevo",
                "it": "Uovo",
                "en": "Egg"
            },

            "titulo_ingrediente3": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente4": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "35%",
            "sizebar2": "45%",
            "sizebar3": "30%",
            "sizebar4": "70%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "ensalada_atun": {

            "titulo_pagina": {
                "es": "New Horizons - Ensalada de atún",
                "it": "New Horizons - Insalata di tonno",
                "en": "New Horizons - Tuna salad"
            },
    
            "titulo_plato": {
                "es": "ENSALADA DE ATÚN",
                "it": "INSALATA DI TONNO",
                "en": "TUNA SALAD"
            },

            "titulo_plato_minus": {
                "es": "Ensalada de atún",
                "it": "Insalata di tonno",
                "en": "Tuna salad"
            },
    
            "texto_plato": {
                "es": "Disfruta de una <span>explosión de frescura</span> en cada bocado con nuestra ensalada de atún. Una cama de lechuga crujiente y jugoso tomate fresco, acompañada de aceitunas negras, cebolla, pepino y garbanzos cocidos, se combinan armoniosamente con el atún, creando una <span>experiencia ligera y deliciosa</span>. ¡Perfecta para una comida rápida y nutritiva!",
                "it": "Goditi <scpan>un'esplosione di freschezza</scpan> ad ogni boccone con la nostra insalata di tonno. Un letto di lattuga croccante e succoso pomodoro fresco, accompagnato da olive nere, cipolla, cetriolo e ceci cotti, si combinano armoniosamente con il tonno, creando <span>un'esperienza leggera e deliziosa</span>. Perfetto per un pasto veloce e nutriente!",
                "en": "Enjoy an <span>explosion of freshness</span> in every bite with our tuna salad. A bed of crisp lettuce and juicy fresh tomato, accompanied by black olives, onion, cucumber and cooked chickpeas, combine harmoniously with the tuna, creating a <span>light and delicious experience</span>. Perfect for a quick and nutritious meal!"
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/ensalada_atun.jpg",

            "imagen_icono": "../../media/img/Iconos/ensalada_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/pescado.png",

            "imagen_ingrediente2": "",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Pescado",
                "it": "Pescare",
                "en": "Fish"
            },

            "sizebar1": "100%",
            "sizebar2": "30%",
            "sizebar3": "20%",
            "sizebar4": "70%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "platano_frito": {

            "titulo_pagina": {
                "es": "New Horizons - Plátano frito",
                "it": "New Horizons - Platano fritto",
                "en": "New Horizons - Fried plantain"
            },
    
            "titulo_plato": {
                "es": "PLÁTANO FRITO",
                "it": "PLATANO FRITTO",
                "en": "FRIED PLANTAIN"
            },

            "titulo_plato_minus": {
                "es": "Plátano frito",
                "it": "Platano fritto",
                "en": "Fried plantain"
            },
    
            "texto_plato": {
                "es": "Descubre una explosión de <span>sabores tropicales</span> con nuestro exquisito plátano frito. Crujientes trozos de plátano dorados a la perfección <span>con un suave toque de miel</span>, se mezclan armoniosamente con la suavidad del aguacate fresco. Y todo <span>acompañado por dos salsas distintivas</span>: el suave y cremoso guacamole y la salsa picante de jalapeño que hará despertar tus sentidos. Una combinación única que te transportará a la calidez y frescura de los trópicos.",
                "it": "Scopri un'esplosione di <span>sapori tropicali</span> con la nostra squisita banana fritta. Croccanti pezzi di banana dorati alla perfezione <span>con un morbido tocco di miele</span>, si fondono armoniosamente con la morbidezza dell'avocado fresco. E il tutto <span>accompagnato da due salse distintive</span>: il guacamole morbido e cremoso e la salsa piccante jalapeño che risveglierà i tuoi sensi. Una combinazione unica che ti trasporterà nel calore e nella freschezza dei tropici.",
                "en": "Discover an explosion of <span>tropical flavors</span> with our exquisite fried banana. Crispy pieces of banana golden to perfection <span>with a soft touch of honey</span>, blend harmoniously with the softness of fresh avocado. And all <span>accompanied by two distinctive sauces</span>: the smooth and creamy guacamole and the spicy jalapeño sauce that will awaken your senses. A unique combination that will transport you to the warmth and freshness of the tropics."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/platano_frito.jpg",

            "imagen_icono": "../../media/img/Iconos/platano_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/miel.png",

            "imagen_ingrediente2": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Miel",
                "it": "Miele",
                "en": "Honey"
            },

            "titulo_ingrediente2": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "10%",
            "sizebar2": "40%",
            "sizebar3": "50%",
            "sizebar4": "50%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            "precio": "1.25€",

            ...claves_comunes
        },

        "rollitos_vegetales": {

            "titulo_pagina": {
                "es": "New Horizons - Rollitos vegetales",
                "it": "New Horizons - Involtini di verdure",
                "en": "New Horizons - Vegetable rolls"
            },
    
            "titulo_plato": {
                "es": "ROLLITOS VEGETALES",
                "it": "INVOLTINI DI VERDURE",
                "en": "VEGETABLE ROLLS"
            },

            "titulo_plato_minus": {
                "es": "Rollitos vegetales",
                "it": "Involtini di verdure",
                "en": "Vegetable rolls"
            },
    
            "texto_plato": {
                "es": "Presentamos nuestros rollitos vegetales, envueltos en una capa exterior dorada y crujiente que se deshace delicadamente en tu boca y rellenos de una increíble mezcla de verduras al vapor que incluye <span>zanahorias frescas</span>, <span>repollo</span>, <span>champiñones</span> y <span>patata</span>. Acompañados de una clásica y siempre apetecible <span>salsa de yogur</span>. ¡Uno de los entrantes estrella de la casa!",
                "it": "Vi presentiamo i nostri involtini vegetariani, avvolti in uno strato esterno croccante e dorato che si scioglie delicatamente in bocca e farciti con un'incredibile miscela di verdure al vapore tra cui <span>carote fresche</span>, <span>cavoli</span>, <span>funghi</span> e <span>patate</span>. Accompagnato da una classica e sempre appetitosa <span>salsa allo yogurt</span>. Uno degli antipasti stellati della casa!",
                "en": "Introducing our veggie rolls, wrapped in a crispy golden outer layer that melts delicately in your mouth and filled with an <span>incredible blend of steamed vegetables</span> including <span>fresh carrots</span>, <span>cabbage</span>, <span>mushrooms</span> and <span>potatoes</span>. Accompanied by a classic and always appetizing <span>yogurt sauce</span>. One of the star starters of the house!"
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/rollitos_vegetales.jpg",

            "imagen_icono": "../../media/img/Iconos/rollito_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente2": "../../media/img/Iconos/egg.png",

            "imagen_ingrediente3": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente2": {
                "es": "Huevo",
                "it": "Uovo",
                "en": "Egg"
            },

            "titulo_ingrediente3": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "sizebar1": "50%",
            "sizebar2": "1%",
            "sizebar3": "40%",
            "sizebar4": "40%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "tosta_huevo": {

            "titulo_pagina": {
                "es": "New Horizons - Tosta de huevo",
                "it": "New Horizons - Pane tostato all'uovo",
                "en": "New Horizons - Egg toast"
            },
    
            "titulo_plato": {
                "es": "TOSTA DE HUEVO",
                "it": "PANE TOSTATO ALL'UOVO",
                "en": "EGG TOAST"
            },

            "titulo_plato_minus": {
                "es": "Tosta de huevo",
                "it": "Pane tostato all'uovo",
                "en": "Egg toast"
            },
    
            "texto_plato": {
                "es": "Fresca, sencilla y nutritiva: nuestra tosta de <span>huevo duro</span> y <span>aguacate</span>. Una base de <span>pan integral</span> cuidadosamente tostado sobre la que yace el cremoso aguacate, ofreciendo su sabor suave y untuoso. La yema dorada del huevo duro añade una textura suculenta y un toque de rusticidad. Acompañado y adornado con <span>hojas de espinaca crujientes</span> que completan un tentempié sabroso con el que te sentirás como en casa.",
                "it": "Fresco, semplice e nutriente: il nostro toast con <span>uova sode</span> e <span>avocado</span>. Una base di <span>pane integrale</span> accuratamente tostato su cui si adagia il cremoso avocado, offrendo il suo sapore morbido e untuoso. Il tuorlo dorato dell'uovo sodo aggiunge una consistenza succulenta e un tocco di rusticità. Accompagnati e guarniti con <span>foglie croccanti di spinaci</span> che completano uno spuntino gustoso con cui vi sentirete a casa.",
                "en": "Fresh, simple and nutritious: our <span>hard-boiled egg</span> and <span>avocado</span> toast. A base of carefully toasted <span>whole wheat bread</span> on which the creamy avocado lies, offering its soft and unctuous flavor. The golden yolk of the hard-boiled egg adds a succulent texture and a touch of rusticity. Accompanied and garnished with <span>crunchy spinach leaves</span> that complete a tasty snack with which you will feel at home."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/tostada_huevo.jpg",

            "imagen_icono": "../../media/img/Iconos/tostadahuevo_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente2": "../../media/img/Iconos/egg.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente2": {
                "es": "Huevo",
                "it": "Uovo",
                "en": "Egg"
            },

            "sizebar1": "65%",
            "sizebar2": "3%",
            "sizebar3": "25%",
            "sizebar4": "15%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "tosta_brocoli": {

            "titulo_pagina": {
                "es": "New Horizons - Tosta de brócoli",
                "it": "New Horizons - Crostini di broccoli",
                "en": "New Horizons - Broccoli toast"
            },
    
            "titulo_plato": {
                "es": "TOSTA DE BRÓCOLI",
                "it": "CROSTINI DI BROCCOLI",
                "en": "BROCCOLI TOAST"
            },

            "titulo_plato_minus": {
                "es": "Tosta de brócoli",
                "it": "Crostini di broccoli",
                "en": "Broccoli toast"
            },
    
            "texto_plato": {
                "es": "Experimenta una explosión de sabores y texturas con nuestra tosta de brócoli y queso. El <span>pan integral de molde</span>, crujiente y dorado, sirve como lienzo para una combinación única de ingredientes frescos y deliciosos. Una capa de <span>queso Philadelphia</span> y otra de <span>brócoli tierno</span>, aportan un toque vibrante al plato, mientras que la <span>lechuga fresca</span>, el <span>tomate</span> y la <span>cebolla caramelizada</span> añaden nuevas capas de sabor y complejidad. La tosta viene acompañada por nuestra <span>salsa rosa especial</span>, muy suave y perfectamente equilibrada para que no reste sabor a los demás ingredientes.",
                "it": "Vivi un'esplosione di sapori e consistenze con i nostri toast con broccoli e formaggio. Il <span>pane</span> croccante e dorato funge da tela per una combinazione unica di ingredienti freschi e deliziosi. Uno strato di <span>formaggio Philadelphia</span> e uno di <span>teneri broccoli</span> aggiungono un tocco vibrante al piatto, mentre la <span>lattuga fresca</span>, il <span>pomodoro</span> e la <span>cipolla caramellata</span> aggiungono nuovi strati di sapore e complessità. Il toast viene accompagnato dalla nostra <span>speciale salsa rosa</span>, molto morbida e perfettamente bilanciata per non sminuire il sapore degli altri ingredienti.",
                "en": "Experience an explosion of flavors and textures with our broccoli and cheese toast. Crunchy and <span>golden brown bread</span> serves as a canvas for a unique combination of fresh and delicious ingredients. A layer of <span>Philadelphia cheese</span> and a layer of <span>tender broccoli</span> add a vibrant touch to the dish, while <span>fresh lettuce</span>, <span>tomato</span> and <span>caramelized onion</span> add new layers of flavor and complexity. The toast comes accompanied by our <span>special pink sauce</span>, very smooth and perfectly balanced so that it does not detract from the flavor of the other ingredients."
            },

            "imagen_plato": "../../media/img/Imagenes/Entrantes/tostadas_brocoli.jpg",

            "imagen_icono": "../../media/img/Iconos/tostabrocoli_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente2": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente2": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "sizebar1": "40%",
            "sizebar2": "1%",
            "sizebar3": "45%",
            "sizebar4": "60%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        // Principales

        "hamburguesa_premium": {

            "titulo_pagina": {
                "es": "New Horizons - Hamburguesa premium",
                "it": "New Horizons - Hamburguer premium",
                "en": "New Horizons - Premium burger"
            },
    
            "titulo_plato": {
                "es": "HAMBURGUESA PREMIUM",
                "it": "HAMBURGUER PREMIUM",
                "en": "PREMIUM BURGER"
            },

            "titulo_plato_minus": {
                "es": "Hamburguesa premium",
                "it": "Hamburguer premium",
                "en": "Premium burger"
            },
    
            "texto_plato": {
                "es": "Presentamos nuestra hamburguesa premium: <span>jugosa carne de ternera</span>, <span>lechuga fresca</span>, <span>tomate</span>, <span>cebolla frita crujiente</span>, <span>pepino</span>, <span>queso cheddar</span> y una irresistible <span>salsa caprese</span>, todo ello abrazado por un <span>pan rústico casero</span> con semillas de sésamo y chía, recién sacado del horno.",
                "it": "Ti presentiamo il nostro hamburger premium: <span>manzo succoso</span>, <span>lattuga fresca</span>, <span>pomodoro</span>, <span>cipolla fritta croccante</span>, <span>cetriolo</span>, <span>formaggio cheddar</span> e un'irresistibile <span>salsa caprese</span>, il tutto abbracciato da un <span>panino rustico fatto in casa</span> con semi di sesamo e chia, appena sfornato.",
                "en": "Introducing our premium burger: <span>juicy beef</span>, <span>fresh lettuce</span>, <span>tomato</span>, <span>crispy fried onion</span>, <span>cucumber</span>, <span>cheddar cheese</span> and an irresistible <span>caprese sauce</span>, all embraced by a <span>homemade rustic bun</span> with sesame and chia seeds, fresh from the oven."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/burguer_especial_edit.jpg",

            "imagen_icono": "../../media/img/Iconos/hamburguesa_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/meat.png",

            "imagen_ingrediente2": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente3": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente4": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Carne de ternera",
                "it": "Carne di vitello",
                "en": "Veal meat"
            },

            "titulo_ingrediente2": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente3": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente4": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "35%",
            "sizebar2": "5%",
            "sizebar3": "100%",
            "sizebar4": "50%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "tartar_vegetal": {

            "titulo_pagina": {
                "es": "New Horizons - Tartar vegetal",
                "it": "New Horizons - Tartare di verdure",
                "en": "New Horizons - Vegetable tartar"
            },
    
            "titulo_plato": {
                "es": "TARTAR VEGETAL",
                "it": "TARTARE DI VERDURE",
                "en": "VEGETABLE TARTAR"
            },

            "titulo_plato_minus": {
                "es": "Tartar vegetal",
                "it": "Tartare di verdure",
                "en": "Vegetable tartar"
            },
    
            "texto_plato": {
                "es": "Este exquisito plato comienza con una capa suave de <span>queso crema</span> en forma de disco sobre la cual se sostiene una segunda capa fresca y afrutada conformada por <span>bolitas de sandía</span>. Sobre esta delicada base, se erige una creativa cesta artística de <span>queso fundido y solidificado</span>, creando una presentación visualmente impactante. En el interior de esta cesta, descubrirás nuestro <span>tartar de atún</span>, envuelto con <span>hojas de rúcula</span> y coronado con una irresistible <span>salsa de arándanos</span>. Una combinación de sabores que despierta los sentidos y eleva la experiencia gastronómica a nuevos niveles. ¡Déjate seducir por este festín de colores y texturas!",
                "it": "Questo squisito piatto inizia con un morbido strato di <span>crema di formaggio</span> a forma di disco sul quale è appoggiato un secondo strato fresco e fruttato composto da <span>palline di anguria</span>. Su questa base delicata viene eretto un cesto artistico e creativo di <span>formaggio fuso e solidificato</span>, creando una presentazione di grande impatto visivo. All'interno di questo cestino scoprirai la nostra <span>tartare di tonno</span>, avvolta da <span>foglie di rucola</span> e condita con un'irresistibile <span>salsa di mirtilli rossi</span>. Una combinazione di sapori che risveglia i sensi ed eleva l'esperienza gastronomica a nuovi livelli. Lasciati sedurre da questa festa di colori e texture!",
                "en": "This exquisite dish begins with a soft disk-shaped layer of <span>cream cheese</span> on which is supported a fresh and fruity second layer made up of <span>watermelon balls</span>. On this delicate base, a creative artistic basket of <span>melted and solidified cheese</span> is erected, creating a visually striking presentation. Inside this basket, you will discover our <span>tuna tartare</span>, wrapped with <span>arugula leaves</span> and topped with an irresistible <span>cranberry sauce</span>. A combination of flavors that awakens the senses and elevates the gastronomic experience to new levels. Let yourself be seduced by this feast of colors and textures!"
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/tartar_edit.jpg",

            "imagen_icono": "../../media/img/Iconos/tartar_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente2": "../../media/img/Iconos/pescado.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente2": {
                "es": "Pescado",
                "it": "Pescare",
                "en": "Fish"
            },

            "sizebar1": "55%",
            "sizebar2": "1%",
            "sizebar3": "50%",
            "sizebar4": "90%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "merluza_horno": {

            "titulo_pagina": {
                "es": "New Horizons - Merluza al horno",
                "it": "New Horizons - Nasello al forno",
                "en": "New Horizons - Baked hake"
            },
    
            "titulo_plato": {
                "es": "MERLUZA AL HORNO",
                "it": "NASELLO AL FORNO",
                "en": "BAKED HAKE"
            },

            "titulo_plato_minus": {
                "es": "Merluza al horno",
                "it": "Nasello al forno",
                "en": "Baked hake"
            },
    
            "texto_plato": {
                "es": "Nuestro pescado al horno siempre es una buena opción. Un suave, jugoso y saludable <span>lomo de merluza</span> condimentado con <span>pimienta negra y blanca</span> y un toque de <span>limón</span>. Emplatado sobre un acompañamiento de verduras (<span>pimiento rojo, amarillo y verde</span>, <span>cebolla morada</span> y <span>zanahoria</span>).",
                "it": "Il nostro pesce al forno è sempre una buona opzione. Un <span>lombo di nasello</span> morbido, succoso e sano condito con <span>pepe bianco e nero</span> e un tocco di <span>limone</span>. Impiattato su un contorno di verdure (<span>peperone rosso, giallo e verde</span>, <span>cipolla rossa</span> e <span>carota</span>).",
                "en": "Our baked fish is always a good option. A soft, juicy and healthy <span>hake loin</span> seasoned with <span>black and white pepper</span> and a touch of <span>lemon</span>. Plated on a side of vegetables (<span>red, yellow and green pepper</span>, <span>red onion</span> and <span>carrot</span>)."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/merluza_pimientos.jpg",

            "imagen_icono": "../../media/img/Iconos/merluza_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/pescado.png",

            "imagen_ingrediente2": "",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Pescado",
                "it": "Pescare",
                "en": "Fish"
            },

            "sizebar1": "100%",
            "sizebar2": "35%",
            "sizebar3": "70%",
            "sizebar4": "30%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "poke_estaciones": {

            "titulo_pagina": {
                "es": "New Horizons - Poke Tres Estaciones",
                "it": "New Horizons - Colpire Tre Stagioni",
                "en": "New Horizons - Poke Three Seasons"
            },
    
            "titulo_plato": {
                "es": "POKE TRES ESTACIONES",
                "it": "COLPIRE TRE STAGIONI",
                "en": "POKE THREE SEASONS"
            },

            "titulo_plato_minus": {
                "es": "Poke Tres Estaciones",
                "it": "Colpire Tre Stagioni",
                "en": "Poke Three Seasons"
            },
    
            "texto_plato": {
                "es": "Te presentamos nuestro Poke Tres Estaciones, compuesto por una consistente base de <span>arroz blanco</span> acompañado de <span>maíz</span>, <span>pollo adobado</span>, <span>garbanzos y lentejas cocidas</span>, <span>almendras</span>, <span>edamame</span> y <span>semillas de girasol</span>. Te lo servimos rápidamente, ¡perfecto para cuando no tienes mucho tiempo para comer o almorzar!",
                "it": "Vi presentiamo il nostro Three Seasons Poke, composto da una base consistente di <span>riso bianco</span> accompagnato da <span>mais</span>, <span>pollo marinato</span>, <span>ceci e lenticchie cotte</span>, <span>mandorle</span>, <span>edamame</span> e <span>semi di girasole</span>. Te lo serviamo velocemente, perfetto per quando non hai molto tempo per pranzare o pranzare!",
                "en": "We present our Three Seasons Poke, composed of a consistent base of <span>white rice</span> accompanied by <span>corn</span>, <span>marinated chicken</span>, <span>chickpeas and cooked lentils</span>, <span>almonds</span>, <span>edamame</span> and <span>sunflower seeds</span>. We serve it to you quickly, perfect for when you don't have much time for lunch or lunch!"
            },

            "imagen_plato": "../../media/img/Imagenes/Principales/poke.jpg",

            "imagen_icono": "../../media/img/Iconos/poke_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/meat.png",

            "imagen_ingrediente2": "../../media/img/Iconos/frutos_secos.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Carne de pollo",
                "it": "Carne di gallina",
                "en": "Chicken meat"
            },

            "titulo_ingrediente2": {
                "es": "Frutos secos",
                "it": "Noccioline",
                "en": "Nuts"
            },

            "sizebar1": "100%",
            "sizebar2": "10%",
            "sizebar3": "85%",
            "sizebar4": "25%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "tallarines_remolacha": {

            "titulo_pagina": {
                "es": "New Horizons - Tallarines a la remolacha",
                "it": "New Horizons - Tagliatelle di barbabietola",
                "en": "New Horizons - Beet noodles"
            },
    
            "titulo_plato": {
                "es": "TALLARINES A LA REMOLACHA",
                "it": "TAGLIATELLE DI BARBABIETOLA",
                "en": "BEET NOODLES"
            },

            "titulo_plato_minus": {
                "es": "Tallarines a la remolacha",
                "it": "Tagliatelle di barbabietola",
                "en": "Beet noodles"
            },
    
            "texto_plato": {
                "es": "Sumérgete en la exquisitez de nuestros tallarines a la remolacha, donde la suavidad y dulzura de la <span>salsa de remolacha</span> se fusiona con la <span>pasta recién cocida</span> al puro estilo italiano, teñida del vibrante tono morado que le aporta la remolacha. La influencia italiana se revela en la textura perfecta de la pasta, coronada con generosas capas de <span>queso parmesano</span>. Los finos cortes de <span>pimiento verde</span> aportan frescura y un contraste de colores a este selecto plato.",
                "it": "Immergiti nella squisitezza dei nostri noodles alla barbabietola, dove la morbidezza e la dolcezza della <span>salsa di barbabietola</span> si fondono con la <span>pasta appena cotta</span> in puro stile italiano, tinta con il vibrante tono viola che le conferisce la barbabietola. L'influenza italiana si rivela nella consistenza perfetta della pasta, condita con generosi strati di <span>parmigiano</span>. I tagli fini del <span>peperone verde</span> aggiungono freschezza e contrasto di colori a questo piatto pregiato.",
                "en": "Immerse yourself in the exquisiteness of our beet noodles, where the softness and sweetness of the <span>beet sauce</span> merges with the <span>freshly cooked pasta</span> in pure Italian style, tinted with the vibrant purple tone that the beet gives it. The Italian influence is revealed in the perfect texture of the pasta, topped with generous layers of <span>Parmesan cheese</span>. The fine cuts of <span>green pepper</span> add freshness and a contrast of colors to this select dish."
            },

            "imagen_plato": "../../media/img/Imagenes/Principales/tallarines_remolacha.jpg",

            "imagen_icono": "../../media/img/Iconos/tallarines_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente2": "../../media/img/Iconos/egg.png",

            "imagen_ingrediente3": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente4": "../../media/img/Iconos/miel.png",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente2": {
                "es": "Huevo",
                "it": "Uovo",
                "en": "Egg"
            },

            "titulo_ingrediente3": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente4": {
                "es": "Miel",
                "it": "Miele",
                "en": "Honey"
            },

            "sizebar1": "35%",
            "sizebar2": "15%",
            "sizebar3": "80%",
            "sizebar4": "100%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "pinchos_pollo": {

            "titulo_pagina": {
                "es": "New Horizons - Pinchos de pollo",
                "it": "New Horizons - Spiedini di pollo",
                "en": "New Horizons - Chicken skewers"
            },
    
            "titulo_plato": {
                "es": "PINCHOS DE POLLO",
                "it": "SPIEDINI DI POLLO",
                "en": "CHICKEN SKEWERS"
            },

            "titulo_plato_minus": {
                "es": "Pinchos de pollo",
                "it": "Spiedini di pollo",
                "en": "Chicken skewers"
            },
    
            "texto_plato": {
                "es": "Pinchos caseros compuestos por trozos de tierna <span>carne de cerdo</span> en su punto, jugoso <span>pimiento rojo</span>, <span>cebolla blanca</span> y <span>bacon</span>. Adornados con unos finos cortes de <span>cebolla morada</span>, <span>hojas de menta</span> y <span>rúcula</span>. 4 pinchos por ración.",
                "it": "Spiedini fatti in casa composti da pezzetti di <span>tenero maiale</span>, succoso <span>peperoncino</span>, <span>cipolla bianca</span> e <span>pancetta</span>. Guarnito con alcuni tagli pregiati di <span>cipolla rossa</span>, <span>foglie di menta</span> e <span>rucola</span>. 4 spiedini per porzione.",
                "en": "Homemade skewers composed of pieces of <span>tender pork</span>, juicy <span>red pepper</span>, <span>white onion</span> and <span>bacon</span>. Garnished with some fine cuts of <span>red onion</span>, <span>mint leaves</span> and <span>arugula</span>. 4 skewers per serving."
            },

            "imagen_plato": "../../media/img/Imagenes/Principales/brochetas.jpg",

            "imagen_icono": "../../media/img/Iconos/pinchos_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/meat.png",

            "imagen_ingrediente2": "",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Carne de pollo y cerdo",
                "it": "Carne di gallina e maiale",
                "en": "Chicken and pork meat"
            },

            "sizebar1": "45%",
            "sizebar2": "20%",
            "sizebar3": "40%",
            "sizebar4": "10%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        // Menús

        "menu_hamburguesa": {

            "titulo_pagina": {
                "es": "New Horizons - Menú hamburguesa premium",
                "it": "New Horizons - Menù hamburger premium",
                "en": "New Horizons - Premium burger menu"
            },
    
            "titulo_plato": {
                "es": "MENÚ HAMBURGUESA PREMIUM",
                "it": "MENÙ HAMBURGUER PREMIUM",
                "en": "PREMIUM BURGER MENU"
            },

            "titulo_plato_minus": {
                "es": "Menú Hamburguesa Premium",
                "it": "Menù Hamburguer Premium",
                "en": "Premium Burger menu"
            },
    
            "texto_plato": {
                "es": "Este menú incluye nuestra <span>hamburguesa premium</span> acompañada de <span>patatas fritas</span> estilo gajo, una <span>bebida</span> y un <span>postre</span> a elegir.",
                "it": "Questo menu include il nostro <span>hamburger premium</span> accompagnato da <span>patatine fritte</span>, una <span>bevanda</span> e un <span>dessert</span> a scelta.",
                "en": "This menu includes our <span>premium burger</span> accompanied by <span>wedge-style fries</span>, a <span>drink</span> and a <span>dessert</span> of your choice."
            },

            "imagen_plato": "../../media/img/Imagenes/Menus_y_combinados/burguer_especial_menu.jpg",

            "imagen_icono": "../../media/img/Iconos/hamburguesamenu_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/meat.png",

            "imagen_ingrediente2": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente3": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente4": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Carne de ternera",
                "it": "Carne di vitello",
                "en": "Veal meat"
            },

            "titulo_ingrediente2": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente3": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente4": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "20%",
            "sizebar2": "5%",
            "sizebar3": "100%",
            "sizebar4": "60%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "menu_crispy": {

            "titulo_pagina": {
                "es": "New Horizons - Menú Crispy Chicken",
                "it": "New Horizons - Menù Crispy Chicken",
                "en": "New Horizons - Crispy Chicken Menu"
            },
    
            "titulo_plato": {
                "es": "MENÚ CRISPY CHICKEN",
                "it": "MENÙ CRISPY CHICKEN",
                "en": "CRISPY CHICKEN MENU"
            },

            "titulo_plato_minus": {
                "es": "Menú Crispy Chicken",
                "it": "Menù Crispy Chicken",
                "en": "Crispy Chicken Menu"
            },
    
            "texto_plato": {
                "es": "Este menú incluye nuestro <span>bocadillo de pollo crujiente</span> acompañado de <span>patatas fritas</span> estilo paja, una <span>bebida</span> y un <span>postre</span> a elegir. Ingredientes del bocadillo: pollo frito crujiente, bacon, lechuga, tomate, queso y salsa de mostaza casera.",
                "it": "Questo menù comprende il nostro <span>croccante sandwich al pollo</span> accompagnato da <span>patatine fritte</span>, una <span>bevanda</span> e un <span>dessert</span> a vostra scelta. Ingredienti del panino: pollo fritto croccante, pancetta, lattuga, pomodoro, formaggio e salsa di senape fatta in casa.",
                "en": "This menu includes our <span>crispy chicken sandwich</span> accompanied by <span>straw-style fries</span>, a <span>drink</span> and a <span>dessert</span> of your choice. Sandwich ingredients: crispy fried chicken, bacon, lettuce, tomato, cheese and homemade mustard sauce."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/menu_bocadillo.jpg",

            "imagen_icono": "../../media/img/Iconos/crispymenu_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/meat.png",

            "imagen_ingrediente2": "../../media/img/Iconos/egg.png",

            "imagen_ingrediente3": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente4": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Carne de pollo y cerdo",
                "it": "Carne di gallina e porco",
                "en": "Chicken and pork meat"
            },

            "titulo_ingrediente2": {
                "es": "Huevo",
                "it": "Uovo",
                "en": "Egg"
            },

            "titulo_ingrediente3": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente4": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "sizebar1": "25%",
            "sizebar2": "45%",
            "sizebar3": "100%",
            "sizebar4": "70%",

            "etiqueta2": {
                "es": "Picante",
                "it": "Speziato",
                "en": "Spicy"
            },

            ...claves_comunes
        },

        "add_juice": {

            "titulo_pagina": {
                "es": "New Horizons - Añade un zumo de naranja",
                "it": "New Horizons - Aggiungi il succo d'arancia",
                "en": "New Horizons - Add orange juice"
            },
    
            "titulo_plato": {
                "es": "AÑADE UN ZUMO DE NARANJA",
                "it": "AGGIUNGI IL SUCCO D'ARANCIA",
                "en": "ADD ORANGE JUICE"
            },

            "titulo_plato_minus": {
                "es": "Zumo de naranja",
                "it": "Succo d'arancia",
                "en": "Orange juice"
            },
    
            "texto_plato": {
                "es": "¡Añade un <span>zumo de naranja natural</span> a tu menú por tan sólo <span>2,50€</span>! (Promoción válida hasta el 30/09/2024).",
                "it": "Aggiungi una <span>spremuta d'arancia fresca</span> al tuo menu a soli <span>2,50€</span>! (Promozione valida fino al 30/09/2024).",
                "en": "Add a <span>fresh orange juice</span> to your menu for only <span>2.50€</span>! (Promotion valid until 09/30/2024)."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/combinado_naranja_edit.jpg",

            "imagen_icono": "../../media/img/Iconos/zumonaranja_icono.png",

            "imagen_ingrediente1": "",

            "imagen_ingrediente2": "",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            ...claves_comunes
        },

        // Postres

        "smoothie_nh": {

            "titulo_pagina": {
                "es": "New Horizons - Desayuno New Horizons",
                "it": "New Horizons - Colazione New Horizons",
                "en": "New Horizons - New Horizons Breakfast"
            },
    
            "titulo_plato": {
                "es": "DESAYUNO NEW HORIZONS",
                "it": "COLAZIONE NEW HORIZONS",
                "en": "NEW HORIZONS BREAKFAST"
            },

            "titulo_plato_minus": {
                "es": "Desayuno New Horizons",
                "it": "Colazione New Horizons",
                "en": "New Horizons breakfast"
            },
    
            "texto_plato": {
                "es": "¿Qué hay mejor que empezar el día con un buen desayuno? La mezcla perfecta de <span>fresas</span> frescas, <span>yogur</span> natural y <span>copos de avena</span>. ¡Te invitamos a mezclar los tres ingredientes para disfrutar de todo su sabor! Añade <span>toppings</span> a tu gusto: escamas de chocolate, lacasitos, caramelo líquido, nata, mermelada de fresa o frambuesa, frutos secos, leche vegetal o de vaca o dulce de leche.",
                "it": "Cosa c'è di meglio che iniziare la giornata con una buona colazione? Il mix perfetto di <span>fragole</span> fresche, <span>yogurt</span> naturale e <span>fiocchi d'avena</span>. Vi invitiamo a mescolare i tre ingredienti per assaporarne tutto il sapore! Aggiungi i <span>condimenti</span> a tuo piacimento: scaglie di cioccolato, lacasitos, caramello liquido, panna, marmellata di fragole o lamponi, noci, latte vegetale o vaccino o dulce de leche.",
                "en": "What's better than starting the day with a good breakfast? The perfect mix of fresh <span>strawberries</span>, natural <span>yogurt</span> and <span>rolled oats</span>. We invite you to mix the three ingredients to enjoy all its flavor! Add <span>toppings</span> to your liking: chocolate flakes, lacasitos, liquid caramel, cream, strawberry or raspberry jam, nuts, vegetable or cow's milk or dulce de leche."
            },

            "imagen_plato": "../../media/img/Imagenes/Postres/avena_fresas.jpg",

            "imagen_icono": "../../media/img/Iconos/desayuno_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente2": "",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "sizebar1": "80%",
            "sizebar2": "30%",
            "sizebar3": "80%",
            "sizebar4": "90%",

            "etiqueta2": {
                "es": "Dulce",
                "it": "Dolce",
                "en": "Sweet"
            },

            ...claves_comunes
        },

        "brownie_chocolate": {

            "titulo_pagina": {
                "es": "New Horizons - Brownie de chocolate",
                "it": "New Horizons - Brownie al cioccolato",
                "en": "New Horizons - Chocolate brownie"
            },
    
            "titulo_plato": {
                "es": "BROWNIE DE CHOCOLATE",
                "it": "BROWNIE AL CIOCCOLATO",
                "en": "CHOCOLATE BROWNIE"
            },

            "titulo_plato_minus": {
                "es": "Brownie de chocolate",
                "it": "Brownie al cioccolato",
                "en": "Chocolate brownie"
            },
    
            "texto_plato": {
                "es": "Nuestro irresistible brownie de chocolate conseguirá enamorarte desde el primer bocado. Intenso <span>chocolate negro</span> al 75% con <span>nueces</span>, cobertura de <span>chocolate en polvo</span> y textura esponjosa; si eres amante del chocolate no te puedes perder este postre. Y si buscas llevarlo al siguiente nivel, añade una bola de <span>helado de vainilla</span> ¡por tan solo 1€ extra!",
                "it": "Il nostro irresistibile brownie al cioccolato ve ne farà innamorare fin dal primo morso. <span>Cioccolato fondente</span> intenso al 75% con <span>nocciole</span>, rivestimento in <span>polvere di cioccolato</span> e consistenza spugnosa; Se sei un amante del cioccolato non puoi perderti questo dolce. E se vuoi fare un salto di qualità, aggiungi una pallina di <span>gelato alla vaniglia</span> per solo 1€ in più!",
                "en": "Our irresistible chocolate brownie will make you fall in love with it from the first bite. Intense 75% <span>dark chocolate</span> with <span>nuts</span>, <span>chocolate powder coating</span> and spongy texture; If you are a chocolate lover you cannot miss this dessert. And if you're looking to take it to the next level, add a scoop of <span>vanilla ice cream</span> for just 1€ extra!"
            },

            "imagen_plato": "../../media/img/Imagenes/Postres/tarta_chocolate.jpg",

            "imagen_icono": "../../media/img/Iconos/brownie_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente2": "../../media/img/Iconos/egg.png",

            "imagen_ingrediente3": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente4": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente5": "../../media/img/Iconos/frutos_secos.png",

            "titulo_ingrediente1": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente2": {
                "es": "Huevo",
                "it": "Uovo",
                "en": "Egg"
            },

            "titulo_ingrediente3": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente4": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "titulo_ingrediente5": {
                "es": "Frutos secos",
                "it": "Noccioline",
                "en": "Nuts"
            },

            "sizebar1": "35%",
            "sizebar2": "70%",
            "sizebar3": "50%",
            "sizebar4": "70%",

            "etiqueta2": {
                "es": "Dulce",
                "it": "Dolce",
                "en": "Sweet"
            },

            ...claves_comunes
        },

        "macedonia_cereales": {

            "titulo_pagina": {
                "es": "New Horizons - Macedonia de cereales",
                "it": "New Horizons - Macedonia di cereali",
                "en": "New Horizons - Cereal macedonia"
            },
    
            "titulo_plato": {
                "es": "MACEDONIA DE CEREALES",
                "it": "MACEDONIA DI CEREALI",
                "en": "CEREAL MACEDONIA"
            },

            "titulo_plato_minus": {
                "es": "Macedonia de cereales",
                "it": "Macedonia di cereali",
                "en": "Cereal macedonia"
            },
    
            "texto_plato": {
                "es": "Perfecta para desayunar, merendar o para darte un capricho, nuestra macedonia de cereales es uno de los platos más creativos que hemos diseñado: un elegante <span>bowl de cereales</span>... ¡rellenos de <span>zumo de frutas</span>! Muerde los cereales y disfruta del sabor de la fruta natural fresca (piña, naranja, mora o mango). Y añade tus <span>toppings</span> favoritos: escamas de chocolate, lacasitos, dulce de leche, bolas de helado, sirope de fresa o chocolate, caramelo líquido, nata, mermelada de fresa o frambuesa, frutos secos y leche vegetal o de vaca. Una experiencia inolvidable para tu paladar.",
                "it": "Perfetta per la colazione, per uno spuntino o per regalarsi qualcosa, la nostra insalata di cereali è uno dei piatti più creativi che abbiamo ideato: un'elegante <span>ciotola di cereali</span>... piena di <span>succo di frutta</span>! Mordi i cereali e goditi il ​​sapore della frutta fresca e naturale (ananas, arancia, mora o mango). E aggiungi i tuoi <span>condimenti</span> preferiti: scaglie di cioccolato, lacasitos, dulce de leche, palline di gelato, sciroppo di fragole o cioccolato, caramello liquido, panna, marmellata di fragole o lamponi, noci e latte vegetale o vaccino. Un'esperienza indimenticabile per il vostro palato.",
                "en": "Perfect for breakfast, a snack or to treat yourself, our cereal salad is one of the most creative dishes we have designed: an elegant <span>bowl of cereals</span>... filled with <span>fruit juice</span>! Bite into the cereal and enjoy the flavor of fresh natural fruit (pineapple, orange, blackberry or mango). And add your favorite <span>toppings</span>: chocolate flakes, lacasitos, dulce de leche, ice cream balls, strawberry or chocolate syrup, liquid caramel, cream, strawberry or raspberry jam, nuts and vegetable or cow's milk. An unforgettable experience for your palate."
            },

            "imagen_plato": "../../media/img/Imagenes/Postres/cereales.jpg",

            "imagen_icono": "../../media/img/Iconos/macedoniacereales_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente2": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente2": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "40%",
            "sizebar2": "100%",
            "sizebar3": "65%",
            "sizebar4": "100%",

            "etiqueta2": {
                "es": "Dulce",
                "it": "Dolce",
                "en": "Sweet"
            },

            ...claves_comunes
        },

        "macaroons": {

            "titulo_pagina": {
                "es": "New Horizons - Macaroons",
                "it": "New Horizons - Amaretti",
                "en": "New Horizons - Macaroons"
            },
    
            "titulo_plato": {
                "es": "MACAROONS",
                "it": "AMARETTI",
                "en": "MACAROONS"
            },

            "titulo_plato_minus": {
                "es": "Macaroons",
                "it": "Amaretti",
                "en": "Macaroons"
            },
    
            "texto_plato": {
                "es": "Macaroons, esas pequeñas joyas <span>dulces y crujientes</span>, visualmente atractivas y de gran sabor. Incluye <span>tres macaroons</span> por ración.",
                "it": "Gli amaretti, quei piccoli gioielli <span>dolci e croccanti</span>, visivamente accattivanti e di gran gusto. Include <span>tre amaretti</span> per porzione.",
                "en": "Macaroons, those <span>sweet and crunchy</span> little jewels, visually attractive and great tasting. Includes <span>three macaroons</span> per serving."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/macaroons.jpg",

            "imagen_icono": "../../media/img/Iconos/macaroons_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/gluten.png",

            "imagen_ingrediente2": "../../media/img/Iconos/egg.png",

            "imagen_ingrediente3": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Gluten",
                "it": "Glutine",
                "en": "Gluten"
            },

            "titulo_ingrediente2": {
                "es": "Huevo",
                "it": "Uovo",
                "en": "Egg"
            },

            "titulo_ingrediente3": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "30%",
            "sizebar2": "50%",
            "sizebar3": "20%",
            "sizebar4": "40%",

            "etiqueta2": {
                "es": "Dulce",
                "it": "Dolce",
                "en": "Sweet"
            },

            ...claves_comunes
        },

        "mandarinas": {

            "titulo_pagina": {
                "es": "New Horizons - Mandarinas",
                "it": "New Horizons - Mandarini",
                "en": "New Horizons - Tangerines"
            },
    
            "titulo_plato": {
                "es": "MANDARINAS",
                "it": "MANDARINI",
                "en": "TANGERINES"
            },

            "titulo_plato_minus": {
                "es": "Mandarinas",
                "it": "Mandarini",
                "en": "Tangerines"
            },
    
            "texto_plato": {
                "es": "<span>Fruta natural y fresca</span>. ¿La prefieres más madura o más verde? Habla con nuestros camareros para personalizar tu experiencia. Incluye <span>dos mandarinas</span> por ración.",
                "it": "<span>Frutta naturale e fresca</span>. Lo preferite più maturo o più verde? Parla con i nostri camerieri per personalizzare la tua esperienza. Include <span>due mandarini</span> per porzione.",
                "en": "<span>Natural and fresh fruit</span>. Do you prefer it more mature or greener? Talk to our waiters to personalize your experience. Includes <span>two tangerines</span> per serving."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/mandarinas.jpg",

            "imagen_icono": "../../media/img/Iconos/mandarinas_icono.png",

            "imagen_ingrediente1": "",

            "imagen_ingrediente2": "",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "sizebar1": "100%",
            "sizebar2": "50%",
            "sizebar3": "50%",
            "sizebar4": "40%",

            "etiqueta2": {
                "es": "Dulce",
                "it": "Dolce",
                "en": "Sweet"
            },

            ...claves_comunes
        },

        "kiwi": {

            "titulo_pagina": {
                "es": "New Horizons - Kiwi",
                "it": "New Horizons - Kiwi",
                "en": "New Horizons - Kiwi"
            },
    
            "titulo_plato": {
                "es": "KIWI",
                "it": "KIWI",
                "en": "KIWI"
            },

            "titulo_plato_minus": {
                "es": "Kiwi",
                "it": "Kiwi",
                "en": "Kiwi"
            },
    
            "texto_plato": {
                "es": "<span>Fruta natural y fresca</span>. ¿La prefieres más madura o más verde? Habla con nuestros camareros para personalizar tu experiencia. Incluye <span>un kiwi</span> por ración.",
                "it": "<span>Frutta naturale e fresca</span>. Lo preferite più maturo o più verde? Parla con i nostri camerieri per personalizzare la tua esperienza. Include <span>un kiwi</span> per porzione.",
                "en": "<span>Natural and fresh fruit</span>. Do you prefer it more mature or greener? Talk to our waiters to personalize your experience. Includes <span>one kiwi</span> per serving."
            },

            "imagen_plato": "../../media/img/Imagenes/Postres/kiwi.jpg",

            "imagen_icono": "../../media/img/Iconos/kiwi_icono.png",

            "imagen_ingrediente1": "",

            "imagen_ingrediente2": "",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "sizebar1": "100%",
            "sizebar2": "30%",
            "sizebar3": "20%",
            "sizebar4": "50%",

            "etiqueta2": {
                "es": "Dulce",
                "it": "Dolce",
                "en": "Sweet"
            },

            ...claves_comunes
        },

        // Bebidas

        "coctel_fresa": {

            "titulo_pagina": {
                "es": "New Horizons - Cóctel de fresa",
                "it": "New Horizons - Cocktail di fragole",
                "en": "New Horizons - Strawberry cocktail"
            },
    
            "titulo_plato": {
                "es": "CÓCTEL DE FRESA",
                "it": "COCKTAIL DI FRAGOLE",
                "en": "STRAWBERRY COCKTAIL"
            },

            "titulo_plato_minus": {
                "es": "Cóctel de fresa",
                "it": "Cocktail di fragole",
                "en": "Strawberry cocktail"
            },
    
            "texto_plato": {
                "es": "En esta refrescante <span>bebida alcohólica</span> hemos combinado las <span>fresas</span> frescas recién cortadas con una selección especial de <span>licores premium</span>, cuidadosamente seleccionados para realzar su sabor natural. Este cóctel se sirve con hielo para mantenerlo en la temperatura ideal. Además, está decorado con una fina rodaja de <span>naranja</span> que complementa a la perfección la bebida.",
                "it": "In questa <span>bevanda alcolica</span> rinfrescante abbiamo abbinato <span>fragole</span> appena tagliate con una speciale selezione di <span>liquori premium</span>, accuratamente selezionati per esaltarne il sapore naturale. Questo cocktail viene servito con ghiaccio per mantenerlo alla temperatura ideale. Inoltre, è decorato con una sottile fetta <span>d'arancia</span> che si abbina perfettamente alla bevanda.",
                "en": "In this refreshing <span>alcoholic beverage</span> we have combined freshly cut <span>strawberries</span> with a special selection of <span>premium liquors</span>, carefully selected to enhance their natural flavor. This cocktail is served with ice to keep it at the ideal temperature. In addition, it is decorated with a thin slice of <span>orange</span> that perfectly complements the drink."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/batido_fresa.jpg",

            "imagen_icono": "../../media/img/Iconos/coctelfresa_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/alcohol.png",

            "imagen_ingrediente2": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Bebida alcohólica",
                "it": "Bevanda alcolica",
                "en": "Alcoholic beverage"
            },

            "titulo_ingrediente2": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "40%",
            "sizebar2": "50%",
            "sizebar3": "40%",
            "sizebar4": "90%",

            "etiqueta2": {
                "es": "Graduación alcohólica",
                "it": "Gradazione alcolica",
                "en": "Alcohol content"
            },

            ...claves_comunes
        },

        "batidos": {

            "titulo_pagina": {
                "es": "New Horizons - Batidos",
                "it": "New Horizons - Frullati",
                "en": "New Horizons - Smoothies"
            },
    
            "titulo_plato": {
                "es": "BATIDOS",
                "it": "FRULLATI",
                "en": "SMOOTHIES"
            },

            "titulo_plato_minus": {
                "es": "Batidos",
                "it": "Frullati",
                "en": "Smoothies"
            },
    
            "texto_plato": {
                "es": "Cada batido está cuidadosamente preparado con <span>frutas frescas</span> y cremoso <span>yogur</span>, creando una mezcla suave y deliciosa que deleitará tu paladar. Te decantes por la intensidad de las <span>frambuesas</span> o por la cremosidad del <span>plátano</span>, nuestros batidos caseros son la opción perfecta para satisfacer tus antojos.",
                "it": "Ogni frullato è preparato con cura con <span>rutta fresca</span>f e <span>yogurt</span> cremoso, creando una miscela morbida e deliziosa che delizierà il tuo palato. Che tu opti per l'intensità dei <span>lamponi</span> o la cremosità della <span>banana</span>, i nostri frullati fatti in casa sono l'opzione perfetta per soddisfare le tue voglie.",
                "en": "Each smoothie is carefully prepared with <span>fresh fruits</span> and creamy <span>yogurt</span>, creating a smooth and delicious blend that will delight your palate. Whether you opt for the intensity of <span>raspberries</span> or the creaminess of <span>banana</span>, our homemade smoothies are the perfect option to satisfy your cravings."
            },

            "imagen_plato": "../../media/img/Imagenes/Bebidas/batido_frambuesa.jpg",

            "imagen_icono": "../../media/img/Iconos/batidos_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente2": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente2": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "70%",
            "sizebar2": "0%",
            "sizebar3": "30%",
            "sizebar4": "80%",

            "etiqueta2": {
                "es": "Graduación alcohólica",
                "it": "Gradazione alcolica",
                "en": "Alcohol content"
            },

            ...claves_comunes
        },

        "sweet_roses": {

            "titulo_pagina": {
                "es": "New Horizons - Sweet & Roses",
                "it": "New Horizons - Sweet & Roses",
                "en": "New Horizons - Sweet & Roses"
            },
    
            "titulo_plato": {
                "es": "SWEET & ROSES",
                "it": "SWEET & ROSES",
                "en": "SWEET & ROSES"
            },

            "titulo_plato_minus": {
                "es": "Sweet & Roses",
                "it": "Sweet & Roses",
                "en": "Sweet & Roses"
            },
    
            "texto_plato": {
                "es": "Sweet & Roses es nuestro <span>cóctel</span> más selecto. Una <span>bebida alcóholica</span> de alta graduación cuidadosamente elaborada con un suave toque floral de <span>aroma a rosas</span>, <span>zumo de sandía y fresas</span> sobre una base de <span>licor dulce</span>.",
                "it": "Sweet & Roses è il nostro <span>cocktail</span> più selezionato. Una <span>bevanda alcolica</span> ad alta gradazione realizzata con cura con un morbido tocco floreale di <span>aroma di rosa</span>, <span>succo di anguria e fragole</span> su una base di <span>liquore dolce</span>.",
                "en": "Sweet & Roses is our most select <span>cocktail</span>. A carefully crafted high-proof <span>alcoholic drink</span> with a soft floral touch of <span>rose aroma</span>, <span>watermelon juice and strawberries</span> on a <span>sweet liqueur</span> base."
            },

            "imagen_plato": "../../media/img/Imagenes/Fondos/editadas/bebida_frutos.jpg",

            "imagen_icono": "../../media/img/Iconos/sweetyroses_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/alcohol.png",

            "imagen_ingrediente2": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Bebida alcohólica",
                "it": "Bevanda alcolica",
                "en": "Alcoholic beverage"
            },

            "titulo_ingrediente2": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "10%",
            "sizebar2": "80%",
            "sizebar3": "30%",
            "sizebar4": "70%",

            "etiqueta2": {
                "es": "Graduación alcohólica",
                "it": "Gradazione alcolica",
                "en": "Alcohol content"
            },

            ...claves_comunes
        },

        "chocolate_caliente": {

            "titulo_pagina": {
                "es": "New Horizons - Chocolate caliente",
                "it": "New Horizons - Cioccolata calda",
                "en": "New Horizons - Hot chocolate"
            },
    
            "titulo_plato": {
                "es": "CHOCOLATE CALIENTE",
                "it": "CIOCCOLATA CALDA",
                "en": "HOT CHOCOLATE"
            },

            "titulo_plato_minus": {
                "es": "Chocolate caliente",
                "it": "Cioccolata calda",
                "en": "Hot Chocolate"
            },
    
            "texto_plato": {
                "es": "Nuestro <span>chocolate</span> caliente es ideal para desayunar o merendar en uno de esos días fríos, ¡pero también puedes tomarlo en verano! Prueba nuestro chocolate tanto en frío como en caliente, con <span>leche de vaca</span> o <span>leche vegetal</span> (soja, avena o almendras) y con nuestros <span>churros caseros</span> recién hechos por 1€ extra por unidad.",
                "it": "La nostra <span>cioccolata</span> calda è l'ideale per la colazione o per lo spuntino in una delle giornate fredde, ma puoi mangiarla anche d'estate! Prova la nostra cioccolata sia calda che fredda, con <span>latte vaccino</span> o <span>latte vegetale</span> (soia, avena o mandorle) e con i nostri <span>churros fatti in casa</span> appena fatti con un supplemento di 1€ al pezzo.",
                "en": "Our hot <span>chocolate</span> is ideal for breakfast or a snack on one of those cold days, but you can also have it in the summer! Try our chocolate both hot and cold, with <span>cow's milk</span> or <span>vegetable milk</span> (soy, oats or almonds) and with our freshly made <span>homemade churros</span> for an extra 1€ per unit."
            },

            "imagen_plato": "../../media/img/Imagenes/Bebidas/chocolate_caliente.jpg",

            "imagen_icono": "../../media/img/Iconos/chocolatecaliente_icono.png",

            "imagen_ingrediente1": "../../media/img/Iconos/lacteos.png",

            "imagen_ingrediente2": "../../media/img/Iconos/sugar.png",

            "imagen_ingrediente3": "",

            "imagen_ingrediente4": "",

            "imagen_ingrediente5": "",

            "titulo_ingrediente1": {
                "es": "Lácteos",
                "it": "Latticini",
                "en": "Dairy"
            },

            "titulo_ingrediente2": {
                "es": "Azúcar",
                "it": "Zucchero",
                "en": "Sugar"
            },

            "sizebar1": "50%",
            "sizebar2": "0%",
            "sizebar3": "20%",
            "sizebar4": "45%",

            "etiqueta2": {
                "es": "Graduación alcohólica",
                "it": "Gradazione alcolica",
                "en": "Alcohol content"
            },

            ...claves_comunes
        },

    };

    const traducciones_pedido = {

        "titulo_pagina_pedido": {
            "es": "New Horizons - Mi pedido",
            "it": "New Horizons - Il mio ordine",
            "en": "New Horizons - My order"
        },

        "titulo_pedido": {
            "es": "MI PEDIDO",
            "it": "IL MIO ORDINE",
            "en": "MY ORDER"
        },

        "texto_menu_superior_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_superior_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_superior_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_superior_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_superior_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_menu_desplegable_carta": {
            "es": "LA CARTA",
            "it": "IL MENÙ",
            "en": "THE MENU"
        },

        "texto_menu_desplegable_restaurantes": {
            "es": "RESTAURANTES",
            "it": "RISTORANTI",
            "en": "RESTAURANTS"
        },

        "texto_menu_desplegable_quienes_somos": {
            "es": "¿QUIÉNES SOMOS?",
            "it": "¿CHI SIAMO?",
            "en": "ABOUT US"
        },

        "texto_menu_desplegable_novedades": {
            "es": "NOVEDADES",
            "it": "NOTIZIE",
            "en": "NEWS"
        },

        "texto_menu_desplegable_contacto": {
            "es": "CONTACTO",
            "it": "CONTATTO",
            "en": "CONTACT"
        },

        "texto_alerta": {
            "es": "No has pedido nada todavía. <br> ¡Echa un vistazo a la carta!",
            "it": "Non hai ancora ordinato nulla. <br> Dai un'occhiata al menu!",
            "en": "You haven't ordered anything yet. <br> Take a look at the menu!"
        },

        "texto_ver_carta": {
            "es": "Ver carta",
            "it": "Vedere il menu",
            "en": "View menu"
        },

        "texto_total": {
            "es": "Total:",
            "it": "Totale:",
            "en": "Total:"
        },

        "texto_continuar": {
            "es": "CONTINUAR",
            "it": "CONTINUA",
            "en": "CONTINUE"
        },
    };
    
    /* Cambio de idioma al seleccionar una bandera */

    banderas.forEach(elemento => {
        elemento.addEventListener('click', function() {
            idioma_seleccionado = elemento.getAttribute('data-lang');
            localStorage.removeItem('carrito');
            localStorage.setItem('elementosEnCarrito', 0);
            cambiarIdioma(idioma_seleccionado);
        });
    });

    /* Sistema de identificación de la página en la que estamos */

    function obtenerPaginaActual() {
        let ruta = window.location.pathname;
        if(!ruta.includes(".html")) {
            ruta = `${ruta}.html`;
        };
        console.log("Ruta actual:", ruta);
        return ruta;
    };

    let paginaActual = obtenerPaginaActual();
    paginaActual = paginaActual.replace(/^.*\/html\//, '/html/'); // solucionar error de ruta

    /* Cambio de imágenes según el plato seleccionado */

    /* Si no existe la imagen del ingrediente, el ingrediente desaparece en su totalidad */

    if(paginaActual === "/html/es/nuestros_platos.html") {

        const imagenPlato = traducciones_platos[dish_name].imagen_plato;
        document.getElementById("imagenPlato").src = imagenPlato;

        const imagenIcono = traducciones_platos[dish_name].imagen_icono;
        const iconos_comida = document.querySelectorAll(".comida_icono");

        for (let i = 0; i < iconos_comida.length; i++) {
            iconos_comida[i].src = imagenIcono;
        };

        const imageIngrediente1 = traducciones_platos[dish_name].imagen_ingrediente1;
        document.getElementById("imagenIngrediente1").src = imageIngrediente1;
        if(imageIngrediente1 === "") {
            const scheme1 = document.getElementById("esquema1");
            scheme1.style.display = "none";
        };

        const imageIngrediente2 = traducciones_platos[dish_name].imagen_ingrediente2;
        document.getElementById("imagenIngrediente2").src = imageIngrediente2;
        if(imageIngrediente2 === "") {
            const scheme2 = document.getElementById("esquema2");
            scheme2.style.display = "none";
        };

        const imageIngrediente3 = traducciones_platos[dish_name].imagen_ingrediente3;
        document.getElementById("imagenIngrediente3").src = imageIngrediente3;
        if(imageIngrediente3 === "") {
            const scheme3 = document.getElementById("esquema3");
            scheme3.style.display = "none";
        };

        const imageIngrediente4 = traducciones_platos[dish_name].imagen_ingrediente4;
        document.getElementById("imagenIngrediente4").src = imageIngrediente4;
        if(imageIngrediente4 === "") {
            const scheme4 = document.getElementById("esquema4");
            scheme4.style.display = "none";
        };

        const imageIngrediente5 = traducciones_platos[dish_name].imagen_ingrediente5;
        document.getElementById("imagenIngrediente5").src = imageIngrediente5;
        if(imageIngrediente5 === "") {
            const scheme5 = document.getElementById("esquema5");
            scheme5.style.display = "none";
        };

        /* Excepciones */

        if(dish_name === "add_juice") {
            const ingredientes_box = document.getElementById("caja_ingredientes");
            const propiedades_box = document.getElementById("caja_propiedades");

            ingredientes_box.style.display = "none";
            propiedades_box.style.display = "none";
        };

        if(dish_name === "mandarinas" || dish_name === "kiwi") {
            const ingredientes_box = document.getElementById("caja_ingredientes");
            ingredientes_box.style.display = "none";
        };
    };


    /* Tamaño de las barras de propiedades según el plato */

    if(paginaActual === "/html/es/nuestros_platos.html") {
        const size_barra1 = traducciones_platos[dish_name].sizebar1;
        const bar1 = document.getElementById("barra1");
        bar1.style.width = size_barra1;

        const size_barra2 = traducciones_platos[dish_name].sizebar2;
        const bar2 = document.getElementById("barra2");
        bar2.style.width = size_barra2;

        const size_barra3 = traducciones_platos[dish_name].sizebar3;
        const bar3 = document.getElementById("barra3");
        bar3.style.width = size_barra3;

        const size_barra4 = traducciones_platos[dish_name].sizebar4;
        const bar4 = document.getElementById("barra4");
        bar4.style.width = size_barra4;
    };
    

    /* Cambio de textos según la página en la que nos encontramos */

    function cambiarIdioma(idioma_seleccionado, traducciones) {

        console.log('Cambiando a idioma:', idioma_seleccionado);
        localStorage.setItem('idioma_seleccionado', idioma_seleccionado);

        const elementosTraducibles = document.querySelectorAll('.traducible');

        elementosTraducibles.forEach(elemento => {
            const claveTraduccion = elemento.getAttribute('data-key');
            const textoTraducido = obtenerTextoTraducido(claveTraduccion, idioma_seleccionado, traducciones);

            if(elemento.querySelector('span') || elemento.querySelector('br')) {
                elemento.innerHTML = textoTraducido;
            }else {
                elemento.textContent = textoTraducido;
            }
        });

        /* Cambiar mapa de la sección "contacto" según el idioma seleccionado */

        if(paginaActual === "/html/es/contacto.html") {

            if(idiomaGuardado === "es") {
                mapobject.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5735500692354!2d2.1734317028609618!3d41.40506671621881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dc94153335%3A0xe02f341401f103a9!2sC%2F%20de%20Lepant%2C%20277%2C%2008013%20Barcelona!5e0!3m2!1ses!2ses!4v1682824132564!5m2!1ses!2ses";
                nameobject.placeholder = "Nombre *";
                mailobject.placeholder = "Correo electrónico *";
                asuntobject.placeholder = "Asunto";
                mensajeobject.placeholder = "Mensaje *";
                enviarobject.value = "Enviar";
    
            }else if(idiomaGuardado === "en") {
                mapobject.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.583438885062!2d2.1759006000000003!3d41.404852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dc94153335%3A0xe02f341401f103a9!2sC%2F%20de%20Lepant%2C%20277%2C%2008013%20Barcelona!5e0!3m2!1sen!2ses!4v1700178747872!5m2!1sen!2ses";
                nameobject.placeholder = "Name *";
                mailobject.placeholder = "Email *";
                asuntobject.placeholder = "Affair";
                mensajeobject.placeholder = "Message *";
                enviarobject.value = "Send";
    
            }else if(idiomaGuardado === "it") {
                mapobject.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.583438885062!2d2.1759006000000003!3d41.404852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dc94153335%3A0xe02f341401f103a9!2sC%2F%20de%20Lepant%2C%20277%2C%2008013%20Barcelona!5e0!3m2!1sit!2ses!4v1700178807119!5m2!1sit!2ses";
                nameobject.placeholder = "Nome *";
                mailobject.placeholder = "E-mail *";
                asuntobject.placeholder = "Affare";
                mensajeobject.placeholder = "Messaggio *";
                enviarobject.value = "Inviare";
            };
        }
        

        console.log('Idioma cambiado con éxito a', idiomaGuardado);

    };

    function obtenerTextoTraducido(clave, idioma, traducciones) {

        if(traducciones.hasOwnProperty(clave) && traducciones[clave].hasOwnProperty(idioma)) {
            return traducciones[clave][idioma];
        }else {
            console.warn(`No se encontró una traducción para la clave '${clave}' en el idioma '${idioma}'`);
            return clave;
        };
    };


    let traduccionesParaPagina;

    switch (paginaActual) {
        case '/index.html':
            traduccionesParaPagina = traducciones_loadingpage;
            break;
        case '/html/es/pagina_principal.html':
            traduccionesParaPagina = traducciones_mainpage;
            break;
        case '/html/es/la_carta.html':
            traduccionesParaPagina = traducciones_carta;
            break;
        case '/html/es/entrantes.html':
            traduccionesParaPagina = traducciones_entrantes;
            break;
        case '/html/es/principales.html':
            traduccionesParaPagina = traducciones_principales;
            break;
        case '/html/es/menus.html':
            traduccionesParaPagina = traducciones_menus;
            break;
        case '/html/es/postres.html':
            traduccionesParaPagina = traducciones_postres;
            break;
        case '/html/es/bebidas.html':
            traduccionesParaPagina = traducciones_bebidas;
            break;
        case '/html/es/restaurantes.html':
            traduccionesParaPagina = traducciones_restaurantes;
            break;
        case '/html/es/quienes_somos.html':
            traduccionesParaPagina = traducciones_quienes_somos;
            break;
        case '/html/es/novedades.html':
            traduccionesParaPagina = traducciones_novedades;
            break;
        case '/html/es/contacto.html':
            traduccionesParaPagina = traducciones_contacto;
            break;
        case '/html/es/nuestros_platos.html':
            traduccionesParaPagina = {
                ...claves_comunes,
                ...traducciones_platos[dish_name]
            };
            break;
        case '/html/es/mi_pedido.html':
            traduccionesParaPagina = traducciones_pedido;
            break;
        default:
            traduccionesParaPagina = traducciones_loadingpage;
    }

    /* Colorear texto spans, añadir estilos al párrafo y actualizar variables globales*/

    if(paginaActual === "/html/es/nuestros_platos.html") {

        // Actualizar las variables globales
        imagenurl = traducciones_platos[dish_name].imagen_plato;
        nombreplato = traducciones_platos[dish_name].titulo_plato[localStorage.getItem('idioma_seleccionado')];

        const textoConSpan = traducciones_platos[dish_name].texto_plato[localStorage.getItem('idioma_seleccionado')];
        const contenedorTexto = document.getElementById('texto_descripcion');
        contenedorTexto.innerHTML = textoConSpan;
        const spans = contenedorTexto.getElementsByTagName('span');

        for (const span of spans) {
            span.style.color = "#c9e265";
        };

        contenedorTexto.style.fontFamily = "'Montserrat', sans-serif";
        contenedorTexto.style.color = "white";
        contenedorTexto.style.fontSize = "15px";
        contenedorTexto.style.fontWeight = "500";
        contenedorTexto.style.lineHeight = "26px";
    };

    /* Obtener el idioma almacenado en local */

    const idiomaGuardado = localStorage.getItem('idioma_seleccionado');

    cambiarIdioma(idiomaGuardado || 'es', traduccionesParaPagina);

});

/* Añadir plato al carrito */

function agregarPlatoAlCarrito(cantidadSeleccionada) {
    //nombreplato = nombre del plato.
    //precioPlato = precio del plato.
    //imagenurl = url de la imagen del plato.
    console.log("Cantidad seleccionada now:", cantidadSeleccionada);
    let numeroActualCarrito = parseInt(localStorage.getItem('elementosEnCarrito'));
    numeroActualCarrito += cantidadSeleccionada; 
    localStorage.setItem('elementosEnCarrito', numeroActualCarrito);

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    const nuevoPlato = {
        indice: carrito.length,
        nombre: nombreplato,
        precio: precioPlato,
        cantidad: cantidadSeleccionada,
        imagen: imagenurl
    };

    let platoExiste = carrito.find(plato => plato.nombre === nuevoPlato.nombre);

    if(platoExiste) {
        platoExiste.cantidad += cantidadSeleccionada;
    }else {
        nuevoPlato.cantidad = cantidadSeleccionada;
        carrito.push(nuevoPlato);
    };
    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log('Plato añadido! Index:', nuevoPlato.indice);
    console.log("Elementos en carrito actualmente:", localStorage.getItem('elementosEnCarrito'));
    
};

/* Eliminar plato del carrito */

function eliminarPlato(indice) {

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(indice, 1);

    localStorage.setItem('carrito', JSON.stringify(carrito));
};


