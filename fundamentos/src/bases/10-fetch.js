import endpoints, { keys, env } from "../config/giphy";

const http = fetch(`${(env.dev ? endpoints.dev: endpoints.prod)}?api_key=${keys.develop}`);

//las promesas se pueden encadenar para usar una nueva como callback en el then
http.then(resp => resp.json())
.then(({data}) => {
    const { url } = data.images.original; 
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(err => console.error(err));