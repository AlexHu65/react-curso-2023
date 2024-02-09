import { getHeroeById, getHeroesByOwner } from "../bases/08-importaciones";
//las funciones de promesas reciben un callback con 2 argumentos, resolve y reject
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        const heroe = getHeroeById(12);

        if(heroe){
            resolve(heroe);
        }

        reject('Heroe no encontrado');
    }, 2000);
});

promise.then((hero) => {
    console.log('Hero sync', hero);
}).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => 
    
    new Promise((resolve, reject) => {

    setTimeout(() => {

            const heroe = getHeroeById(id);
        
            if(heroe){
                resolve(heroe);
            }
        
            reject('Heroe no encontrado async');
        }, 2000);
    });


//Controlando los argumentos
getHeroeByIdAsync(3).then(hero => console.log('Hero async', hero))
.catch(err => console.warn(err));

// Simplificado
getHeroeByIdAsync(2).then(console.log)
.catch(console.warn);
