const celest = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');

var secuencia = Math.round(Math.random((4-1)+1));

class Juego {
  constructor() {
    this.inicializar();
  }

  inicializar(){
    btnEmpezar.classList.add('hide');
  }
}

function empezarJuego(){
  var juego = new Juego();
}