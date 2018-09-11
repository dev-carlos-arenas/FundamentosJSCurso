var persona = {
    nombre: 'Carlos',
    apellido: 'Arenas',
    edad: 28,
    peso: 76.2
};

const AJUSTE_PESO = .2, DIAS_DEL_ANO = 365;

var nuevoPeso = random => random <= .25 ? persona.peso += AJUSTE_PESO : random <= .5 ? persona.peso -= AJUSTE_PESO : 0;

console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso} Kg.`);


for(let i = 1; i <= DIAS_DEL_ANO; i++){
    var random = Math.random();
    nuevoPeso(random);
}


console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(1)} Kg.`);
