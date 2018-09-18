const divisor = 4;
const dividendo = 20;
var resultadoGlobal = 0;

function recursividad(resultado){
  resultado = resultado - divisor;
  if(resultado >= 0){
    recursividad(resultado);
    return resultadoGlobal += 1;
  }
}


function divisionEntera(dividendo, divisor){
  if(dividendo < divisor){
    return 0;
  }

  return 1 + divisionEntera(dividendo - divisor, divisor);
}

console.log(divisionEntera(dividendo, divisor));