//FUNCTION CAMISETAS
function camisetaJquery(camisetas, id) {
    for (const camiseta of camisetas) {
        $(id).append(`<div class="card" style="width: 18rem;">
                            <img src="${camiseta.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${camiseta.equipo}</h5>
                                <p class="card-text">${camiseta.nombre}</p>
                                <p class="card-text">$ ${camiseta.precio}</p>
                                <a href="#" id="${camiseta.id}" class="btn btn-outline-dark btn-compra">Comprar</a>
                            </div>
                    </div>
                    <hr>`);
    }
}

function comprarCamiseta(e) {
    e.preventDefault();
    const camisetaID = e.target.id;
    const seleccionado = camisetas.find(p => p.id == camisetaID);
    carrito.push(seleccionado);
    //STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
    carritoUI(carrito);
}

function carritoUI(camisetas){
    $("#carritoCantidad").html(camisetas.length);
    $("#carritoProductos").empty();
    for (const camiseta of camisetas) {
        $("#carritoProductos").append(componenteCarrito(camiseta));
    }
    //ASOCIACION DE EVENTOS
    $('.btn-delete').on('click', eliminarCarrito)
    
    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });
}

function componenteCarrito(camiseta) {
    return`<div class="camisetaSeleccionada">
                <p >ID: ${camiseta.id}</p>
                <p>Modelo:${camiseta.modelo}</p>
                <span class="badge rounded-pill bg-secondary">$ ${camiseta.precio}</span>
                <button id='${camiseta.id}' class="btn-delete">x</button>
            </div>`;   
}

//FUNCTION DELETE
function eliminarCarrito(e) {
    console.log(e.target.id);
    //FILTER DELETE
    let posicion = carrito.findIndex(producto => producto.id == e.target.id);
    carrito.splice(posicion, 1);
    //ACTUALIZAR INTERFAZ
    carritoUI(carrito);
    //STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
}



