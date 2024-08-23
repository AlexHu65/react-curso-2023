import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories ] = useState([]);
    const [error, setError ] = useState("");

    const onAddCategory = (newCategory) => {
        
        if(newCategory.trim().length <= 1){
            setError('La categoría no es válida');
            return
        }

        if(categories.includes(newCategory)) {
            setError(`La categoría ${newCategory} ya está guardada`)
        };

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif App / Search</h1>
            <AddCategory 
            // setCategories={setCategories} setError={setError} on es poque esta emitiendo algo
            onNewCategory= {onAddCategory}
            // onNewCategory= {e => onAddCategory(e)}
            />
            {
                error && <small className="danger">{error}</small>
            }
            {
                categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    )
                )
            }
        </>
    );
}