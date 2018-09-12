var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

personas = [sacha, alan, martin, dario, vicky, paula];

const pasarAlturaACms = persona => {
    // persona.altura *= 100;
    // Regresa los valores de persona y se asignan a personaCms pero como apunta a personas este arreglo también se cambia
    // return persona;

    // Crea un nuevo arreglo en posición diferente de memoria y ya no apunta a personas
    return {
        ...persona,
        altura: persona.altura * 100
    };
};


// también se puede escribir así el arrow function
// const pasarAlturaACms = persona => ({
//     ...persona,
//     altura: persona.altura * 100
// });


var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);
console.log(personas);