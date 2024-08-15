import AboutMe from "./sections/AboutMe";
import ProjOrg from "./sections/ProjOrg";
import ScrollToTop from "react-scroll-to-top";
import Skills from "./sections/Skills";
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

        <div id="top">

            {/* Include AppBar */}
            <StickyNavbar scrollToSection={scrollToSection} />

            <ScrollToTop smooth className="flex justify-center items-center bg-gradient-to-br from-cyan-400 to-green-400" color="white" width="20" height="20"/>

            {/* Header Content */}
            <div className="text-white text-left cs:mx-20 flex cs:flex-row xs:flex-col items-center justify-between">
                <div className="cs:w-2/3 xs:w-10/12">
                    <h1 className="cs:text-5xl xs:text-xl font-bold font-primary cs:mt-20 xs:mt-6">Developing & Innovating</h1>
                    <div className="cs:mt-2">
                        <TypeAnimation
                            sequence={[
                            "The World",
                            3000,
                            "Digital Transformation",
                            3000,
                            "Future Technologies",
                            3000,
                            "Artificial Intelligence",
                            3000
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="cs:text-6xl xs:text-3xl font-primary font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
                        />
                    </div>

                    <p className="cs:text-2xl xs:text-sm cs:mt-5 xs:mt-2 font-primary text-justify">
                    Hello World! I'm <span style={{ borderBottom: '2px solid #3BBA9C' }}>Vincent Suhardi</span>, 
                    <span style={{color: '#3BBA9C'}}> a passionate and curious learner </span> who loves to explore the 
                    possibilities in the tech industry, especially in <span style={{color: '#3BBA9C'}}> artificial intelligence 
                    and software engineering</span>. This website will serve as my personal project that tells you all about me, 
                    pleased to be your acquaintance!
                    </p>

                </div>

                <figure className="cs:relative cs:w-64 cs:h-64 xs:w-32 xs:h-32 cs:mt-20 cs:mr-10 xs:mt-6"> 
                    <img
                        className="h-full w-full rounded-xl object-cover object-center z-0"
                        src={process.env.PUBLIC_URL + '/image/main_pfp.jpg'}
                        alt="Profile"
                    />

                </figure>

            </div>

            <hr className="border-gray-500 cs:mx-20 cs:my-20 xs:mx-10 xs:my-6" />
            
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