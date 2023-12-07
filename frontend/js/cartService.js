const cuentaCarritoElement = document.getElementById("cuenta-carrito");



function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("carrito")) || [];
    const indiceProducto = memoria.findIndex((item) => item.id === producto.id);

    if (indiceProducto === -1) {
        producto.cantidad = 1;
        memoria.push(producto);
    } else {
        memoria[indiceProducto].cantidad++;
    }

    localStorage.setItem("carrito", JSON.stringify(memoria));
    actualizarNumeroCarrito();
}

function restarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("carrito")) || [];
    const indiceProducto = memoria.findIndex((item) => item.id === producto.id);

    if (indiceProducto !== -1) {
        memoria[indiceProducto].cantidad--;
        if (memoria[indiceProducto].cantidad === 0) {
            memoria.splice(indiceProducto, 1);
        }
        localStorage.setItem("carrito", JSON.stringify(memoria));
    }

    actualizarNumeroCarrito();
}

function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("carrito")) || [];
    let cuenta = 0;

    if (memoria.length > 0) {
        cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    }

    cuentaCarritoElement.innerText = cuenta;
}

function reiniciarCarrito() {
    localStorage.removeItem("carrito");
    actualizarNumeroCarrito();
}

actualizarNumeroCarrito();