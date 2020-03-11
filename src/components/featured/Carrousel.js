import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';


const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                }
            },
            {
                breakpoint: 480,
                settings: {
                }
            }
        ]
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'

            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_one}) no-repeat center`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_two}) no-repeat center`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_three}) no-repeat center`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
            </Slider>

        </div>
    );
};

export default Carrousel;