import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas de async await' , () => {

    test('getImage debe retornar URL de la imágen', async() => {

        const url  = await getImagen();

        expect(typeof url).toBe('string');

    });

});