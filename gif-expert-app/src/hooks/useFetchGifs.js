import { useState, useEffect } from "react";
import {getGifs} from "../services/gifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

         setImages(gifs);
         setIsLoading(false)
     };

    
     useEffect(() => {
         fetchData();
         // este arreglo en el use useEffect, nos indica que se ejecuta una sola vez
     }, []);

    return {
        images,
        isLoading,
    }
}