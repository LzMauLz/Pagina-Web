function formatCOP(value) {
    if (typeof value === 'string') {
        value = value.replace(/[^\d,]/g, '').replace(',', '.');
    }
    const numericValue = Number(value);
    if (isNaN(numericValue)) {
    }
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(numericValue);
}


let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
productosEnCarrito = productosEnCarrito.map(producto => ({
    ...producto,
    precio: typeof producto.precio === 'string' ? 
        Number(producto.precio.replace(/[^\d,]/g, '').replace(',', '.')) : 
        Number(producto.precio)
}));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            let detalles = producto.descripcion || "Sin detalles adicionales";
            if (producto.categoria && producto.categoria.id === "creditos" && producto.detallesCreditos) {
                detalles = producto.detallesCreditos;
            }
            const precio = typeof producto.precio === 'string' ? 
                Number(producto.precio.replace(/[^\d,]/g, '').replace(',', '.')) : 
                Number(producto.precio);

            const cantidad = Number(producto.cantidad);

            if (isNaN(precio) || isNaN(cantidad)) {
                console.error('Precio o cantidad no válidos para el producto:', producto);
                return; 
            }
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-detalles">
               <small>Detalles</small>
               <p>${detalles}</p>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${formatCOP(precio)}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${formatCOP(precio * cantidad)}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;

            contenedorCarritoProductos.append(div);
        });
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function vaciarCarrito() {
    productosEnCarrito = [];
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => {
        let precio = producto.precio;
        if (typeof precio === 'string') {
            precio = Number(precio.replace(/[^\d,]/g, '').replace(',', '.'));
        }
        const cantidad = Number(producto.cantidad);
        
        if (isNaN(precio) || isNaN(cantidad)) {
            console.error('Precio o cantidad no válidos para el producto:', producto);
            return acc;
        }
        return acc + (precio * cantidad);
    }, 0);
    contenedorTotal.innerText = formatCOP(totalCalculado);
}

function guardarTotalEnLocalStorage() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    localStorage.setItem("cartTotal", totalCalculado);
}

cargarProductosCarrito();

botonVaciar.addEventListener("click", vaciarCarrito);

botonComprar.addEventListener("click", () => {
    if (productosEnCarrito.length === 0) {
        alert("Tu carrito está vacío. Agrega algunos productos antes de proceder al pago.");
        return;
    }

    guardarTotalEnLocalStorage();
    window.location.href = "checkout.html";
});