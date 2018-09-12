const ALTO = 1.8;

function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludo = function(){
    console.log(`Hola ${this.nombre} ${this.apellido}`);
};

Persona.prototype.esAlto = () => {
    debugger;
    return this.Persona.altura > ALTO;
};

const imprimirAltura = persona => persona.esAlto() ? console.log(`${persona.nombre} es Alto`) : console.log(`${persona.nombre} no es Alto`);

var carlos = new Persona('Carlos', 'Arenas', 1.63);
var diego = new Persona('Diego', 'Marroquin', 1.9);
var ana = new Persona('Ana', 'Morales', 1.53);
var oscar = new Persona('Oscar', 'Arenas', 1.81);


