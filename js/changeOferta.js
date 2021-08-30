//INTERFAZ
camisetaJquery(saleCamisetas,'#productoSaleCamiseta');

//GENERAR SELECT
selectSaleProducto(equipos, "#filtroOfertaEquipos");

//ASOCIO EL EVENTO
$("#filtroOfertaEquipos").change(function (e) { 
    e.preventDefault();
    const value = this.value;
    $('#productoSaleCamiseta').fadeOut(600,function() {
        if(value =="TODOS") {
            camisetaJquery(saleCamisetas,'#productoSaleCamiseta');
        }
        else if(value =='MIAMI' || value =='MEMPHIS') {
            $("#filtroNoEncontrado").empty();
            $("#filtroNoEncontrado").append(`<p class="textNoEncontrado">NO SE HAN ENCONTRADO RESULTADOS PARA LA BUSQUEDA</p><hr><p class="text-productoDisponible">PRODUCTOS DISPONIBLES:</p>`);
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
    const criterio = this.value.toUpperCase();
    if(criterio != "") {
        const productoEncontrado = camisetas.filter(p => p.nombre.includes(criterio.toUpperCase()) ||
                                                    p.modelo.includes(criterio.toUpperCase()) || 
                                                    p.equipo.includes(criterio.toUpperCase()));
        console.log(productoEncontrado);
        camisetaJquery(productoEncontrado,'#productoSaleCamiseta');
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