import React from 'react';
import { CertCard } from '../components/CertCard';

class Certifications extends React.Component {
    render() {
        return (
            <div className='mb-20 ml-20 mr-20'>
                <h1 className="text-5xl font-bold font-primary mb-2 flex justify-end text-white">Certifications & Courses</h1>
                <div className="mt-6 grid grid-cols-3 border border-gray-500 rounded-lg">
                    <div className="border-r-[1px] border-gray-500">
                        <CertCard roundedType={"rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none"}/>
                    </div>
                    <CertCard roundedType={"rounded-none"}/>
                    <div className="border-l-[1px] border-gray-500">
                        <CertCard roundedType={"rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none"}/>
                    </div>
                </div>
            </div>

        )
        
    }
}

export default Certifications;