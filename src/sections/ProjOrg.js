import React from 'react';
import '../index.css';
import { OrgCarousel } from '../components/OrgCarousel.js';
import { ProjectTimeline } from '../components/ProjTimeline.js';
import { AwardCarousel } from '../components/AwardCarousel.js';

class ProjOrg extends React.Component {
    render() { 
        
        return (
            <div className="text-white text-left flex flex-col">

                <h1 className="cs:text-5xl xs:text-3xl font-bold font-primary cs:mx-20 cs:mb-2 cs:mt-0 xs:ml-8 xs:mt-10" id='projects'>Projects</h1>
                <div className='mt-6 w-full h-full py-10 cs:mb-20 xs:mb-10 flex items-center' style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>

                    <div className='cs:ml-20 xs:ml-4'>
                        <ProjectTimeline />
                    </div>

                </div>

                <h1 className="cs:text-5xl xs:text-3xl font-bold font-primary cs:mb-2 xs:mb-0 ml-20 mr-20 flex cs:justify-end xs:justify-center" id='awards'>Awards</h1>
                <div className='flex justify-center cs:ml-20 cs:mr-20 mt-6'>
                    <AwardCarousel />
                </div>

                <h1 className="cs:text-5xl xs:text-3xl font-bold font-primary cs:mb-2 xs:mb-0 ml-20 mr-20 flex cs:justify-start xs:justify-center" id='organizations'>Organizations</h1>
                <div className='flex justify-center cs:ml-20 cs:mr-20 mt-6'>
                    <OrgCarousel />
                </div>


            </div>
        
        );
    }
}

export default ProjOrg;