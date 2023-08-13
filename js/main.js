
const carritoDeCompras = [];

const agregarAlCarrito = (nombre, precio, cantidad) => {
    const producto = {
        nombre,
        precio,
        cantidad,
    };
    carritoDeCompras.push(producto);
};

const calcularTotal = () =>
    carritoDeCompras.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

const mostrarCarrito = () => {
    console.log("Productos en el carrito:");
    carritoDeCompras.forEach(producto =>
        console.log(`${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`));
    console.log("Total del carrito: " + calcularTotal());
};

const buscarProducto = nombreProducto =>
    carritoDeCompras.find(producto =>
        producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

const mostrarInformacionProducto = producto => {
    const imagenSrc = producto
        ? `${producto.nombre.toLowerCase()}.jpg`
        : '';
    const resultadoHTML = `
        <div class="producto-card">
            <div class="producto-imagen">
                ${producto ? `<img src="${imagenSrc}" alt="${producto.nombre}">` : ''}
            </div>
            <div class="producto-info">
                ${producto
                        ?`<p>Nombre: ${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad: ${producto.cantidad}</p>`
                    : "Producto no encontrado en el carrito."}
            </div>
        </div>
    `;
    resultadoBusqueda.innerHTML = resultadoHTML;
};

const inputBusqueda = document.getElementById("buscarProducto");
const botonBuscar = document.getElementById("botonBuscar");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");

botonBuscar.addEventListener("click", () => {
    const nombreProductoABuscar = inputBusqueda.value.toLowerCase();
    const productoEncontrado = buscarProducto(nombreProductoABuscar);
    mostrarInformacionProducto(productoEncontrado);
});

const guardarCarritoEnLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};

const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
if (carritoGuardado) {
    carritoDeCompras.push(...carritoGuardado);
}

window.addEventListener("beforeunload", guardarCarritoEnLocalStorage);

mostrarCarrito();

