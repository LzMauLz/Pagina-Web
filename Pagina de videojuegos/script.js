const carrito = document.getElementById('carrito');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

let agregarCarrtioBtns= document.querySelectorAll(' .agregar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    actualizarBotones();
    carrito.addEventListener('click',eliminarElemento);
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    document.querySelectorAll('tabs input[type="radio"]').forEach(tab=>{
        tab.addEventListener('change',actualizarBotones);
    });
}

function comprarElemento(e) {
    e.preventDefault();
    console.log("Clic en 'Agregar al carrito' detectado");
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.closest('.product, .product2, .oferts-item');
        const id=e.target.getAttribute('data-id');
        console.log("Elemento encontrado:", elemento);
        console.log("ID encontrado:", id);
        leerDatosElemento(elemento,id);
    } 
    else {
        console.log("No se hizo clic en 'Agregar al carrito'");
    }
}

function leerDatosElemento (elemento, id) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3')? elemento.querySelector('h3').textContent: "Sin título",
        precio: elemento.querySelector('.precio').textContent,
        id: id
    };

    console.log("Datos del elemento:",infoElemento);
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
     <img src="${elemento.imagen}" witch=100>
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
        <a href="#" class="borrar" data-id="${elemento.id}">X </a>
    </td>
    `;

    lista.appendChild(row);
    console.log("Elemento agregado al carrito:", row);
}

function eliminarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar')) {
        e.target.closest('tr').remove();
        console.log("Elemento eliminado del carrito");
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    console.log("Carrito vaciado");
}

function actualizarBotones(){
    agregarCarrtioBtns.forEach(btn=>btn.removeEventListener('click',comprarElemento));
    agregarCarrtioBtns = document.querySelectorAll(' .agregar-carrito');
    agregarCarrtioBtns.forEach(btn=>btn.addEventListener('click',comprarElemento));
}



document.addEventListener('DOMContentLoaded', () => {
    new Swiper('#swiper1', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
    });

    new Swiper('#swiper2', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
    });

    new Swiper('#swiper3', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
    });

});
  
  
