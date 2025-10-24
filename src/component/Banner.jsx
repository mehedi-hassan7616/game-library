import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; "react-fast-marquee";
const Banner = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className=" mx-auto rounded-2xl overflow-hidden shadow-lg mt-6">
                <Carousel responsive={responsive} >
                    <div>
                        <img
                            src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg"
                            alt="PUBG"
                        />
                        <p className="legend">PlayerUnknown’s Battlegrounds (PUBG)</p>
                    </div>
                    <div>
                        <img
                            src="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg"
                            alt="GTA V"
                        />
                        <p className="legend">Grand Theft Auto V</p>
                    </div>
                    <div>
                        <img
                            src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg"
                            alt="CSGO"
                        />
                        <p className="legend">Counter-Strike: Global Offensive</p>
                    </div>
                </Carousel>
            </div>
        </>
    );
};
export default Banner;