const carlos = {
  nombre: 'Carlos',
  apellido: 'Arenas',
  edad: 32
};

// const cumpleanos = persona => persona.edad++;

const cumpleanosInmutable = persona => ({ ...persona, edad: persona.edad + 1 });