import React from 'react';
import "@devnomic/marquee/dist/index.css";
import { CertCard } from '../components/CertCard';

class Certifications extends React.Component {
    render() {
        return (
            <div className='mb-20 ml-20 mr-20'>
                <h1 className="text-5xl font-bold font-primary mb-2 flex justify-end text-white">Certifications & Courses</h1>

                <div className="mt-6 grid grid-cols-3">

                    <div className="border-gray-500 border border-r-0 rounded-tl-lg">
                        <CertCard 
                        roundedType={"rounded-tl-lg rounded-bl-none rounded-tr-none rounded-br-none"} 
                        iconLogo="devicon:kaggle"
                        imageUrl={process.env.PUBLIC_URL + "/image/certificates/compvis.png"}
                        title={"Computer Vision"}
                        />
                    </div>
                    <div className="border-gray-500 border">
                        <CertCard 
                        roundedType={"rounded-none"} 
                        iconLogo="devicon:kaggle"
                        imageUrl={process.env.PUBLIC_URL + "/image/certificates/introDL.png"}
                        title={"Intro to Deep Learning"}
                        />
                    </div>
                    <div className="border-gray-500 border border-l-0 rounded-tr-lg">
                        <CertCard 
                        roundedType={"rounded-tr-lg rounded-br-none rounded-tl-none rounded-bl-none"} 
                        iconLogo={"devicon:kaggle"}
                        imageUrl={process.env.PUBLIC_URL + "/image/certificates/pandas.png"}
                        title={"Pandas"}
                        />
                    </div>

                    <div className="border-gray-500 border border-r-0 border-t-0 rounded-bl-lg">
                        <CertCard 
                        roundedType={"rounded-bl-lg rounded-br-none rounded-tl-none rounded-tr-none"} 
                        iconLogo="simple-icons:datacamp"
                        iconColor="#2dfe54"
                        imageUrl={process.env.PUBLIC_URL + "/image/certificates/creatingDashboards.png"}
                        title={"Creating Dashboards"}
                        />
                    </div>
                    <div className="border-gray-500 border border-t-0">
                        <CertCard 
                        roundedType={"rounded-none"}
                        iconLogo="simple-icons:datacamp"
                        iconColor="#2dfe54"
                        imageUrl={process.env.PUBLIC_URL + "/image/certificates/dealingMissingData.png"}
                        title={"Dealing with Missing Data"}
                        />
                    </div>
                    <div className="border-gray-500 border border-t-0 border-l-0 rounded-br-lg">
                        <CertCard 
                        roundedType={"rounded-br-lg rounded-bl-none rounded-tl-none rounded-bl-none"} 
                        iconLogo="simple-icons:datacamp"
                        iconColor="#2dfe54"
                        imageUrl={process.env.PUBLIC_URL + "/image/certificates/introSeaborn.png"}
                        title={"Data Visualization with Seaborn"}
                        />
                    </div>



                </div>

            </div>

        )
        
    }
}

export default Certifications;