//FUNCION PARA GENERAR SELECT
function selectProducto(lista, selector) {
    $(selector).empty();
    //RECORRER LISTA
    lista.forEach(element => {
        $(selector).append(`<option value ='${element}'> ${element}</option>`);
    });
    $(selector).prepend("<option value ='Todos'> Todos</option>");
}

//FUNCION PARA GENERAR SELECT SECTION OFERTAS
function selectSaleProducto(listaSale, selectorSale) {
    $(selectorSale).empty();
    //RECORRER LISTA
    listaSale.forEach(ele => {
        $(selectorSale).append(`<option value ='${ele}'> ${ele}</option>`);
    });
    $(selectorSale).prepend("<option value ='Todos'> Todos</option>");
}