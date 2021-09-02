//INTERFAZ
camisetaJquery(camisetas,'#productoCamiseta');
//GENERAR SELECT
selectProducto(equipos, "#filtroEquipos");

//FUNCION PARA GENERAR SELECT
function selectProducto(lista, selector) {
    $(selector).empty();
    //RECORRER LISTA
    lista.forEach(element => {
        $(selector).append(`<option value ='${element}'> ${element}</option>`);
    });
        $(selector).prepend(`<option value ='TODOS'> TODOS</option>`);
}

//ASOCIO EL EVENTO
$("#filtroEquipos").change(function (e) { 
    e.preventDefault();
    const value = this.value;
    $("#productoCamiseta").fadeOut(600,function () {
        if(value === 'TODOS') {
            camisetaJquery(camisetas, '#productoCamiseta');
        }
        else if(value =='MIAMI' || value =='MEMPHIS') {
            $("#filtroNoEncontrado").empty();
            $("#filtroNoEncontrado").append(`<p class="textNoEncontrado">NO SE HAN ENCONTRADO RESULTADOS PARA LA BUSQUEDA<p><hr><p class="text-productoDisponible">PRODUCTOS DISPONIBLES:</p>`);
            $("#filtroNoEncontrado").fadeOut(3000);
        }
        
        else {
            $("#filtroNoEncontrado").remove();
            const filtrados = camisetas.filter(p => p.equipo == value);
            camisetaJquery(filtrados, '#productoCamiseta');
        }
        //MOSTRAR UNA VEZ GENERADOS LOS PRODUCTOS
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