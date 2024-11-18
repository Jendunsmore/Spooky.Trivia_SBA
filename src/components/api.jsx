// src/components/api.js


import axios from 'axios';

const fetchGifs = async () => {
    const response = await axios.get('https://api.giphy.com/v1/gifs/halloween', {
        params: {
            api_key: 'fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2',
            limit: 10,
        },
    });
    return response.data;
};

export { fetchGifs };
