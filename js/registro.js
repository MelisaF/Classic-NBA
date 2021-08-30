//EVENTO
const btnRegistro = document.getElementById("infoPersonal");

const newUsuario = [];

btnRegistro.addEventListener("submit", usuarioRegistrado);

function usuarioRegistrado(e) {
    e.preventDefault();
    
    const name = btnRegistro.name.value;
    const adress = btnRegistro.adress.value;
    const email = btnRegistro.email.value;
    const password = btnRegistro.password.value;

    const usuarioNuevo = new Usuario (name, adress, email, password);
    console.log(usuarioNuevo);

        console.log("Haz hecho click en registarse");
        newUsuario.push(usuarioNuevo);
        localStorage.setItem("nuevoUsuario", JSON.stringify(newUsuario));
    }
