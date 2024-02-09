// Arreglos en JS
//const arreglo = new Array();

//Para crear arreglos literales es usando llaves cuadradas
const arreglo = [1,2,3,4];
//No es recomendable agregar objetos al arreglo con push, es mejor usar spread
/*arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);*/

//let arreglo2 = arreglo;
//arreglo2.push(5);
let arreglo2 = [...arreglo,5];
//Tenemos el mismo problema que con los obejetos literales, los arreglos mutan

//El operador map rompe la referencia y nos regresa un nuevo arreglo
let arreglo3 = arreglo2.map(i => i * 2);
let arreglo4 = arreglo2.filter(i => (i > 2));

console.log('array 1', arreglo);
console.log('array 2', arreglo2);
console.log('array 3', arreglo3);
console.log('array 4', arreglo4);