class Camiseta {
    constructor (img, equipo, nombre, modelo, precio, cantidad, id) {
        this.img = img;
        this.equipo = equipo;
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.id = parseInt(id);
    }
    agregarCantidad(valor) {
        this.cantidad += valor;
    }
    subtotal(){
        return this.cantidad * this.precio;
    }
}


