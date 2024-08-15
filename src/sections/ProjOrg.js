import React from 'react';
import '../index.css';
import { OrgCarousel } from '../components/OrgCarousel.js';
import { ProjectTimeline } from '../components/ProjTimeline.js';
import { AwardCarousel } from '../components/AwardCarousel.js';

class ProjOrg extends React.Component {
    render() { 
        
        return (
            <div className="text-white text-left flex flex-col">

                <h1 className="text-5xl font-bold font-primary ml-20 mr-20 mb-2" id='projects'>Projects</h1>
                <div className='mt-6 w-full h-full py-10 mb-20 flex items-center' style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>

                    <div className='ml-20'>
                        <ProjectTimeline />
                    </div>

                </div>

                <h1 className="text-5xl font-bold font-primary mb-2 ml-20 mr-20 flex justify-end" id='awards'>Awards</h1>
                <div className='flex justify-center ml-20 mr-20 mt-6'>
                    <AwardCarousel />
                </div>

                <h1 className="text-5xl font-bold font-primary mb-2 ml-20 mr-20 flex justify-start" id='organizations'>Organizations</h1>
                <div className='flex justify-center ml-20 mr-20 mt-6'>
                    <OrgCarousel />
                </div>


            </div>
        
        );
    }
}

export default ProjOrg;