import { GifCard } from "./";
// import { getGifs } from "../services/gifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    
    const {images, isLoading}  = useFetchGifs(category);

    return (
        <>
            <h3>{category.toUpperCase()}</h3>
            {
                isLoading && (
                    <h2> Cargando ... </h2>
                )
            }
            <div className="card-grid">
            {
                images.map((image) => (
                    // con el {...image} se exparsen todas las propiedades que se envian al componente
                    <GifCard key={image.id} {...image}/>
                ))
            }
            </div>
        </>
    )

}