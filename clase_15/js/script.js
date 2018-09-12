var contador = 0;

const llueve = () => Math.random() < .25;

do{
    contador++;
}while(!llueve());

var leyenda = contador < 2 ? 'vez' : 'veces';

console.log(`Fui a ver si llovió ${contador} ${leyenda}`);