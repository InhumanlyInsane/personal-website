import React from 'react';
import './index.css';
import { CarouselDefault } from './components/Carousel.js';

class ProjOrg extends React.Component {
    render() {
        
        return (
            <div className="text-white text-left ml-20 mr-20 flex flex-col">

                <h1 className="text-5xl font-bold font-primary mb-2">Projects</h1>
                <div className='flex justify-center mt-6'>
                    <CarouselDefault />
                </div>

                <h1 className="text-5xl font-bold font-primary mb-2 flex justify-end">Organizations</h1>
                <div className='flex justify-center mt-6'>
                    <CarouselDefault />
                </div>

            </div>
        
        );
    }
}

export default ProjOrg;