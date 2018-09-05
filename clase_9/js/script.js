var x = 4, y = '4';

// this will return true because is not evaluating the type of data
console.log(y == x);

// this will return false because is evaluating the type of data
console.log(y === x)

var object1 = {
    name: 'Carlos'
}

var object2 = {
    name: 'Carlos'
}

// this ask for the reference to the variable that we are using thats why returns false in both cases
console.log(object1 == object2);
console.log(object1 === object2);

var object3 = object1;

// as object3 is pointing to object1 will retun true in both cases
console.log(object1 == object3);
console.log(object1 === object3);