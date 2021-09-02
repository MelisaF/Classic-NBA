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

    //METODO LOAD
window.addEventListener('load', ()=> {
    console.log("Imagenes cargadas");
    $("#indicadorCarga").remove();
    //ANIMACION
    $("#productoCamiseta").fadeIn("slow");
})
