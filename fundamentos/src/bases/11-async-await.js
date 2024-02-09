import endpoints, { keys, env } from "./config/giphy";

//async convierte la funcion en una promesa
// el await convierte en una funcion sincrona las promesas
const getImage = async() => {

    try {
        
        const resp = await fetch(`${(env.dev ? endpoints.dev: endpoints.prod)}?api_key=${keys.develop}`);
    
        const { data } = await resp.json();
    
        const { url } = data.images.original; 
    
        const img = document.createElement('img');
    
        img.src = url;
    
        document.body.append(img);
        
    } catch (error) {
        console.error(error);
    }
    

}

getImage();