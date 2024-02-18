import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Prueba en 08-imp-exp', () => { 

    test('Get hero por ID debe retornar un Heroe por id', () => { 

        const id = 1;

        const hero = getHeroeById(id);
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });


    test('Get hero por ID debe retornar UNDEFINED si no existe el Heroe', () => { 

        const id = 100;

        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();

    });


    test('Get hero por owner debe regresar 3 de DC y 2 de marvel', () => { 

        const dc = 'DC';

        const marvel = 'Marvel';

        const marvelHeroes = getHeroesByOwner(marvel);

        const dcHeroes = getHeroesByOwner(dc);

        expect(dcHeroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(dcHeroes.length).toBe(3);
        expect(marvelHeroes.length).toBe(2);

        //segunda solucion

        expect(dcHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === dc ));
        
        expect(marvelHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === marvel ));


    });

});