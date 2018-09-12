const ALTO = 1.8;

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        // Esta línea de código hace que puedas usar nombre y apellido en lugar de this.nombre y this.apellido.
        var { nombre, apellido} = this;
        console.log(`Hola ${nombre} ${apellido}`);
        if(fn){
            fn(nombre, apellido, false);
        }
    }

    soyAlto(){
        return this.altura > ALTO;
    }
}

// La palabra extends genera la herencia de otra clase(prototipo)
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura, lenguaje){
        // se debe usar la funcion super para usar los atributos que se usan en el padre
        super(nombre, apellido, altura);
        this.lenguaje = lenguaje;
    }

    saludar(fn) {
        // Esta línea de código hace que puedas usar nombre y apellido en lugar de this.nombre y this.apellido.
        var { nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if(fn){
            fn(nombre, apellido, true);
        }
    }
}

const imprimirAltura = persona => persona.soyAlto() ? console.log(`${persona.nombre} es Alto`) : console.log(`${persona.nombre} no es Alto`);


function responderSaludo( nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`no sabia que eras desarrollador`);
    }
}


var carlos = new Persona('Carlos', 'Arenas', 1.63);
var diego = new Persona('Diego', 'Marroquin', 1.9);
var ana = new Desarrollador('Ana', 'Morales', 1.53);
var oscar = new Desarrollador('Oscar', 'Arenas', 1.81);

carlos.saludar(responderSaludo);
diego.saludar(responderSaludo);
ana.saludar(responderSaludo);
oscar.saludar(responderSaludo);