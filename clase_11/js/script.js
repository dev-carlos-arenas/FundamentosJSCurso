var persona = {
    name: 'Carlos',
    lastName: 'Arenas',
    edad: 2,
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

function adult(evaluatePersona){
    return evaluatePersona.edad > 17;
}

function printAdult(person){
    let mayorEdad = adult(person);
    if(mayorEdad){
        document.write(`<p> ${person.name} es mayor de edad tiene ${person.edad}</p>`);
    }else {
        document.write(`<p>${person.name} no es mayor de edad solo tiene ${person.edad}</p>`);
    }
}


printAdult(persona);
printAdult(carlos);
printAdult(ana);