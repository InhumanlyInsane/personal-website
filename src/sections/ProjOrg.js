import React from 'react';
import '../index.css';
import { CarouselCard } from '../components/CarouselCard.js';
import { ProjectTimeline } from '../components/ProjTimeline.js';

class ProjOrg extends React.Component {
    render() { 
        
        return (
            <div className="text-white text-left flex flex-col">

                <h1 className="text-5xl font-bold font-primary ml-20 mr-20 mb-2">Projects</h1>
                <div className='mt-6 w-full h-[1100px] mb-20 flex items-center' style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>

                    <div className='ml-20'>
                        <ProjectTimeline />
                    </div>

                </div>

                <h1 className="text-5xl font-bold font-primary mb-2 ml-20 mr-20 flex justify-end">Organizations</h1>
                <div className='flex justify-center ml-20 mr-20 mt-6'>
                    <CarouselCard />
                </div>


            </div>
        
        );
    }
}

export default ProjOrg;