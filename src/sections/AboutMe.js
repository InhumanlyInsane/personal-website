import React from 'react';
import '../index.css';
import { CardItem } from '../components/Card';

class AboutMe extends React.Component { 
    render() {
        
        return (
            <div className="text-white text-left flex flex-col items-center">

                <h1 className="cs:text-5xl xs:text-3xl font-bold font-primary mb-2 ml-20 mr-20">About Me</h1>

                <div className='flex cs:justify-center cs:flex-row cs:gap-10 w-full xs:flex-col xs:items-center cs:items-stretch'>

                    <CardItem 
                        icon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cs:w-10 cs:h-10 xs:w-8 xs:h-8 cs:mb-2" style={ {color: "#3BBA9C"} }>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        title="Educational Journey"
                        description="A undergraduate university student in the number one university in Indonesia, Universitas Indonesia. 
                        As someone who indulges in the more applicative side of data science and AI, I am currently majoring in Information 
                        Systems to see how these advanced technology work and how are they applicative to the business side in a large 
                        scale around the globe."
                    />

                    <CardItem 
                        icon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cs:w-10 cs:h-10 xs:w-8 xs:h-8 cs:mb-2" style={ {color: "#3BBA9C"} }>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                            </svg>

                        title="Technophile"
                        description="I am really interested in very many technology principles, especially in data science and AI. But I also 
                        have a very keen interest in software development as can be seen in my projects mostly consisting of creating web 
                        projects. This shows that I am not only stuck to one tech field, but can adapt in very many others."
                    />

                    <CardItem 
                        icon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cs:w-10 cs:h-10 xs:w-8 xs:h-8 cs:mb-2" style={ {color: "#3BBA9C"} }>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        title="Leading & Empowering"
                        description="I possess the courage and ambition to lead teams towards shared goals, demonstrated by my 
                        successful track record in guiding committees to deliver tangible results and make a meaningful impact. 
                        Throughout my journey, I have empowered teams to reach their full potential by fostering a collaborative 
                        environment that values innovation and collective growth."
                    />

                </div>

            </div>
        
        );
    }
}

export default AboutMe;