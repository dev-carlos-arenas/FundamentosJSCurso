const ALTO = 1.8;

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    }

    soyAlto(){
        return this.altura > ALTO;
    }
}

// La palabra extends genera la herencia de otra clase(prototipo)
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura, lenguaje){
        super(nombre, apellido, altura);
        this.lenguaje = lenguaje;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

const imprimirAltura = persona => persona.soyAlto() ? console.log(`${persona.nombre} es Alto`) : console.log(`${persona.nombre} no es Alto`);



// var carlos = new Persona('Carlos', 'Arenas', 1.63);
// var diego = new Persona('Diego', 'Marroquin', 1.9);
// var ana = new Persona('Ana', 'Morales', 1.53);
// var oscar = new Persona('Oscar', 'Arenas', 1.81);


