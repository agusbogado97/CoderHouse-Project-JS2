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
    let total = 0;
    for (const producto of carritoDeCompras) {
        total += producto.precio * producto.cantidad;
    }
    return total;
    }

function mostrarCarrito() {
    console.log("Productos en el carrito:");
    for (const producto of carritoDeCompras) {
        console.log(`${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`);
    }
    console.log("Total del carrito: " + calcularTotal());
}

function buscarProducto(nombreProducto) {
    const productoEncontrado = carritoDeCompras.find(producto =>
        producto.nombre.toLowerCase() == nombreProducto.toLowerCase());
    return productoEncontrado;
}

function mostrarInformacionProducto(producto) {
    if (producto) {
        console.log("Información del producto encontrado:");
        console.log(`${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`);
    } else {
        console.log("Producto no encontrado en el carrito.");
    }
}

mostrarCarrito();

const nombreProductoABuscar = prompt("Ingrese el nombre del producto que desea buscar:");
const productoEncontrado = buscarProducto(nombreProductoABuscar.toLowerCase());
mostrarInformacionProducto(productoEncontrado);

//Carrito de compras, con la finalidad de mostrar el producto buscado, su nombre, precio y cantidad de stock.