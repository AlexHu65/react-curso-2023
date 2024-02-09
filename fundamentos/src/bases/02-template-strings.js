// El uso de los backtick ` nos permite usar variables dentro de otra o de sentencias diferentes
const nombre = 'Manuel Alejandro';

const apellidos = 'Chavez Nuñez';

const nombreCompleto = `${nombre} ${apellidos}`;


const saludar = (nombre) => {
    return nombre;
}

console.log(`Hola mi nombre es : ${ saludar(nombreCompleto) }`);