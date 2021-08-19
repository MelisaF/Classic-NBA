// METODO READY
$(document).ready(function () {
    console.log("Se cargó el DOM");
    
    //JQUERY Y SELECTORES
    const botones = $('.btn-compra');
    for (const boton of botones) {
    boton.onclick = comprarCamiseta;
    }
    const botonesSale = $('.btn-compraSale');
    for (const boton of botonesSale) {
    boton.onclick = comprarSaleCamiseta;
    }
    //OBTENER INFO EN STORAGE
    if("CARRITO" in localStorage) {
        const datosGuardados = JSON.parse(localStorage.getItem("CARRITO"));
        for (const literal of datosGuardados) {
            carrito.push(new Camiseta(literal.img, literal.equipo, literal.nombre, literal.modelo, literal.precio, literal.cantidad,literal.id));
        }
        //SALIDA
        carritoUI(carrito);
    }
    
    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });

    //PETICIONES JQUERY
    const URLGET = "data/productos.json";
    $.get(URLGET, function (datos, estado) {
        if(estado == "success") {
            for (const literal of datos) {
                camisetas.push(new Camiseta(literal.img, literal.equipo, literal.nombre, literal.modelo, literal.precio, literal.cantidad,literal.id));
            }
        }
        console.log(camisetas);
                
        //GENERO INTERFAZ DE CAMISETAS
        camisetaJquery(camisetas, '#productoCamiseta');
    });

    const URLGET2 = "data/ofertas.json";
    $.get(URLGET2, function (datos, estado) {
        if(estado == "success") {
            for (const literal of datos) {
                saleCamisetas.push(new Camiseta(literal.img, literal.equipo, literal.nombre, literal.modelo, literal.precio, literal.cantidad,literal.id));
            }
        }
        //GENERO INTERFAZ DE CAMISETAS
        camisetaJquery(saleCamisetas, '#productoSaleCamiseta');
    });
});
//METODO LOAD
window.addEventListener("load", ()=> {
    $("#indicadorCarga").remove();
    //ANIMACION
    $("#productoCamiseta").fadeIn("slow");
    $("#productoSaleCamiseta").fadeIn("slow");
    
});
//GENERAR SELECT
selectProducto(equipos, "#filtroEquipos");
//CHANGE PRODUCTOS
$("#filtroEquipos").change(function (e) { 
    e.preventDefault();
    const value = this.value;
    $("#productoCamiseta").fadeOut(600,function () {
        if(value == "Todos") {
            camisetaJquery(camisetas, '#productoCamiseta');
        }
        else if(value =='Miami' || value =='Memphis') {
            $("#filtroNoEncontrado").empty();
            $("#filtroNoEncontrado").append(`<p class="textNoEncontrado">No se han encontrado resultados para la búsqueda<p><hr><p class="text-productoDisponible">Productos disponibles:</p>`);
        }
        
        else {
            $("#filtroNoEncontrado").remove();
            const filtrados = camisetas.filter(p => p.equipo == value);
            camisetaJquery(filtrados, '#productoCamiseta');
        }
    }).fadeIn(600);
});


//EVENTO SOBRE INPUT DE BUSQUEDA PRODUCTOS
$("#busquedaProducto").keydown(function (e) { 
    const criterio = this.value;
    if(criterio != "") {
        const productoEncontrado = camisetas.filter(p => p.nombre.includes(criterio)||  p.modelo.includes(criterio) ||  p.equipo.includes(criterio));
        console.log(productoEncontrado);
        camisetaJquery(productoEncontrado,'#productoCamiseta');
    }
});

//DEFINIR EVENTOS SOBRE INPUT DE PRECIOS
$(".inputPrecio").change(function (e) { 
    console.log(this.value);
    const min = $("#minProducto").val();
    const max = $("#maxProducto").val();
    if((min > 0) && (max >0)) {
        const precioEncontrado = camisetas.filter(p => p.precio >= min && p.precio <= max);
        console.log(precioEncontrado);
        camisetaJquery(precioEncontrado,'#productoCamiseta');
    }
    
});