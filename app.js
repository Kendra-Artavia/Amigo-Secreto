// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Variable para almecenar los nombres de los amigos*/
let listaAmigos = []



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function validadEntrada(nombre){
    if(nombre && /^[a-zA-Z]+$/.test(nombre)) {
        return true;
    }
    return false;
}

function mostrarLista(){
    let listaHTML = listaAmigos.map(function(amigo) {
        return `<li>${amigo}</li>`;
    }).join('');
    return listaHTML; 
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById('mensajeError');
    notificacion.textContent = mensaje;
    notificacion.style.display = 'block';
}


function agregarAmigo() {
    asignarTextoElemento('p','');
    let amigo = document.getElementById('nuevoAmigo').value;
    console.log("Nombre de amigo:",amigo);
    if(validadEntrada(amigo)){
        listaAmigos.push(amigo)
        asignarTextoElemento('ul', '');
        asignarTextoElemento('ul', mostrarLista());
        document.getElementById('nuevoAmigo').value = ''; 
    }
    else{
        alert('ERROR: Por favor, inserte un nombre.');
        document.getElementById('nuevoAmigo').value = '';
    }
    amigo= "";
    return;
}

function generarAmigoSecreto() {
    let AmigoGenerado = Math.floor(Math.random() * listaAmigos.length);
    return listaAmigos[AmigoGenerado];

}

function sortearAmigo(){
    if(listaAmigos.length > 0){
        let amigoSecreto = generarAmigoSecreto(); 
        asignarTextoElemento('ul', '');
        asignarTextoElemento('#resultado', `<li>${amigoSecreto}</li>`); // Usa # para seleccionar el id
    }
    else{
        alert('ERROR: Por favor, inserte un nombre.');
        document.getElementById('nuevoAmigo').value = '';
    }
    return;
}
