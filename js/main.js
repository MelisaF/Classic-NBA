// METODO READY
$(document).ready(function () {
    //OBTENER INFO EN STORAGE
    if("CARRITO" in localStorage) {
        const datosGuardados = JSON.parse(localStorage.getItem("CARRITO"));
        for (const literal of datosGuardados) {
            carrito.push(new Camiseta(literal.img, literal.equipo, literal.nombre, literal.modelo, literal.precio, literal.cantidad,literal.id));
        }
        //SALIDA
        carritoUI(carrito);
    }
        $(".dropdown-menu").click(function (e) { 
        e.stopPropagation();
    });
});
    

    
  //PETICIONES JQUERY
    const URLGET = "data/productos.json";
    $.get(URLGET, function (datos, estado) {
        if(estado == "success") {
            for (const literal of datos) {
                camisetas.push(new Camiseta(literal.img, literal.equipo, literal.nombre, literal.modelo, literal.precio, literal.cantidad,literal.id));
            }
        }
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


window.addEventListener('load', ()=> {
    console.log("Imagenes cargadas");
    $("#indicadorCarga").remove();
    //ANIMACION
    $("#productoCamiseta").fadeIn("slow");
    $("#productoSaleCamiseta").fadeIn("slow");
})

//GENERAR SELECT
selectProducto(equipos, "#filtroEquipos");
//LUEGO ASOCIO EL EVENTO
$("#filtroEquipos").change(function (e) { 
    e.preventDefault();
    const value = this.value;
    $("#productoCamiseta").fadeOut(600,function () {
        if(value == "TODOS") {
            camisetaJquery(camisetas, '#productoCamiseta');
        }
        else if(value =='MIAMI' || value =='MEMPHIS') {
            $("#filtroNoEncontrado").empty();
            $("#filtroNoEncontrado").append(`<p class="textNoEncontrado">NO SE HAN ENCONTRADO RESULTADOS PARA LA BUSQUEDA<p><hr><p class="text-productoDisponible">PRODUCTOS DISPONIBLES:</p>`);
        }
        
        else {
            $("#filtroNoEncontrado").remove();
            const filtrados = camisetas.filter(p => p.equipo == value);
            camisetaJquery(filtrados, '#productoCamiseta');
            $("#filtroNoEncontrado").remove();
        }
        //MOSTRAR UNA VEZ GENERADOS LOS PRODUCTOS
    }).fadeIn(600);
});

//DEFINIR EVENTOS SOBRE EL INPUT DE BUSQUEDA
$("#busquedaProducto").keydown(function (e) { 
    const criterio = this.value.toUpperCase();
    if(criterio != "") {
        const productoEncontrado = camisetas.filter(p => p.nombre.includes(criterio.toUpperCase()) ||
                                                    p.modelo.includes(criterio.toUpperCase()) || 
                                                    p.equipo.includes(criterio.toUpperCase()));
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
        camisetaJquery(precioEncontrado,'#productoCamiseta');
    }
    
});