import AboutMe from "./AboutMe";
import ProjOrg from "./ProjOrg";
import { AppBar } from "./components/AppBar";
import './index.css';

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

            </figure>

        </div>

        <hr className="border-gray-500 mx-20 my-20" />

        {/* About Me Content */}
        <AboutMe />

        {/* Projects & Organization Content */}
        <ProjOrg />

    </div>
    );
}

export default App;