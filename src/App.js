import AboutMe from "./sections/AboutMe";
import ProjOrg from "./sections/ProjOrg";
import ScrollToTop from "react-scroll-to-top";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import { Footer } from "./sections/Footer";
import React from "react";
import { StickyNavbar } from "./components/Navbar";
import { TypeAnimation } from "react-type-animation";

function App() {

    // Scroll to section to avoid navbar
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        const navbarHeight = document.getElementById('navbar').offsetHeight + 30;
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
    
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
    };    


    return (

        <div className="relative" id="top">

            {/* Include AppBar */}
            <StickyNavbar scrollToSection={scrollToSection} />

            <ScrollToTop smooth className="flex justify-center items-center bg-gradient-to-br from-cyan-400 to-green-400" color="white" width="20" height="20"/>

            {/* Header Content */}
            <div className="text-white text-left ml-20 mr-20 flex items-center justify-between">
                <div style={{width: '65%'}}>
                    <h1 className="text-5xl font-bold font-primary mt-20">Developing & Innovating</h1>
                    <div className="mt-5">
                        <TypeAnimation
                            sequence={[
                            "The World",
                            3000,
                            "Digital Transformation",
                            3000,
                            "Continuous Improvement",
                            3000,
                            "Future Technologies",
                            3000,
                            "Artificial Intelligence",
                            3000
                            ]}
                            speed={50}
                            repeat={Infinity}
                            // style={{ color: '#3BBA9C' }}
                            className="text-6xl font-primary font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
                        />
                    </div>
                    {/* <h1 className="text-7xl font-primary font-bold mt-5" style={{ color: '#3BBA9C' }}>The World</h1> */}
                    <p className="text-2xl mt-5 font-primary text-justify">
                    Hello World! I'm <span style={{ borderBottom: '2px solid #3BBA9C' }}>Vincent Suhardi</span>, 
                    <span style={{color: '#3BBA9C'}}> a passionate and curious learner </span> who loves to explore the 
                    possibilities in the tech industry, especially in <span style={{color: '#3BBA9C'}}> artificial intelligence 
                    and software engineering</span>. This website will serve as my personal project that tells you all about me, 
                    pleased to be your acquaintance!
                    </p>
                </div>

                <figure className="relative w-64 h-64 mt-20 mr-10"> 
                    <img
                        className="h-full w-full rounded-xl object-cover object-center z-0"
                        src={process.env.PUBLIC_URL + '/image/main_pfp.jpg'}
                        alt="Profile"
                    />

                </figure>

            </div>

            <hr className="border-gray-500 mx-20 my-20" />
            
            {/* About Me Content */}
            <div id="about-me">
                <AboutMe />
            </div>

            {/* Projects & Organization Content */}
            <ProjOrg />

            {/* Skills */}
            <div id="skillsets">
                <Skills />
            </div>

            {/* Footer */}
            <Footer />
            
        </div>
    );
}

export default App;