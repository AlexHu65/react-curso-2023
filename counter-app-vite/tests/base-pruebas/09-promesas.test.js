import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas sobre 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un heroe ', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then((hero) => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });
    });


    test('getHeroeByIdAsync encontrar un error', (done) => {
        const id = 1000;
        // to be se usa para evaluar primitivos o respuestas simples
        getHeroeByIdAsync(id)
            .catch((err) => {

                expect(err).toBe(`No se pudo encontrar el héroe con el ID ${id}`);
                
                done();
            });
    });

});