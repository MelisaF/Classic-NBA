//SECCION FORMULARIO CONTACTO
const miRegistro = document.getElementById("infoIniciar");

const contactosRegistrados = [];

miFormulario.addEventListener("submit", validarForm); 

function validarForm(e) {
    e.preventDefault();
    
const nombre = miFormulario.nombre.value;
const apellido = miFormulario.apellido.value;
const telefono = miFormulario.telefono.value;
const email = miFormulario.email.value;
const comentario = miFormulario.comentario.value;

const nuevo = new Contacto (nombre, apellido, telefono, email, comentario);
console.log(nuevo);


console.log("Haz hecho click en el boton enviar formulario");
contactosRegistrados.push(nuevo);
localStorage.setItem("usuario", JSON.stringify(contactosRegistrados));
}