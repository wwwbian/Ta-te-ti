const casillas = document.querySelectorAll('.casilla');
const resultado = document.getElementById('resultado');
let tablero = ['', '', '', '', '', '', '', '', ''];
let perdiste = false;
let jugador1Nombre = '';
let jugador2Nombre = '';
let jugador1Simbolo = '';
let jugador2Simbolo = '';
let jugadorActual = 1;
const botonAbrir = document.getElementById("AbrirVentana");
const ventanaEmergente = document.getElementById("VentanaEmergente");
const botonCerrar = document.getElementById("CerrarVentana");
const nombreJugador1 = document.getElementById("nombreJugador1");
const nombreJugador2 = document.getElementById("nombreJugador2");
const simbolo = document.getElementById("simbolo");
const nombreJugadorActual = document.getElementById("NombreJugadorActual");
const simboloJugadorActual = document.getElementById("SimboloJugadorActual");

botonAbrir.addEventListener("click", function() {
    ventanaEmergente.classList.remove("oculta");
});

botonCerrar.addEventListener("click", function() {
    ventanaEmergente.classList.add("oculta");
    jugador1Nombre = nombreJugador1.value;
    jugador2Nombre = nombreJugador2.value;
    jugador1Simbolo = simbolo.value;
    jugador2Simbolo = jugador1Simbolo === 'X' ? 'O' : 'X';
    nombreJugadorActual.textContent = jugador1Nombre;
    simboloJugadorActual.textContent = jugador1Simbolo;
    jugador = jugador1Simbolo; 
});


function jugar(i) {
    if (!perdiste && tablero[i] === '') {
        tablero[i] = jugador;
        casillas[i].textContent = jugador;
        if (ComprobarGanador()) {
            resultado.textContent = `${jugador1Nombre} Haz ganado felicitaciones :D`;
            perdiste = true;
        } else 
        if (tablero.indexOf('') === -1) {
            resultado.textContent = 'A quedado en empate :o';
            perdiste = true;
        } else {
            jugador = jugador === jugador1Simbolo ? jugador2Simbolo : jugador1Simbolo;
            nombreJugadorActual.textContent = jugador === jugador1Simbolo ? jugador1Nombre : jugador2Nombre;
            simboloJugadorActual.textContent = jugador;
        }
    }
}


function ComprobarGanador() {
const CombinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

    for (const combinaciones  of CombinacionesGanadoras) {
    const [a, b, c] = combinaciones;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        return true;
    }
}

    return false;
}

function ReiniciarJuego () {
    tablero = ['', '', '', '', '', '', '', '', ''];
    casillas.forEach((casilla) => (casilla.textContent = ''));
    jugador = 'X';
    resultado.textContent = '';
    perdiste = false;
}

casillas.forEach((casilla, i) => {
    casilla.addEventListener('click', () => jugar(i));
});

Reiniciar.addEventListener('click', ReiniciarJuego);

