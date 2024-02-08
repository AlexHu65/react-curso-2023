import  heroes, {owners}  from "../data/heroes";
import  { heroesSimple }  from "../data/heroes";

const getHeroeByIdArr = (id, arr) => {
    return arr.find((hero) => hero.id === id);
}

const getHeroeById = (id) => {
    return heroes.find((hero) => hero.id === id);
}

const getHeroeByIdSimple = (id) => heroes.find(hero => hero.id === id);

const getHeroesByOwner = (owner) => heroes.filter(hero => hero.owner === owner);

const getHero = (hero) => {
    return hero.id === 2;
}

console.log('Usando scope local', getHeroeByIdArr(2, heroes));
console.log('Usando solo el id con el heroes global', getHeroeById(2));
console.log('Usando un callback directamente en el global', heroes.find(getHero) );
console.log('Usando una sentencia mas simple', getHeroeByIdSimple(3));
console.log('Usando filter by owner MARVEL', getHeroesByOwner(owners[0]));
console.log('Usando filter by owner DC', getHeroesByOwner(owners[1]));

