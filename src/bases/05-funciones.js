// funciones, estas funciones ya no deben usarse en ECMAS6
/*function saluda(nombre) {
    return `Hola ${nombre}`;
}*/


//Las funciones siempre deben ser usadas con const, para evitar sobreerscribirlas
const saluda = (nombre) => {
    return `Hola ${nombre}`;
}

// funciones return, sin llaves
const saluda2 = (nombre) => `Hola ${nombre}`;
const saluda3 = () => `Hola mundo`;

console.log(saluda('Manuel'));
console.log(saluda2('Alex'));
console.log(saluda3());


const getUser = () => {
    return {
        uid: '09U9',
        user: 'Man189'
    }
}

//Para regresar solo un objeto desde esa funcion se debe poner un parentesis
const getUser2 = () => ({
    uid: '09U9',
    user: 'Man189'
})

console.log(getUser());
console.log('User 2',getUser2());

//Tarea

const getUsuarioActivo = (nombre) => ({
    uid: '09U9',
    user: nombre
})

const usuarioActivo = getUsuarioActivo('ManuelALEX208');
console.log(usuarioActivo);