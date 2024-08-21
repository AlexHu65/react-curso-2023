import { getGifs } from "../services/gifs";
import { useState, useEffect } from "react";
import { Card } from "./Card";

export const GifGrid = ({category}) => {
    
    const [images, seImages] = useState([]);

    //para consumir el fetch debe ser asincrona porque regresa un await, es la unica forma de manejar
    // este tipo de funciones
    const fetchData = async () => {
        
        const response = await getGifs(category);
        
        const { data } = await response.json();
        
        const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
            id,
            title,
            url
        }));

        seImages(gifs);
    };

    
    useEffect(() => {
        fetchData();
        // este arreglo en el use useEffect, nos indica que se ejecuta una sola vez
    }, []);

    return (
        <>
            <h2>{category.toUpperCase()}</h2>
            <div className="card-grid">
            {
                images.map(({id,title,url}) => (
                    <Card key={id} id={id} title={title} url={url}/>
                ))
            }
            </div>
        </>
    )

}