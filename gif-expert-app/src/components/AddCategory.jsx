import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    //Si requerimos una funcion para manejar el evento
    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    //Prevenir el comportamiento del formulario
    const onSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
        onNewCategory(inputValue);
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={inputValue}
            // Si requerimos solo pasar el valor del evento del cambio 
            onChange={handleInputChange}
            />
        </form>
    )
}