import React from 'react';
import './index.css';
import { CarouselDefault } from './Carousel.js';

class AboutMe extends React.Component {
    render() {
        
        return (
            <div className="text-white text-left ml-20 mr-20 flex items-center">
                <h1 className="text-5xl font-bold font-primary">About Me</h1>

                <CarouselDefault />

            </div>
        
        );
    }
}

export default AboutMe;