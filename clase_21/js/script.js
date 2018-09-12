const ALTO = 1.8;

function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludo = function(){
    console.log(`Hola ${this.nombre} ${this.apellido}`);
};

Persona.prototype.esAlto = function(){
    if(this.altura > ALTO){
        console.log(`${this.nombre} es Alto`);
    }else {
        console.log(`${this.nombre} no es Alto`);
    }
};

var carlos = new Persona('Carlos', 'Arenas', 1.63);
var diego = new Persona('Diego', 'Marroquin', 1.9);
var ana = new Persona('Ana', 'Morales', 1.53);
var oscar = new Persona('Oscar', 'Arenas', 1.81);
