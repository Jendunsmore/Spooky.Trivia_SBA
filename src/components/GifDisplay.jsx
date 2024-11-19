// fetches and displays Halloween GIFs from a Giphy API


import React, { useState, useEffect } from "react";

export default function GifDisplay() {
    const [gifUrl, setGifUrl] = useState("");

    useEffect(() => {
        const fetchGif = async () => {
            const res = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2&q=halloween&limit=1`
            );
            const data = await res.json();
            setGifUrl(data.data[0]?.images?.fixed_height?.url || "");
        };
        fetchGif();
    }, []);

    return gifUrl ? <img src={gifUrl} alt="Halloween GIF" /> : <p>Loading GIF...</p>;
}
