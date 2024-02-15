test('esta prueba no debe fallar', () => {
    if( 1 === 0){
        throw new Error('no se puede dividir entre 0');
    }
});