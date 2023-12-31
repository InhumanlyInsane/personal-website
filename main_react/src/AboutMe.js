import React from 'react';
import './index.css';
import { CardItem } from './components/Card';

class AboutMe extends React.Component {
    render() {
        
        return (
            <div className="text-white text-left ml-20 mr-20 flex flex-col items-center">

                <h1 className="text-5xl font-bold font-primary mb-5">About Me</h1>

                <div className='flex justify-between w-full'>

                    <CardItem 
                        icon='graduation-cap.png'
                        title="Educational Journey"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien massa, convallis tincidunt dignissim nec, malesuada et felis."
                    />

                    <CardItem 
                        icon='project-management.png'
                        title="Technophile"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien massa, convallis tincidunt dignissim nec, malesuada et felis."
                    />

                    <CardItem 
                        icon='leader.png'
                        title="Leading & Empowering"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien massa, convallis tincidunt dignissim nec, malesuada et felis."
                    />

                </div>

            </div>
        
        );
    }
}

export default AboutMe;