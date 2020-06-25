//VARIABLES
let puntajeUsuaria = document.querySelector(".puntaje-usuaria p")
let puntosUsuaria = 0;

let puntajeComputadora = document.querySelector(".puntaje-computadora p")
let puntosComputadora = 0;

let botonPiedra = document.querySelector(".piedra")
let botonPapel = document.querySelector(".papel")
let botonTijera = document.querySelector(".tijera")

let resultadoTexto = document.querySelector(".resultado")

let eleccionComputadora = "";
let eleccionUsuaria = "";

let manoUsuaria = document.querySelector(".mano-usuaria")
let manoComputadora = document.querySelector(".mano-computadora")

let tablero = document.querySelector(".tablero")

const obtenerEleccionComputadora = () => {
    let numeroAlAzar = Math.floor(Math.random() * 3)
    
    if (numeroAlAzar == 0) {
        eleccionComputadora = "piedra"
        manoComputadora.src = "./assets/piedra_computadora.png"
    }
    else if (numeroAlAzar == 1) {
        eleccionComputadora = "papel"
        manoComputadora.src = "./assets/papel_computadora.png"
    }
    else {
        eleccionComputadora = "tijera"
        manoComputadora.src = "./assets/tijera_computadora.png"
    }
    console.log(eleccionComputadora)
}

const decidirPuntaje = () => {
    if (eleccionComputadora == "piedra") {

        if (eleccionUsuaria == "piedra") {
            resultadoTexto.textContent = "Empate! 😒"
        }
    
        else if (eleccionUsuaria == "papel") {
            resultadoTexto.textContent = 
            puntosUsuaria++
            puntajeUsuaria.textContent = puntosUsuaria;
            resultadoTexto.textContent = "¡Ganaste! 😍"
        }
        else {
            puntosComputadora++
            puntajeComputadora.textContent = puntosComputadora;
            resultadoTexto.textContent = "Perdiste 🤪"
        }
    }

    if (eleccionComputadora == "papel") {

        if (eleccionUsuaria == "papel") {
            resultadoTexto.textContent = "Empate! 😒"
        }
    
        else if (eleccionUsuaria == "tijera") {
            resultadoTexto.textContent = 
            puntosUsuaria++
            puntajeUsuaria.textContent = puntosUsuaria;
            resultadoTexto.textContent = "¡Ganaste! 😍"
        }
        else {
            puntosComputadora++
            puntajeComputadora.textContent = puntosComputadora;
            resultadoTexto.textContent = "Perdiste 🤪"
        }
    }

    if (eleccionComputadora == "tijera") {

        if (eleccionUsuaria == "tijera") {
            resultadoTexto.textContent = "Empate! 😒"
        }
    
        else if (eleccionUsuaria == "piedra") {
            puntosUsuaria++
            puntajeUsuaria.textContent = puntosUsuaria;
            resultadoTexto.textContent = "¡Ganaste! 😍"
        }
        else {
            puntosComputadora++
            puntajeComputadora.textContent = puntosComputadora;
            resultadoTexto.textContent = "Perdiste 🤪"
        }
    }
}
        
botonPiedra.onclick = () => {
    resultadoTexto.textContent = "¿Quién ganará? 🤔"
    manoUsuaria.src = "./assets/piedra_ada.png"
    manoComputadora.src = "./assets/piedra_computadora.png"
    tablero.classList.add("jugando");
    setTimeout(() => {
        tablero.classList.remove("jugando");
        eleccionUsuaria = "piedra";
        manoUsuaria.src = "./assets/piedra_ada.png"
        obtenerEleccionComputadora();
        decidirPuntaje();
    }, 2000)
    
}
  
botonPapel.onclick = () => {
    resultadoTexto.textContent = "¿Quién ganará? 🤔"
    manoUsuaria.src = "./assets/piedra_ada.png"
    manoComputadora.src = "./assets/piedra_computadora.png"
    tablero.classList.add("jugando");
    setTimeout(() => {
        tablero.classList.remove("jugando");
        eleccionUsuaria = "papel";
        manoUsuaria.src = "./assets/papel_ada.png"
        obtenerEleccionComputadora();
        decidirPuntaje();
    }, 2000)
}
  
botonTijera.onclick = () => {
    resultadoTexto.textContent = "¿Quién ganará? 🤔"
    manoUsuaria.src = "./assets/piedra_ada.png"
    manoComputadora.src = "./assets/piedra_computadora.png"
    tablero.classList.add("jugando");

    setTimeout(() => {
        tablero.classList.remove("jugando");
        eleccionUsuaria = "tijera";
        manoUsuaria.src = "./assets/tijera_ada.png"
        obtenerEleccionComputadora(); 
        decidirPuntaje();
    }, 2000)
}