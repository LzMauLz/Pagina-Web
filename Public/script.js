const productos = [
    {id: "licencia1", titulo: "TSM Tool", imagen: "images/tsmtool.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "15 de licencia"},
    {id: "licencia2", titulo: "SRS AUTH Tool", imagen: "images/s.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "12 meses de licencia de activación (Renovar)"},
    {id: "licencia3", titulo: "SRS AUTH Tool", imagen: "images/s.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "6 meses de licencia de activación (Renovar)"},
    {id: "licencia4", titulo: "SRS AUTH Tool", imagen: "images/s.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "3 meses de licencia de activación (Renovar)"},
    {id: "licencia5", titulo: "Chimera Pro", imagen: "images/chimerapro.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "12 meses servicio de manual de licencia instantánea"},
    {id: "licencia6", titulo: "Chimera Pro", imagen: "images/chimerapro.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "12 meses de licencia API automática instantánea"},
    {id: "licencia7", titulo: "Chimera SAMSUNG", imagen: "images/chimerasamgsung.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "12 meses de licencia API automática instantánea"},
    {id: "licencia8", titulo: "Chimera SAMSUNG", imagen: "images/chimerasamgsung.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "12 meses servicio de manual de licencia"},
    {id: "licencia9", titulo: "Moto King Pro", imagen: "images/motoking.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "12 meses de licencia"},
    {id: "licencia10", titulo: "Scorpion Tool", imagen: "images/scorpiontool.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "1 año de licencia pro"},
    {id: "licencia11", titulo: "Scorpion Tool", imagen: "images/scorpiontool.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "12 meses de licencia popular"},
    {id: "licencia12", titulo: "Scorpion Tool", imagen: "images/scorpiontool.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "2 meses de licencia ultimate"},
    {id: "licencia13", titulo: "Scorpion Tool", imagen: "images/scorpiontool.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "6 meses de licencia básica"},
    {id: "licencia14", titulo: "Nooox Tool", imagen: "images/noooxtool.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "3 meses de licencia"},   
    {id: "licencia15", titulo: "Crunchyroll", imagen: "images/crunchyroll.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "1 año miembro mega fan "},
    {id: "licencia16", titulo: "Crunchyroll", imagen: "images/crunchyroll.jpg", categoria: { nombre: "licencia", id: "licencias" }, precio: 80000, descripcion: "1 mes miembro mega fan"},
    {id: "licencia17", titulo: "Microsoft Office 365", imagen: "images/office.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "365 días iniciar sesión usuario y pass"},
    {id: "licencia18", titulo: "Windows 10", imagen: "images/windows10.jpg", categoria: {nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "Clave de activación Pro/Home 1 PC de por vida"},
    {id: "licencia19", titulo: "Windows 11", imagen: "images/windows11.jpg", categoria: {nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "Clave de activación Pro/Home 1 PC de por vida"},
    {id: "licencia20", titulo: "Hydra Digital", imagen: "images/hydra.jpg", categoria: {nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "12 meses de licencia"},
    {id: "licencia21", titulo: "Hydra Digital", imagen: "images/hydra.jpg", categoria: {nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia22", titulo: "Hydra Digital", imagen: "images/hydra.jpg", categoria: {nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 meses de licencia"},
    {id: "licencia23", titulo: "Unlock Tool", imagen: "images/Licencia unlock.jpg", categoria: {nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "12 meses de licencia"},
    {id: "licencia24", titulo: "Unlock Tool", imagen: "images/Licencia unlock.jpg", categoria: {nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia25", titulo: "Unlock Tool", imagen: "images/Licencia unlock.jpg", categoria: {nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 meses de licencia"},
    {id: "licencia26", titulo: "Sigma Plus", imagen: "images/sigma.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 año de licencia acesso de activación"},
    {id: "licencia27", titulo: "Sigma Plus", imagen: "images/sigma.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia acceso de activación"},
    {id: "licencia28", titulo: "RTC Tool", imagen: "images/rtctool.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "12 meses de licencia"},
    {id: "licencia29", titulo: "RTC Tool", imagen: "images/rtctool.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia30", titulo: "RTC Tool", imagen: "images/rtctool.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 meses de licencia"},
    {id: "licencia31", titulo: "EVO Tool", imagen: "images/evo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "12 meses de licencia"},
    {id: "licencia32", titulo: "EVO Tool", imagen: "images/evo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia33", titulo: "EVO Tool", imagen: "images/evo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 mes de licencia"},
    {id: "licencia34", titulo: "CF-Tools", imagen: "images/cftools.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "12 meses de licencia"},
    {id: "licencia35", titulo: "CF-Tools", imagen: "images/cftools.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia36", titulo: "CF-Tools", imagen: "images/cftools.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 mes de licencia"},
    {id: "licencia37", titulo: "Tera Tool", imagen: "images/teratool.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "12 meses de licencia"},
    {id: "licencia38", titulo: "Tera Tool", imagen: "images/teratool.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia39", titulo: "Tera Tool", imagen: "images/teratool.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 meses de licencia"},
    {id: "licencia40", titulo: "Pandora Online", imagen: "images/pandora.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 1 año de activación usuario existente renovar"},
    {id: "licencia41", titulo: "JCID Schematic", imagen: "images/jcidschematic.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 1 año de licencia y código de activación"},
    {id: "licencia42", titulo: "JCID Schematic", imagen: "images/jcidschematic.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 3 meses de licencia y código de activación"},
    {id: "licencia43", titulo: "JCID Schematic", imagen: "images/jcidschematic.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 1 mes de licencia y código de activación"},
    {id: "licencia44", titulo: "Borneo", imagen: "images/borneo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 12 meses de licencia y código de activación, usuario 1 pc"},
    {id: "licencia45", titulo: "Borneo", imagen: "images/borneo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 12 meses de licencia y código de activación, usuario 2 pc"},
    {id: "licencia46", titulo: "Borneo", imagen: "images/borneo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 6 meses de licencia y código de activación, usuario 1 pc"},
    {id: "licencia47", titulo: "Borneo", imagen: "images/borneo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 6 meses de licencia y código de activación, usuario 2 pc"},
    {id: "licencia48", titulo: "Borneo", imagen: "images/borneo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 3 meses de licencia y código de activación, usuario 1 pc"},
    {id: "licencia49", titulo: "Borneo", imagen: "images/borneo.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 3 meses de licencia y código de activación, usuario 2 pc"},
    {id: "licencia50", titulo: "Orion Schematic", imagen: "images/orion.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 12 meses de licencia y código de activación, usuario 1 pc"},
    {id: "licencia51", titulo: "Orion Schematic", imagen: "images/orion.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 12 meses de licencia y código de activación, usuario 2 pc"},
    {id: "licencia52", titulo: "Orion Schematic", imagen: "images/orion.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 6 meses de licencia y código de activación, usuario 1 pc"},
    {id: "licencia53", titulo: "Orion Schematic", imagen: "images/orion.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 3 meses de licencia y código de activación, usuario 1 pc"},
    {id: "licencia54", titulo: "Orion Schematic", imagen: "images/orion.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 1 mes de licencia y código de activación, usuario 1 pc"},
    {id: "licencia55", titulo: "Uni Android Tool (UAT)", imagen: "images/uniandorid.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: " 1 año de licencia, renovación"},
    {id: "licencia56", titulo: "Uni Android Tool (UAT)", imagen: "images/uniandorid.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 año, activación de la herramienta Uni Android Tool (UAT) (excluida)"},
    {id: "licencia57", titulo: "Uni Android Tool (UAT)", imagen: "images/uniandorid.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 año, activación de la herramienta Uni Android (UAT) (instantánea)"},
    {id: "licencia58", titulo: "Uni Android Tool (UAT)", imagen: "images/uniandorid.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses , activación y renovación"},
    {id: "licencia59", titulo: "Uni Android Tool (UAT)", imagen: "images/uniandorid.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 meses , activación y renovación"},
    {id: "licencia60", titulo: "Octoplus Full Digital", imagen: "images/octoplus.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 año de licencia"},
    {id: "licencia61", titulo: "Octoplus Full Digital", imagen: "images/octoplus.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia62", titulo: "Octoplus Full Digital", imagen: "images/octoplus.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 meses de licencia"},
    {id: "licencia63", titulo: "Octoplus Samsung Digital", imagen: "images/octoplussamsung.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 año de licencia"},
    {id: "licencia64", titulo: "Octoplus Samsung Digital", imagen: "images/octoplussam.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia65", titulo: "Octoplus Samsung Digital", imagen: "images/samsung3.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 meses de licencia"},
    {id: "licencia66", titulo: "Octoplus Huawei Digital", imagen: "images/octoplushuawei.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 año de licencia"},
    {id: "licencia67", titulo: "Octoplus Huawei Digital", imagen: "images/octoplushuawei.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia68", titulo: "Octoplus Huawei Digital", imagen: "images/octoplushuawei.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "3 meses de licencia"},
    {id: "licencia69", titulo: "Octoplus LG Digital", imagen: "images/octopluslg1.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 año de licencia"},
    {id: "licencia70", titulo: "Octoplus LG Digital", imagen: "images/octopluslg.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "licencia71", titulo: "Octoplus FRP Digital", imagen: "images/octoplus-frp-6-month-digital-license.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "1 año de licencia"},
    {id: "licencia72", titulo: "Octoplus FRP Digital", imagen: "images/octoplus-frp-6-month-digital-license.jpg", categoria: { nombre: "licencia", id: "licencias"}, precio: 80000, descripcion: "6 meses de licencia"},
    {id: "credito1", titulo: "Chimera Credits", imagen: "images/chimeracredits.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cualquier cantidad"},
    {id: "credito2", titulo: "HXRU Xiaomi", imagen: "images/xiaomihxru.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "( 5 CRD = 1 dispositivo ) ( 10 CRD = 1 Dispositivo MTK )"},
    {id: "credito3", titulo: "Phoenix Service Tool", imagen: "images/phoenix.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Crédito instantáneo (para la contraseña de Nokia Flash frp)"},
    {id: "credito4", titulo: "FRP BOSS Tool", imagen: "images/frp-boss-tool-server-credits.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "créditos cuenta existente SAM/NOKIA FLASH FRP CONTRASEÑA"},
    {id: "credito5", titulo: "FENRIS Samsung", imagen: "images/fenris-credits-existing-user-account.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Créditos a los usuarios existentes"},
    {id: "credito6", titulo: "Xiaomi Key EDL", imagen: "images/keyxiaomi.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Generar clave EDL por token MEDL"},
    {id: "credito7", titulo: "Xiaomi Key EDL", imagen: "images/keyxiaomi.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Generar clave EDL por token REDL"},
    {id: "credito8", titulo: "Xiaomi Key EDL", imagen: "images/keyxiaomi.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Generar clave EDL por token SEDL"},
    {id: "credito9", titulo: "Xiaomi Key", imagen: "images/keyxiaomi.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Transferencia de crédito de Telegrambot"},
    {id: "credito10", titulo: "Xiaomi Key FRP", imagen: "images/keyxiaomi.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Generar clave FRP por token SFRP"},
    {id: "credito11", titulo: "Xiaomi Key FRP", imagen: "images/keyxiaomi.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Generar clave FRP por token MFRP"},
    {id: "credito12", titulo: "Xiaomi Key FRP", imagen: "images/keyxiaomi.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Generar clave FRP por token RFRP"},
    {id: "credito13", titulo: "AUTH Flash Pro", imagen: "images/authflashtool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta existente"},
    {id: "credito14", titulo: "AUTH Flash Pro", imagen: "images/authflashtool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Nuevo usuario"},
    {id: "credito15", titulo: "Panda Tools Unlock SAM LG Moto", imagen: "images/pandatools.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta existente"},
    {id: "credito16", titulo: "Panda Tools Unlock SAM LG Moto", imagen: "images/pandatools.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Nuevo usuario"},
    {id: "credito17", titulo: "Xiaomi Fix Pro Tool", imagen: "images/xiaomifix.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "(MIFIXPRO) Auth Flash / EFS/ Cuenta de Créditos Existentes"},
    {id: "credito18", titulo: "SAM-FRP-Tool", imagen: "images/samfrp.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Créditos, crear nuevo usuario"},
    {id: "credito19", titulo: "SAM-FRP-Tool", imagen: "images/samfrp.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Créditos, usuario existente"},
    {id: "credito20", titulo: "Xyno AUTH Tools", imagen: "images/xynos.jpg.png", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta existente"},
    {id: "credito21", titulo: "Octoplus Server Credits", imagen: "images/octocredits.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "500-1000 créditos cuenta existente"},
    {id: "credito22", titulo: "Octoplus Server Credits", imagen: "images/octocredits.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta nueva"},
    {id: "credito23", titulo: "Xiaomi AUTH Flash", imagen: "images/creditsxiaomi.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Créditos usuario existente"},
    {id: "credito24", titulo: "Xiaomi AUTH Flash", imagen: "images/authflashtool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "CUALCOM / MTK V6 BY TOKEN"},
    {id: "credito25", titulo: "Xiaomi AUTH Flash", imagen: "images/authflashtool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta nueva"},
    {id: "credito26", titulo: "Avatar", imagen: "images/creditosavatar.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Créditos, herramienta de autentificacion de avatar"},
    {id: "credito27", titulo: "Android Multi Tool Credits", imagen: "images/androidmulti.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Créditos"},
    {id: "credito28", titulo: "RTC Tool Credits", imagen: "images/rtctool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Transfiera créditos a la cuenta existente"},
    {id: "credito29", titulo: "DirectFRP", imagen: "images/creditos.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Créditos de directFRP para usuarios existentes "},
    {id: "credito30", titulo: "The Magical Tool", imagen: "images/themagictool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Transferir créditos a cuenta existente"},
    {id: "credito31", titulo: "The Magical Tool", imagen: "images/themagictool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta existente, revendedor masivo mínimo 500"},
    {id: "credito32", titulo: "The Magical Tool Motorola", imagen: "images/themagicmotorola.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Desbloquear, Reparar, Crear Cuenta"},
    {id: "credito33", titulo: "Mwoker Tool", imagen: "images/mworkertool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Nueva cuenta"},
    {id: "credito34", titulo: "Mwoker Tool", imagen: "images/mworkertool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta existente Cantidad de 10-5000"},
    {id: "credito35", titulo: "Mwoker Tool", imagen: "images/mworkertool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Créditos cantidad 1-5000"},
    {id: "credito36", titulo: "CF-Tools", imagen: "images/cftools.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "3 créditos"},
    {id: "credito37", titulo: "Guerra Tool", imagen: "images/guerratool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta existente"},
    {id: "credito38", titulo: "Guerra Tool", imagen: "images/guerratool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta existente, revendedor masivo instantáneo mínimo 500"},
    {id: "credito39", titulo: "Guerra Tool", imagen: "images/guerratool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta nueva"},
    {id: "credito40", titulo: "Fast Unlocker Pro", imagen: "images/fastunlocker.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Nuevo usuario: Samsung, LG, Alcatel, Tinno, etc"},
    {id: "credito41", titulo: "Fast Unlocker Pro", imagen: "images/fastunlocker.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Usuario existente: Samsung, LG, Alcatel, Tinno, etc"},
    {id: "credito42", titulo: "MR-AUTH Tool", imagen: "images/mrauth.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Usuario existente"},
    {id: "credito43", titulo: "Xiaomi Fire Tool", imagen: "images/xiaomifiretool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta existente"},
    {id: "credito44", titulo: "Xiaomi Fire Tool", imagen: "images/xiaomifiretool.jpg", categoria: { nombre: "credito", id: "creditos" }, precio: 60000, descripcion: "Cuenta nueva"},
];

const contenedorProductos = document.getElementById("contenedor-productos");
const tituloProductos = document.querySelector("#titulo-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
const tituloInicio = document.getElementById("titulo-pr");
const infoTienda = document.getElementById("info-tienda");
const paginacionContenedor = document.getElementById("paginacion");

const productosPorPagina = 12;
let paginaActual = 1;
let productosActuales = productos;

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosElegidos.slice(inicio, fin);

    productosPagina.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p>${producto.descripcion}</p>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
    mostrarPaginacion(productosElegidos);
}

function mostrarPaginacion(productosElegidos) {
    const totalPaginas = Math.ceil(productosElegidos.length / productosPorPagina);
    paginacionContenedor.innerHTML = "";

    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement("button");
        boton.innerText = i;
        boton.classList.add("boton-paginacion");
        if (i === paginaActual) {
            boton.classList.add("active");
        }
        boton.addEventListener("click", () => {
            paginaActual = i;
            cargarProductos(productosElegidos);
            window.scrollTo(0, 0);
        });
        paginacionContenedor.appendChild(boton);
    }
}

function toggleVisibilidadElemento(elemento, mostrar) {
    if (elemento) {
        elemento.style.display = mostrar ? '' : 'none';
    }
}

function mostrarProductos(mostrar) {
    toggleVisibilidadElemento(contenedorProductos, mostrar);
    toggleVisibilidadElemento(tituloProductos, mostrar);
    toggleVisibilidadElemento(paginacionContenedor, mostrar);
}

function mostrarInicio(mostrar) {
    toggleVisibilidadElemento(tituloInicio, mostrar);
    toggleVisibilidadElemento(infoTienda, mostrar);
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {

}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        paginaActual = 1;

        if (e.currentTarget.id === "todos") {
            mostrarInicio(false);
            mostrarProductos(true);
            productosActuales = productos;
            cargarProductos(productosActuales);
            tituloProductos.innerText = "Todos los productos";
        } else if (e.currentTarget.id === "inicio") {
            mostrarInicio(true);
            mostrarProductos(false);
        } else if (e.currentTarget.id === "licencias") {
            mostrarInicio(false);
            mostrarProductos(true);
            productosActuales = productos.filter(producto => producto.categoria.id === "licencias");
            cargarProductos(productosActuales);
            tituloProductos.innerText = "Licencias";
        } else if (e.currentTarget.id === "creditos") {
            mostrarInicio(false);
            mostrarProductos(true);
            productosActuales = productos.filter(producto => producto.categoria.id === "creditos");
            cargarProductos(productosActuales);
            tituloProductos.innerText = "Créditos";
        
        }
    });
});

mostrarInicio(true);
mostrarProductos(false);
cargarProductos(productos);

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

const loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
    const userText = document.getElementById("user-text");
    if (userText) {
        userText.textContent = `Bienvenido, ${loggedInUser}`;

        const userLink = document.getElementById("user-link");
        if (userLink) {
            userLink.href = "#"

            userLink.addEventListener("click", function (){
                localStorage.removeItem("loggedInUser");

                window.location.href = "index.html";
            });

        }
    }
}




