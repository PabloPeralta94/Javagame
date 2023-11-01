var configTeclado = {prvent_repeat:true};

var eventoTeclado = new window.keypress.Listener(this, configTeclado);


function pulsaA() {
    console.log('has pulsado a');
}

function pulsaAB() {
    console.log('has pulsado a y b a la vez');
}

function ataqueEspecial() {
    console.log("has lanzado ataque especial");
}





eventoTeclado.simple_combo('a', pulsaA);
eventoTeclado.simple_combo('a b', pulsaAB);
eventoTeclado.sequence_combo('up down a b', ataqueEspecial);