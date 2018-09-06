var persona = {
    name: 'Carlos',
    lastName: 'Arenas',
    age: 32,
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

printProfession(persona);