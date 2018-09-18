function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24;
    // Math.abs nos da el número absoluto retira los negativos
    const diferencia = Math.abs(fecha1 - fecha2);

    return Math.floor(diferencia / unDia);
  }

const hoy = new Date();
const nacimiento = new Date(1986, 7, 11);
console.log(`Carlos tiene ${diasEntreFechas(hoy, nacimiento)} días cumplidos`);