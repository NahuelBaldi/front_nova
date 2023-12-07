const contenedorTarjetas = document.getElementById("cart-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");
const volver = document.getElementById("Volver")

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en el carrito */
function crearTarjetasProductosCarrito() {
    contenedorTarjetas.innerHTML = "";

    // Obtiene los productos del carrito desde el almacenamiento local
    const productos = JSON.parse(localStorage.getItem("carrito")) || [];

    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            const nuevaBicicleta = document.createElement("div");
            nuevaBicicleta.classList = "tarjeta-producto";
            nuevaBicicleta.innerHTML = `
                <h3>${producto.nombre}</h3>
                <span>$${producto.precio}</span>
                <div>
            <div class="botones">
                <button class="boton">
                    <span class="simbolo">-</span>
                </button> 
                    <span class="cantidad">${producto.cantidad}</span>
                <button class="boton">
                    <span class="simbolo">+</span>
                </button>   
            </div>
            `;

            contenedorTarjetas.appendChild(nuevaBicicleta);

            nuevaBicicleta
                .getElementsByTagName("button")[0]
                .addEventListener("click", () => {
                    restarAlCarrito(producto);
                    crearTarjetasProductosCarrito();
                    actualizarTotales();
                });

            nuevaBicicleta
                .getElementsByTagName("button")[1]
                .addEventListener("click", () => {
                    agregarAlCarrito(producto);
                    crearTarjetasProductosCarrito();
                    actualizarTotales();
                });
        });
    }
    revisarMensajeVacio();
    actualizarTotales();
    actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("carrito")) || [];
    let cantidad = 0;
    let precio = 0;

    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            cantidad += producto.cantidad;
            precio += parseFloat(producto.precio) * producto.cantidad;
        });
    }

    cantidadElement.innerText = cantidad;
    precioElement.innerText = precio.toFixed(2); // Redondea el precio a 2 decimales
    revisarMensajeVacio();

    if (precio === 0) {
        reiniciarCarrito();
    }
}

document.getElementById("reiniciar").addEventListener("click", () => {
    reiniciarCarrito();
    crearTarjetasProductosCarrito();
    actualizarTotales();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0);
    totalesContainer.classList.toggle("escondido", !productos || productos.length === 0);
}

volver.addEventListener("click",(e)=>{
e.preventDefault()
window.history.back();
})