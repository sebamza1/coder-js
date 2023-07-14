window.onload = function () {
    let nombre = "";
    let subtotal = 0;
    let total = 0;
    let descuento = 0;
    let recargo = 0;
    let codigoBuscado = "";

    const productos = [
        { codigo: "T01", nombre: "teclado", precio: 28000 },
        { codigo: "T02", nombre: "teclado", precio: 11500 },
        { codigo: "M01", nombre: "mouse", precio: 7800 },
        { codigo: "M02", nombre: "mouse", precio: 6300 },
        { codigo: "A01", nombre: "auricular", precio: 30000 },
        { codigo: "A02", nombre: "auricular", precio: 25000 }
    ];

    function cuotas(op, iva) {
        switch (op) {
            case "A":
                descuento = (iva * 0.05);
                total = iva - descuento;
                alert("\n El SubTotal: " + iva + "\n Su descuento es de: " + descuento.toFixed(2) + "\n El total a pagar es de: " + total.toFixed(2));
                break;
            case "B":
                recargo = (iva * 0.15);
                total = iva + recargo;
                alert("\n El SubTotal: " + iva + "\n Su recargo es de: " + recargo.toFixed(2) + "\n El total a pagar es de: " + total.toFixed(2) + "\ndos cuotas de: " + (total / 2).toFixed(2));
                break;
            case "C":
                recargo = (iva * 0.2);
                total = iva + recargo;
                alert("\n El SubTotal: " +iva + "\n Su recargo es de: " + recargo.toFixed(2) + "\n El total a pagar es de: " + total.toFixed(2) + "\ntres cuotas de: " + (total / 3).toFixed(2));
                break;
        }
    }

    alert("\b BIENVENIDO A DELTA-GAMER");

    while (codigoBuscado != "SALIR") {

        codigoBuscado = prompt("Ingrese el codigo del producto deseado. \n escriba *SALIR* para terminar su compra").toLocaleUpperCase();

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].codigo == codigoBuscado) {
                subtotal += productos[i].precio;
                alert("Precio Producto: " + productos[i].precio + "\nSubTotal: " + subtotal);
                break;
            }
        }
    }

    iva = subtotal * 1.21;

    alert("Total Compra: " + subtotal + "\nTotal Compra + IVA: " + iva);

    let op = prompt("Elija Forma de Pago: \n A- Efectivo 5% descuento \n B- Dos Cuotas 15% recargo \n C- Tres cuotas 20% de interes").toLocaleUpperCase();

    cuotas(op, iva);

    alert("GRACIAS POR SU COMPRA \n DELETA-GAMER");

};