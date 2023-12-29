import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function AppBar() {
  return(

    <nav className="py-4">
      {/* Your content inside the appbar */}
      <div className="container mx-auto flex items-center">
        <h1 className="text-2xl font-bold text-white">Welcome !!! 👋</h1>
        <ul className="flex space-x-6 text-white ml-10">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About Me</li>
          <li className="cursor-pointer hover:text-gray-300">Projects</li>
          <li className="cursor-pointer hover:text-gray-300">Organizations</li>
        </ul>
      </div>
    </nav>

  );
}

class Home extends React.Component {

  render() {

    // modify background to gradient style
    const color1 = "#0B0C10";
    const color2 = "#1F2833";
    const gradientStyle = {
      background: `linear-gradient(to bottom, ${color1}, ${color2})`,
    };

    return(
      <div className="relative">
        {/* Include AppBar with a transparent overlay */}
        <div className="absolute top-0 left-0 w-full">
          <AppBar />
        </div>

        {/* Content with gradient background */}
        <div className="flex justify-center items-center h-screen" style={gradientStyle}>
          <div className="bg-gray-200 p-6 rounded-md shadow-md">
            <h1 className="text-3xl font-bold text-center text-white">Hello World</h1>
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