var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
};

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
};

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
};

personas = [sacha, alan, martin, dario, vicky, paula];

var acum = 0;

for(let i = 0; i < personas.length; i++){
    acum += personas[i].cantidadDeLibros;
}

console.log(acum);

const ACUMULADOR = 0;

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, ACUMULADOR);

console.log(totalDeLibros);
