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

// You can pass an object for this to be evaluated at the function
function printNameUpper(persona){
    console.log(persona.name.toUpperCase());
}

// This is how you can access to an attribute inside an object without calling all the object
function printNameUpperNoObject( { name } ){
    console.log(name.toUpperCase());
}

printNameUpper(carlos);
printNameUpperNoObject(ana);

// You can call a function where an attribute is going to be processed without the object
printNameUpperNoObject( { name: 'Pepito' } );