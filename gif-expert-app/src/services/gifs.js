export const getGifs = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=uPij8VhkLQc5EMMEC55Enwb2DVjlStMl&q=${category}&limit=20`;
        return await fetch(url);
        // return await resp.json();
        // const {data} = await resp.json();
        // // const gifs = data.map(item => ({
        // //     id: item.id,
        // //     title: item.title,
        // //     url: item.url
        // // }));

        // // desestructurado
        // // const gifs = data.map(({ id, title, url }) => ({ id, title, url }));

        // const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
        //     id,
        //     title,
        //     url
        // }));

        // return gifs;
}