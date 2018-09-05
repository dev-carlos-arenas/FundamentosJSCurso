// You can pass an object for this to be evaluated at the function
function printNameUpper(persona){
    
    // If you put teh same name as te attribute inside brackets you will declar a variable with that name and get the attribute from the object
    var { name, age } = persona;
    console.log(`Mi nombre es ${name} y tengo ${age} años`);
}

function birthday(persona){
    // This object points to the original and the value of the object recieved change
    persona.age++;
}

function newObjectBirthday(persona){
    // This returns a completely new object and doesn´t modify the original object
    return {
        ...persona,
        age: persona.age +1
    }
}

var carlos = {
    name: 'Carlos',
    lastName: 'Arenas',
    age: 32
}

var ana = {
    name:'Ana',
    lastName: 'Morales',
    age: 28
}

printNameUpper(carlos);
printNameUpper(ana);

// You can call a function where an attribute is going to be processed without the object
printNameUpper( { name: 'Pepito', age: 34} );