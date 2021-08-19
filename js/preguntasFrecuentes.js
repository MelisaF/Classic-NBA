//METODO SLIDETOGGLE
$(".preguntaUno").click(function (e) {  
    e.preventDefault();
    $("#respuestaUno").slideToggle();
});

$(".preguntaDos").click(function (e) {  
    e.preventDefault();
    $("#respuestaDos").slideToggle();
});

$(".preguntaTres").click(function (e) {  
    e.preventDefault();
    $("#respuestaTres").slideToggle();
});