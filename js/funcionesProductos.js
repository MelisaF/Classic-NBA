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
                                <a href="#" id="${camiseta.id}" class="btn btn-outline-dark btnCompra">COMPRAR</a>
                            </div>
                    </div>
                    <hr>`);
    }
    //EVENTO
    $('.btnCompra').on("click", comprarCamiseta);
}
//MANJADOR DE COMPRAR PRODUCTOS
function comprarCamiseta(e) {
    //PREVENIR REFRESCO AL PRESIONAR ENLANCE
    e.preventDefault();
    Swal.fire({
        title: 'Se ha añadido al carrito'
    });

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

function carritoUI(camisetas){
    //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD
    $("#carritoCantidad").html(camisetas.length);
    //VACIAR EL INTERIOR DEL CARRITO
    $("#carritoProductos").empty();
    for (const camiseta of camisetas) {
        $("#carritoProductos").append(componenteCarrito(camiseta));
    }
    //AGREGAR TOTAL
    $('#carritoProductos').append(`<p id="totalCarrito">TOTAL $${totalCarrito(camisetas)}</p>`)
    //ASOCIACION DE EVENTOS
    $('.btn-delete').on('click', eliminarCarrito);

    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });
}
//FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTRO HTML
function componenteCarrito(camiseta) {
    return`<div>
                <p> MODELO:${camiseta.modelo}
                    <span>$ ${camiseta.precio}</span>
                    <span> ${camiseta.cantidad} u.</span>
                    <span>$ ${camiseta.subtotal()}</span>
                    <a id='${camiseta.id}' class="btn btn-outline-dark btn-delete">x</a>
                </p>
            </div`;   
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
//AGREGAR CANTIDAD
function addCantidad() {
    let camiseta = carrito.find(p => p.id == this.id);
    camiseta.agregarCantidad(1);
    $(this).parent().children()[1].innerHTML = camiseta.cantidad;
    $(this).parent().children()[2].innerHTML = camiseta.subtotal();
    //MODIFICAR TOTAL
    $('#totalCarrito').html(`TOTAL ${totalCarrito(camisetas)}`);
    //GUARDAR EN STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
}
//RESTAR CANTIDAD
function subCantidad() {
    let camiseta = carrito.find(p => p.id == this.id);
    if(camiseta.cantidad > 1) {
        camiseta.agregarCantidad(-1);
        let registroUI = $(this).parent().children();
        registroUI[1].innerHTML = camiseta.cantidad;
        registroUI[2].innerHTML = camiseta.subtotal();
        //MODIFICAR TOTAL
        $('#totalCarrito').html(`TOTAL ${totalCarrito(camisetas)}`);
        //GUARDAR EN STORAGE
        localStorage.setItem("CARRITO", JSON.stringify(carrito));
    }
}
//FUNCION PARA OBTENER EL PRECIO TOTAL DEL CARRITO
function totalCarrito (carrito) {
    let total = 0;
    carrito.forEach(p => total += p.subtotal ());
    return total;  
}
