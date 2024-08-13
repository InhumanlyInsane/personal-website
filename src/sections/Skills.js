import React from "react";
import { SkillCard } from "../components/SkillCard";
import '../index.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="mb-20">
                <h1 className="text-5xl text-white font-bold font-primary mb-[50px] ml-20 mr-20">Skillsets</h1>

                <div className="mt-6 ml-10 mr-10 grid grid-cols-4 gap-11">
                    <SkillCard 
                        firstIcon={"devicon:pandas"}
                        iconSize={"50px"}
                        skill={"Data Manipulation"}
                        specific={"Pandas"}
                        circled={true}
                        twoIcons={false}
                    />
                    
                    <SkillCard 
                        firstIcon={"skill-icons:scikitlearn-light"}
                        secondIcon={"logos:numpy"}
                        iconSize={"50px"}
                        skill={"Machine Learning"}
                        specific={"Scikit-Learn & NumPy"}
                        circled={false}
                        twoIcons={true}
                    />

                    <SkillCard 
                        firstIcon={"devicon:keras"}
                        secondIcon={"skill-icons:tensorflow-light"}
                        iconSize={"50px"}
                        skill={"Deep Learning"}
                        specific={"Keras & TensorFlow"}
                        circled={false}
                        twoIcons={true}
                    />

                    <SkillCard 
                        firstIcon={"skill-icons:opencv-light"}
                        iconSize={"50px"}
                        skill={"Computer Vision"}
                        specific={"OpenCV"}
                        circled={false}
                    />

                    <SkillCard 
                        firstIcon={"devicon:matplotlib"}
                        secondIcon={"logos:seaborn-icon"}
                        iconSize={"50px"}
                        skill={"Data Visualization"}
                        specific={"Matplotlib & Seaborn"}
                        circled={false}
                        twoIcons={true}
                    />

                    <SkillCard 
                        firstIcon={"logos:tableau-icon"}
                        iconSize={"50px"}
                        skill={"Data Analytics"}
                        specific={"Tableau Dashboards"}
                        circled={true}
                    />

                    <SkillCard 
                        firstIcon={"skill-icons:java-light"}
                        secondIcon={"skill-icons:python-light"}
                        iconSize={"50px"}
                        skill={"High-Level Programming"}
                        specific={"Java & Python"}
                        circled={false}
                        twoIcons={true}
                    />

                    <SkillCard 
                        firstIcon={"vscode-icons:file-type-reactjs"}
                        secondIcon={"devicon:tailwindcss"}
                        thirdIcon={"skill-icons:django"}
                        iconSize={"50px"}
                        skill={"Web Development"}
                        specific={"ReactJS, TailwindCSS, Django"}
                        circled={false}
                        twoIcons={true}
                        threeIcons={true}
                    />

                </div>
                

            </div>
        );
    }
}

export default Skills;