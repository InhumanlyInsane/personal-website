import React from 'react';
import ReactDOM from 'react-dom/client';
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
        <h1 className="text-2xl font-primary text-white mr-1">vincent suhardi</h1>

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

class Home extends React.Component {

  render() {

    const gradientStyle = {
      background: `linear-gradient(to bottom, #0B0C10, #1F2833)`,
      minHeight: '100vh'
    };


    return (
      <div className="relative" style={gradientStyle}>
        {/* Include AppBar */}
        <AppBar />

        {/* Content */}
        <div className="text-white text-left ml-20 mr-20 flex items-center justify-between">
          <div>
            <h1 className="text-6xl font-bold mt-20">Developing & Innovating</h1>
            <h1 className="text-7xl font-bold mt-5" style={{ color: '#66FCF1' }}>The World</h1>
            <p className="text-2xl mt-5">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="rounded-lg overflow-hidden mt-20 mr-10">
            <img 
              src={process.env.PUBLIC_URL + '/main_pfp.jpg'}
              alt='Profile'
              className='w-64 h-64 object-cover'
            />
          </div>

        </div>

      </div>
    );
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
); 