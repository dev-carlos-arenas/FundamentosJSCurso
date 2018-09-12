var persona = {
    nombre: 'Carlos',
    apellido: 'Arenas',
    edad: 28,
    peso: 76.2
};

const AJUSTE_PESO = .2, PESO_DESEADO = persona.peso - 3;
const comeMucho = () => Math.random() < .3;
const haceDeporte =() => Math.random() < .4;

var diasTranscurridos = 1;

const nuevoPeso = function () {
    debugger;
    if(comeMucho()){
        persona.peso += AJUSTE_PESO;
    }
    if(haceDeporte()){
        persona.peso -= AJUSTE_PESO;
    }
    diasTranscurridos++;
};

while(persona.peso > PESO_DESEADO){
    nuevoPeso();
}

console.log(`Pasaron ${diasTranscurridos} para que ${persona.nombre} baraja 3Kg.`);