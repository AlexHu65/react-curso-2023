import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories ] = useState([{id: 1, value:'One punch'}]);
    const [error, setError ] = useState("");

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} setError={setError}/>
            {
                error && <small className="danger">{error}</small>
            }
            {/* <button onClick={onAddCategory}> Agregar </button> */}
            <ol>
                {categories.map((category) => <li key={category.id}>{category.value}</li>)}
            </ol>
        </>
    );
}