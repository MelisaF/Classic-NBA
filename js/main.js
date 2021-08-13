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
            carrito.push(new Camiseta(literal.id, literal.modelo, literal.nombre,literal.precio));
        }
        //SALIDA
        carritoUI(carrito);
    }
    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });
});
window.addEventListener("load", ()=> {
    $("#indicadorCarga").remove();
});
//INSTANCIAR OBJETOS Y ASOCIAR AL ARRAY GLOBAL
camisetas.push(new Camiseta('imgCamisetas/atlanta11.jpg', "Youth Atlanta", "Hawks Trae Young", "Nike Red 2019/20 Swingman Jersey", 1.888, 1));
camisetas.push(new Camiseta('imgCamisetas/celticsBird.webp', "Boston Celtics", "Larry Bird Mitchell & Ness Kelly", "Green Hardwood Classics", 1.999, 2));
camisetas.push(new Camiseta('imgCamisetas/bulls24.jpg', "Youth Chicago Bulls", "Lauri Markkanen", "Nike Red Swingman Jersey - Icon Edition", 1.788, 3)); 
camisetas.push(new Camiseta('imgCamisetas/lakers23.webp', "Los Angeles Lakers", "LeBron James", "Nike Gold 2020/21 Swingman Jersey", 1.999, 4));
camisetas.push(new Camiseta('imgCamisetas/lakersNegra.webp', "Los Angeles Lakers", "LeBron James", "Nike Black City Edition Swingman Jersey", 2.333, 5));
camisetas.push(new Camiseta('imgCamisetas/milwaukeeAllen.webp',"Milwaukee Bucks", "Allen Mitchell", "Black Hardwood Classics Swingman Jersey", 2.899, 6));


saleCamisetas.push(new Camiseta('imgCamisetas/memphisSale.webp', "Memphis", "Morat", "Nike Blue Team Swingman Jersey", 1.433, 7 ));
saleCamisetas.push(new Camiseta('imgCamisetas/miamiSale.webp', "Miami", "Jimmy Butler", "Nike Black Swingman Jersey", 1.255, 8 ));
saleCamisetas.push(new Camiseta('imgCamisetas/pippenSale.webp', "Chicago Bulls", "Pippen Mitchell", "White 1995-96 Hardwood Classics Reload Swingman Jersey", 1.255, 9 ));
saleCamisetas.push(new Camiseta('imgCamisetas/celticsSale.webp', "Celtics", "Larry Bird Mitchell", "Green Hardwood Classics Wildlife Swingman Jersey", 1.111, 10 ));
saleCamisetas.push(new Camiseta('imgCamisetas/atlantaSale.webp', "Atlanta", "Your name", "Nike Black Swingman Custom Jersey", 1.222, 11 ));
saleCamisetas.push(new Camiseta('imgCamisetas/milwaukeeSale.webp', "Milwaukee Bucks", "Your name", "Nike Black Swingman Jersey", 1.111, 12 ));
console.log(saleCamisetas);
//GENERO INTERFAZ DE CAMISETAS
camisetaJquery(camisetas, '#productoCamiseta');
camisetaJquery(saleCamisetas, '#productoSaleCamiseta');
