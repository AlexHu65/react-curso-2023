const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Ney York',
        zip: 5000,
        ltn: 0.098098,
        lng: 0.320,

    }
}

// podemos crear un nuevo objeto literal con la siguiente sentencia: 

//console.log({ persona });

//console.log(persona);

//nos imprime una tabla en la consola
//console.table(persona);

//Mutacion de objeto y pasar por referencia

//No estamos clonando el objeto, mas bien lo pasamos por referencia al espacio en memoria

//console.log('Persona sin mutar', persona);

//Esta asignacion no es correcta!!
const persona2 = persona;

//persona2.nombre = 'Peter';

//console.log('persona', persona2);

//console.log('Persona mutada', persona);
//lo que pasa aqui es que el valor de persona cambio al momento de asignarle un nuevo nombre
//porque se pasa por referencia al espacio de persona y no al valor de persona 2

//la manera correcta de hacer eso es asi:
const copiaPersona = { ...persona };

console.log('Copia de la persona', copiaPersona);

copiaPersona.nombre = 'Nuevo nombre';

//console.log('Nueva persona con nombre cambiado', copiaPersona);

console.log('Objeto original', persona);
console.log('Copia con nombre cambiado', copiaPersona);