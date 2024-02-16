import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('get saludo debe retornornar Hola fernando', () => {

        const name = 'alex ';

        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);

    });

});