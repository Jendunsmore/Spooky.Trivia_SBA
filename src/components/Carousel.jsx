// carousel component to display GIFs


import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchGifs } from "./api";

const Carousel = () => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        const loadGifs = async () => {
            const gifData = await fetchGifs();
            setGifs(gifData);
        };
        loadGifs();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {gifs.map((gif) => (
                <div key={gif.id}>
                    <img src={gif.images.fixed_height.url} alt={gif.title} />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
