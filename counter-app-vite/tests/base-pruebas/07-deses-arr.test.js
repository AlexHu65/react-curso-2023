import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    
    test('retornaArreglo debe retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        // el tobe evalua tambien el tipo de dato
        expect(numbers).toBe(123);

        console.log('type letter', typeof letters);
        console.log('type number', typeof numbers);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
    });

});