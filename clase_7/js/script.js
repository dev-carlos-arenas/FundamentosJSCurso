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
    
    // If you put teh same name as te attribute inside brackets you will declar a variable with that name and get the attribute from the object
    var { name } = persona;
    console.log(name);
}

printNameUpper(carlos);
printNameUpper(ana);

// You can call a function where an attribute is going to be processed without the object
printNameUpper( { name: 'Pepito' } );