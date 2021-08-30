//FUNCION PARA GENERAR LA INTERFAZ DE PRODUCTOS CN JQUERY
function camisetaJquery (camisetas,id) { 
    $(id).empty();
    for (const camiseta of camisetas) {
        $(id).append(`<div class="card" style="width: 18rem;">
                            <img src="${camiseta.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${camiseta.equipo}</h5>
                                <p class="card-text">${camiseta.nombre}</p>
                                <p class="card-text">$ ${camiseta.precio}</p>
                                <a href="#" id="${camiseta.id}" class="btn btn-outline-dark btnCompra">COMPRAR</a>
                            </div>
                    </div>
                    <hr>`);
    }
    //EVENTO
    $('.btnCompra').on("click", comprarCamiseta);
    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });
}

//MANEJADOR DE COMPRAR DE PRODUCTOS
function comprarCamiseta(e) {
    //PREVENIR REFRESCO AL PRESIONAR ENLACES
    e.preventDefault();
    //OBTENER ID DEL BOTON PRESIONADO
    const camisetaID = e.target.id;
    //OBTENER OBJETO DEL PRODUCTO CORRESPONDIENTE AL ID
    const seleccionado = camisetas.find(p => p.id == camisetaID);
    
    carrito.push(seleccionado);
    //STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
    //GENERAR SALIDA
    carritoUI(carrito);
}

//FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO
function carritoUI(camisetas){
    //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD
    $("#carritoCantidad").html(camisetas.length);
    //VACIAR EL INTERIOR EL CARRITO
    $("#carritoProductos").empty();
    for (const camiseta of camisetas) {
        $("#carritoProductos").append(componenteCarrito(camiseta));
    }
    //ASOCIACION DE EVENTOS
    $('.btn-delete').on('click', eliminarCarrito); 

    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });
}
//FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTRO HTML
function componenteCarrito(camiseta) {
    return`<div>
                <p >ID: ${camiseta.id}</p>
                <p>MODELO:${camiseta.modelo}</p>
                <span>$ ${camiseta.precio}</span>
                <a id="${camiseta.id}" class= "btn btn-outline-dark btn-delete">x<a>
            </div>`;   
}


//FUNCTION DELETE
function eliminarCarrito(e) {
    e.preventDefault();
    //FILTER DELETE
    let posicion = carrito.findIndex(producto => producto.id == e.target.id);
    delete carrito[posicion];
    carrito.splice(posicion, 1);
    //ACTUALIZAR INTERFAZ
    carritoUI(carrito);
    //STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
}



