const productos = [
    {
        id: "licencia",
        titulo: "Licencia 01",
        imagen: "images/Licencia unlock.jpg",
        categoria: {
            nombre: "licencia",
            id: "licencias"
        },
        precio: 80000
    },
    {
        id: "tarjeta",
        titulo: "Licencia 02",
        imagen: "images/Licencia unlock.jpg", 
        categoria: {
            nombre: "tarjeta",
            id: "tarjetas"
        },
        precio: 60000
    }
];

const contenedorProductos = document.getElementById("contenedor-productos");
contenedorProductos.style.display = 'none'
const tituloProductos = document.querySelector("#titulo-productos");
tituloProductos.style.display = 'none'
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
const tituloInicio = document.getElementById('titulo-pr');
const infoTienda = document.getElementById('info-tienda');


function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => { 

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class= "producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class= "producto-detalles">
            <h3 class= "producto-titulo">${producto.titulo}</h3>
            <p class= "producto-precio">$${producto.precio}</p>
            <button class= "producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
}

cargarProductos(productos);

function toggleVisibilidadElemento(elemento, mostrar) {
    elemento.style.display = mostrar ? '' : 'none'
}

function mostrarProductos(mostrar){
    toggleVisibilidadElemento(contenedorProductos, mostrar)
    toggleVisibilidadElemento(tituloProductos, mostrar)
}

function mostrarInicio(mostrar){
    toggleVisibilidadElemento(tituloInicio, mostrar)
    toggleVisibilidadElemento(infoTienda, mostrar)
}

function mostrarInicio(mostrar){
    toggleVisibilidadElemento(tituloInicio, mostrar)
    toggleVisibilidadElemento(infoTienda, mostrar)
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id === "todos") {
            mostrarInicio(false)
            mostrarProductos(true)
            cargarProductos(productos);
            tituloProductos.innerText = "Todos los productos";
        } 
        if (e.currentTarget.id === "inicio") {
            mostrarInicio(true)
            mostrarProductos(false)
        }
        if (e.currentTarget.id === "licencias"){
            mostrarInicio(false)
            mostrarProductos(true)
            cargarProductos([productos[0]]);
            tituloProductos.innerText = "Licencias";
        }
        if (e.currentTarget.id === "tarjetas"){
            mostrarInicio(false)
            mostrarProductos(true)
            cargarProductos([productos[1]]);
            tituloProductos.innerText = "Tarjetas";
        }

    })
});

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