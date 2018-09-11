const ADULT_AGE = 18;

var persona = {
    name: 'Carlos',
    lastName: 'Arenas',
    edad: 32,
    engenieer: true,
    cooker: false,
    singer: false,
    dj: false,
    guitarMan: false,
    drone: true
};

var carlos = {
    name: 'Carlos',
    edad: 19
};

var ana = {
    name: 'Ana',
    edad: 7
};


// Arrow function
const adult = ({ edad }) => edad >= ADULT_AGE;


function printAdult(person){
    if(adult(person)){
        document.write(`<p> ${person.name} es mayor de edad tiene ${person.edad}</p>`);
    }else {
        document.write(`<p>${person.name} no es mayor de edad solo tiene ${person.edad}</p>`);
    }
}

// Function and if statement in one line
const permitirAcceso = (nuevaPersona) => adult(nuevaPersona) ? console.log("Adelante") : console.log("Acceso denegado") ;


printAdult(persona);
printAdult(carlos);
printAdult(ana);

permitirAcceso(persona);
permitirAcceso(carlos);
permitirAcceso(ana);