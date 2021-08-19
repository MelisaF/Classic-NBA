//INTERFAZ
camisetaJquery(saleCamisetas,'#productoSaleCamiseta');

//GENERAR SELECT
selectSaleProducto(equipos, "#filtroOfertaEquipos");

//ASOCIO EL EVENTO
$("#filtroOfertaEquipos").change(function (e) { 
    e.preventDefault();
    const value = this.value;
    $('#productoSaleCamiseta').fadeOut(600,function() {
        if(value =="Todos") {
            camisetaJquery(saleCamisetas,'#productoSaleCamiseta');
        }
        else if(value =='Miami' || value =='Memphis') {
            $("#filtroNoEncontrado").empty();
            $("#filtroNoEncontrado").append(`<p class="textNoEncontrado">No se han encontrado resultados para la búsqueda</p><hr><p class="text-productoDisponible">Productos disponibles:</p>`);
        }
        
        else {
            $("#filtroNoEncontrado").remove();
            const filtrados = camisetas.filter(p => p.equipo == value);
            camisetaJquery(filtrados, '#productoCamiseta');
        }
    }).fadeIn(600);
    
});

//EVENTO SOBRE INPUT DE BUSQUEDA OFERTAS
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
        camisetaJquery(precioEncontrado,'#productoSaleCamiseta');
    }
    
});