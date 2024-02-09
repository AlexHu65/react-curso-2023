//Desestructuracion de objetos, asignacion desestructurante
const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron man",
}

const { nombre, edad, clave} = persona;

//Agregamos una propiedad al objeto
persona.rango = 'Lider';

//crear una nueva variable asignadole un valor del objeto
const  { nombre:nombre2 } = persona;

const persona2 = { ...persona };

persona2.nombre = "Steve";

const { nombre:nombre3 } =  persona2 

console.log('nombre', nombre);
console.log('nombre 2', nombre2);
console.log('nombre 3', nombre3);

//USANDO FUNCIONES
// se puede desestructurar un el argumento usando llaves en la declaracion de la funcion 
const retornaPersona = ({nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre);
    console.log(edad);
    console.log(rango);
}

retornaPersona(persona2);


//usando nueva fucncion

const retornaPersona2 = ({ nombre, edad, clave}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latitude: {
            lat: 2343.09,
            lng: 2000.01
        }
    }
}

const {nombreClave, anios, latitude: { lat, lng }} = retornaPersona2(persona);

console.log('avenger', nombreClave, anios);
console.log('latitud', lat,lng);