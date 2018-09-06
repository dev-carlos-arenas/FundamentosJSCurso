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
}

function printProfession(person){
    console.log(`${person.name} is: `);
    if(person.engenieer){
        console.log('Engenieer');
    }
    if(person.cooker){
        console.log('Cooker');
    }
    if(person.singer){
        console.log('Singer');
    }
    if(person.dj){
        console.log('Dj');
    }
    if(person.guitarMan){
        console.log('Guitar Man');
    }
    if(person.drone){
        console.log('OMG Drone');
    }

}

var carlos = {
    name: 'Carlos',
    edad: 19
};

var ana = {
    name: 'Ana',
    edad: 7
};


function printAdult(person){
    if(person.edad > 17){
        document.write(`<p> ${person.name} es mayor de edad tiene ${person.edad}</p>`);
    }else {
        document.write(`<p>${person.name} no es mayor de edad solo tiene ${person.edad}</p>`);
    }
}

printProfession(persona);

printAdult(persona);
printAdult(carlos);
printAdult(ana);