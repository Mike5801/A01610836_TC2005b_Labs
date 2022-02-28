var precioHtmlProducto1 = 1679;
var precioHtmlProducto2 = 732;
var precioHtmlProducto3 = 1999;
var totalPrecio = 0;
var totalIva = 0;
var iva = 0.16;

document.getElementById("precio_producto1").innerHTML = "$" + precioHtmlProducto1 + ".00";
document.getElementById("precio_producto2").innerHTML = "$" + precioHtmlProducto2 + ".00";
document.getElementById("precio_producto3").innerHTML = "$" + precioHtmlProducto3 + ".00";

boton_agregarCarrito1.onclick = () => {
    let input_cantidadProducto1 = document.getElementById("cantidad_producto1").value;
    let precioProducto1 = precioHtmlProducto1;
    let totalPrecioProducto1 = 0;
    let ivaTotalProducto1 = 0;

    totalPrecioProducto1 = input_cantidadProducto1*precioProducto1;
    ivaTotalProducto1 = totalPrecioProducto1*iva;

    totalPrecio = totalPrecio + totalPrecioProducto1;
    totalIva = totalIva + ivaTotalProducto1;

    document.getElementById("iva").innerHTML = totalIva;
    document.getElementById("total_pagar").innerHTML = totalPrecio;
}

boton_agregarCarrito2.onclick = () => {
    let input_cantidadProducto2 = document.getElementById("cantidad_producto2").value;
    let precioProducto2 = precioHtmlProducto2;
    let totalPrecioProducto2 = 0;
    let ivaTotalProducto2 = 0;

    totalPrecioProducto2 = input_cantidadProducto2*precioProducto2;
    ivaTotalProducto2 = totalPrecioProducto2*iva;

    totalPrecio = totalPrecio + totalPrecioProducto2;
    totalIva = totalIva + ivaTotalProducto2;

    document.getElementById("iva").innerHTML = totalIva;
    document.getElementById("total_pagar").innerHTML = totalPrecio;
}

boton_agregarCarrito3.onclick = () => {
    let input_cantidadProducto3 = document.getElementById("cantidad_producto3").value;
    let precioProducto3 = precioHtmlProducto3;
    let totalPrecioProducto3 = 0;
    let ivaTotalProducto3 = 0;

    totalPrecioProducto3 = input_cantidadProducto3*precioProducto3;
    ivaTotalProducto3 = totalPrecioProducto3*iva;

    totalPrecio = totalPrecio + totalPrecioProducto3;
    totalIva = totalIva + ivaTotalProducto3;

    document.getElementById("iva").innerHTML = totalIva;
    document.getElementById("total_pagar").innerHTML = totalPrecio;
}

boton_reset.onclick = () => {
    totalIva = 0;
    totalPrecio = 0;

    document.getElementById("iva").innerHTML = totalIva;
    document.getElementById("total_pagar").innerHTML = totalPrecio;
}