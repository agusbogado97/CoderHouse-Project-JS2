const carritoDeCompras = [];

function agregarAlCarrito(nombre, precio, cantidad) {
    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };
    carritoDeCompras.push(producto);
}

agregarAlCarrito("Remera", 2500, 2);
agregarAlCarrito("Pantalon", 8000, 1);
agregarAlCarrito("Medias", 500, 4);

function calcularTotal() {
    return carritoDeCompras.reduce((total, producto) =>
        total + producto.precio * producto.cantidad, 0);
}

function mostrarCarrito() {
    console.log("Productos en el carrito:");
    carritoDeCompras.forEach(producto =>
        console.log(`${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`));
    console.log("Total del carrito: " + calcularTotal());
}

function buscarProducto(nombreProducto) {
    return carritoDeCompras.find(producto =>
        producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
}

function mostrarInformacionProducto(producto) {
    producto
        ? console.log(`Información del producto encontrado:\n${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`)
        : console.log("Producto no encontrado en el carrito.");
}

// Referencias a elementos del DOM
const inputBusqueda = document.getElementById('buscarProducto');
const botonBuscar = document.getElementById('botonBuscar');
const resultadoBusqueda = document.getElementById('resultadoBusqueda');

// Agrega evento al botón de búsqueda
botonBuscar.addEventListener('click', () => {
    const nombreProductoABuscar = inputBusqueda.value.toLowerCase();
    const productoEncontrado = buscarProducto(nombreProductoABuscar);

    if (productoEncontrado) {
        const imagenSrc = `${productoEncontrado.nombre.toLowerCase()}.jpg`;
        const resultadoHTML = `
            <div class="producto-card">
                <div class="producto-imagen">
                    <img src="${imagenSrc}" alt="${productoEncontrado.nombre}">
                </div>
                <div class="producto-info">
                    <p>Nombre: ${productoEncontrado.nombre}</p>
                    <p>Precio: ${productoEncontrado.precio}</p>
                    <p>Cantidad: ${productoEncontrado.cantidad}</p>
                </div>
            </div>
        `;
        resultadoBusqueda.innerHTML = resultadoHTML;
    } else {
        resultadoBusqueda.innerHTML = 'Producto no encontrado en el carrito.';
    }
});

// Mostrar el carrito inicial y agregar aquí otras llamadas necesarias
mostrarCarrito();