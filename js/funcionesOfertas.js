//SECTOR SALE
function camisetaJquery(camisetas, id) {
    $(id).empty();
    for (const camiseta of camisetas) {
        $(id).append(`<div class="card" style="width: 18rem;">
                            <img src="${camiseta.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${camiseta.equipo}</h5>
                                <p class="card-text">${camiseta.nombre}</p>
                                <p class="card-text">$ ${camiseta.precio}</p>
                                <a href="#" id="${camiseta.id}" class="btn btn-outline-dark btnCompraSale">COMPRAR</a>
                            </div>
                    </div>
                    <hr>`);
    }
    //EVENTO
    $('.btnCompraSale').on("click", comprarSaleCamiseta);
}
//MANJADOR DE COMPRAR PRODUCTOS
function comprarSaleCamiseta(e) {
    //PREVENIR REFRESCO AL PRESIONAR ENLANCE
    e.preventDefault();
    //OBTENER ID DEL BOTON PRESIONADO
    const saleCamisetaID = e.target.id;
    //OBTENER OBJETO DEL PRODUCTO CORRESPONDIENTE AL ID
    const saleSeleccionado = saleCamisetas.find(p => p.id == saleCamisetaID);
    carrito.push(saleSeleccionado);
    //STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
    //GENERAR SALIDA
    carritoUI(carrito);
}

function carritoUI(saleCamisetas){
    //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD
    $("#carritoCantidad").html(saleCamisetas.length);
    //VACIAR EL INTERIOR DEL CARRITO
    $("#carritoProductos").empty();
    for (const saleCamiseta of saleCamisetas) {
        $("#carritoProductos").append(componenteCarrito(saleCamiseta));
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
                <a id='${camiseta.id}' class="btn btn-outline-dark btn-delete">x</a>
            </div>`;   
}

//FUNCTION DELETE
function eliminarCarrito(e) {
    console.log(e.target.id);
    //FILTER DELETE
    let posicion = carrito.findIndex(producto => producto.id == e.target.id);
    delete carrito[posicion];
    carrito.splice(posicion, 1);
    //ACTUALIZAR INTERFAZ
    carritoUI(carrito);
    //STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
}

