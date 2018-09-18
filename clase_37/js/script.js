function factorial (base){
  if(!this.cache){
    this.cache = {};
  }

  if(this.cache[base]){
    console.log(`Ya existia en cache ${base}`);
    return this.cache[base]
  }

  if(base === 1){
    return 1;
  }

  this.cache[base] = base * factorial(base-1);
  return this.cache[base];
}

console.log(factorial(6));