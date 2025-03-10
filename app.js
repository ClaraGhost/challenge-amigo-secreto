let amigos = [];

function agregarAmigo() {
    var amigo = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");

    if(amigo.value == ''){
        alert('por favor ingresa un nombre');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';
        listaAmigos.innerHTML = '';

        for(i = 0; i < amigos.length; i++) {
            let lista = document.createElement('li');
            lista.innerText = amigos[i];
            listaAmigos.appendChild(lista);
        }
    }
}

function sortearAmigo() {
    var amigoSecreto = document.getElementById("resultado");
    var seleccionAleatoria = Math.floor(Math.random()*amigos.length);
    if(amigos.length == 0) {
        amigoSecreto.innerHTML = "Agrega a unos cuantos amigos"
    } else {
        amigoSecreto.innerHTML = "Te toco de amigo secreto a " + amigos[seleccionAleatoria];
    console.log(amigoSecreto);
    }
}