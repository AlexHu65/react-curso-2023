//Desestructurar arreglo

const arreglo = [ 'Goku', 'Vegueta', 'Trunks' ];

const [ , p2, ...rest ] = arreglo;

//console.log('goku', p1);
console.log('vegeta', p2);
console.log('rest', rest);

const retornaArreglo = () => ['ABC', 123];


const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

const valorRetorno  = (valor) => [valor, () => console.log(`Hola mundo soy ${valor}`)];

const [nombre, setNombre]= valorRetorno('Goku');

console.log('nombre', nombre);
setNombre()