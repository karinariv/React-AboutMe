import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import listentomusic from '../img/listentomusic.jpg';
import jogging from '../img/jogging.jpg';
import learninglanguages from '../img/learninglanguages.png'

function Interests() {
    return (
        <div className="container text-center">
            <h1 className="padding">My interests</h1>
            <Carousel fade variation="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 height"
                    src={listentomusic}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="dark-font">Listen to music</h3>
                    <p className="dark-font">[ Symphonic Metal - Rock - Pop ]</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 height"
                    src={jogging}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="dark-font">Jogging</h3>
                    <p className="dark-font">Going out for a jog is always a good idea</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 height"
                    src={learninglanguages}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="dark-font bg-color">Learning languages</h3>
                    <p className="dark-font bg-color">Why not learn new vocabulary whenever there's free time?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Interests;