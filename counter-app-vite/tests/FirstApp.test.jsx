import { render } from '@testing-library/react';
import { FirstApp } from '../src/components/FirstApp';
 
describe('Pruebas en <FirstApp/>' , () => {

    test('debe hacer hacer match con el snapshot', () => {

        const title = 'Este es el titulo'

        render(<FirstApp title={title}/>);
        
    });
});