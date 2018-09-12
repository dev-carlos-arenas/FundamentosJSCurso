const ALTO = 1.8;

function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn();
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludo = function(){
    console.log(`Hola ${this.nombre} ${this.apellido}`);
};

Persona.prototype.esAlto = function() {
    return this.altura > ALTO;
};

const imprimirAltura = persona => persona.esAlto() ? console.log(`${persona.nombre} es Alto`) : console.log(`${persona.nombre} no es Alto`);

function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    // this.altura = altura;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludo = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
};

// var carlos = new Persona('Carlos', 'Arenas', 1.63);
// var diego = new Persona('Diego', 'Marroquin', 1.9);
// var ana = new Persona('Ana', 'Morales', 1.53);
// var oscar = new Persona('Oscar', 'Arenas', 1.81);


