import { useState } from "react"

export const AddCategory = ({setCategories, setError}) => {

    const [inputValue, setInputValue] = useState("");

    //Si requerimos una funcion para manejar el evento
    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    //Prevenir el comportamiento del formulario
    const onSubmit = (e) =>{
        
        e.preventDefault();
        
        if(inputValue.trim().length <= 1){
            setError('La categoría no es válida');
            return
        }

        setError('');
        setInputValue('');
        setCategories(categories => [{id:categories.id + 1, value:inputValue}, ...categories]);
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