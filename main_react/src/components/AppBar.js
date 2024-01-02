
export function AppBar() {
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