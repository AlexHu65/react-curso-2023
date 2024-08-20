import { getGifs } from "../services/gifs";
import { useState, useEffect } from "react";

export const GifGrid = ({category}) => {
    
    const [gifs, setGifs] = useState([]);

    //para consumir el fetch debe ser asincrona porque regresa un await, es la unica forma de manejar
    // este tipo de funciones
    const fetchData = async () => {
        
        const response = await getGifs();
        
        const {data} = await response.json();
        
        const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
            id,
            title,
            url
        }));

        setGifs(gifs);
    };

    
    useEffect(() => {
        fetchData();
        // este arreglo en el use useEffect, nos indica que se ejecuta una sola vez
    }, []);

    return (
        <>
        <h2>{category}</h2>
        {
            gifs.map(gif => (
                    <span>{gif.title}</span>
                )
            )
            }
        </>
    )

}