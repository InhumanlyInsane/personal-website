import AboutMe from "./AboutMe";
import { Typography } from "@material-tailwind/react";
import './index.css';

function AppBar() {
    return(

        <nav className="py-4 flex items-center justify-between">
        {/* Image */}
        <div className="flex items-center">
            {/* Access the image using its relative path */}
            <img 
            src={process.env.PUBLIC_URL + '/personal-logo.jpeg'} // Add a leading slash to the image path
            alt="Profile Icon" 
            className="w-12 h-12 object-cover rounded-full mr-2 ml-5" // Adjust the image size and styling
            />
            <h1 className="text-2xl font-logo text-white mr-1">vincent suhardi</h1>

            <div className="border-l border-gray-300 h-6 mx-4"></div>

            {/* Navigation links */}
            <ul className="flex space-x-6 text-white font-bold ml-1">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">About Me</li>
            <li className="cursor-pointer hover:text-gray-300">Projects</li>
            <li className="cursor-pointer hover:text-gray-300">Organizations</li>
            <li className="cursor-pointer hover:text-gray-300">Awards</li>
            <li className="cursor-pointer hover:text-gray-300">Certifications</li>
            </ul>

        </div>

        
        </nav>

    );
}

function App() {
  
    const gradientStyle = {
    background: `linear-gradient(to bottom, #0B0C10, #1F2833)`,
    minHeight: '100vh'
    };


    return (
    <div className="relative" style={gradientStyle}>
        {/* Include AppBar */}
        <AppBar />

        {/* Header Content */}
        <div className="text-white text-left ml-20 mr-20 flex items-center justify-between">
            <div style={{width: '65%'}}>
                <h1 className="text-5xl font-bold font-primary mt-20">Developing & Innovating</h1>
                <h1 className="text-7xl font-primary font-bold mt-5" style={{ color: '#66FCF1' }}>The World</h1>
                <p className="text-2xl mt-5 font-primary text-justify">
                Hello World! I'm <span style={{ borderBottom: '2px solid #66FCF1' }}>Vincent Suhardi</span>, 
                <span style={{color: '#66FCF1'}}> a passionate and curious learner </span> who loves to explore the 
                possibilities in the tech industry, especially in <span style={{color: '#66FCF1'}}> artificial intelligence 
                and software engineering</span>. This website will serve as my personal project that tells you all about me, 
                pleased to be your acquaintance!
                </p>
            </div>

            <figure className="relative w-64 h-64 mt-20 mr-10"> 
                <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src={process.env.PUBLIC_URL + '/main_pfp.jpg'}
                    alt="Profile"
                />

                <figcaption className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center rounded-xl border border-white bg-white/75 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                    <Typography variant="h5" color="blue-gray" className="font-logo">
                        Vincent Suhardi
                    </Typography>
                    <Typography color="gray" className="font-logo">
                        15 February 2022
                    </Typography>
                    </div>
                </figcaption>
            </figure>

        </div>

        <hr className="border-gray-500 mx-20 my-20" />

        {/* About Me Content */}
        <AboutMe />

    </div>
    );
}

export default App;