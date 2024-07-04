let numeroSecreto = 0;
let intentos = 0;
let numeroGenerado = 0;
let listaSorteada = [];
let numeroMaximo = 10;

function intentoDeUsuario(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario === numeroSecreto){
        intentoDeUsuario("p", `Acertaste el número secreto en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
        else {
            if(numeroDeUsuario > numeroSecreto){
                intentoDeUsuario("p", "El número es menor");
            }
            else {
                intentoDeUsuario("p", "El número es mayor");
            }
            limpiarCaja();
            intentos++;
        }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generandoNumeroSecreto(){
    numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaSorteada.length == numeroMaximo) {
        intentoDeUsuario("p", `Todos los números del 1 al ${numeroMaxismo} han sido sorteados`);
    }
    else {
    if(listaSorteada.includes(numeroGenerado)){
        return generandoNumeroSecreto();
    }
    else {
        listaSorteada.push(numeroGenerado);
        console.log(numeroGenerado);
        console.log(listaSorteada);
        return numeroGenerado;
    }
}
}

function elementosIniciales(){
    intentoDeUsuario("h1", "Juego del número secreto!");
    intentoDeUsuario("p", `Indica un número del 1 al ${numeroMaximo}!`);
    limpiarCaja();
    numeroSecreto = generandoNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //mensajes iniciales
    //caja vacia
    //generar numero random
    elementosIniciales();
    //boton deshabilitado
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}

elementosIniciales();

