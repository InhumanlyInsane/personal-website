import React from "react";
import { SkillCard } from "../components/SkillCard";
import '../index.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="mb-20">
                <h1 className="cs:text-5xl xs:text-3xl text-white font-bold font-primary cs:mb-[50px] xs:mb-[10px] cs:ml-20 xs:ml-8">Skillsets</h1>

                <div className="mt-6 cs:mx-10 xs:mx-4 grid cs:grid-cols-4 xs:grid-cols-2 cs:gap-11 xs:gap-4 xs:gap-y-4">
                    <SkillCard 
                        firstIcon={"devicon:pandas"}
                        skill={"Data Manipulation"}
                        specific={"Pandas"}
                        circled={true}
                        twoIcons={false}
                    />
                    
                    <SkillCard 
                        firstIcon={"skill-icons:scikitlearn-light"}
                        secondIcon={"logos:numpy"}
                        skill={"Machine Learning"}
                        specific={"Scikit-Learn & NumPy"}
                        circled={false}
                        twoIcons={true}
                    />

                    <SkillCard 
                        firstIcon={"devicon:keras"}
                        secondIcon={"skill-icons:tensorflow-light"}
                        skill={"Deep Learning"}
                        specific={"Keras & TensorFlow"}
                        circled={false}
                        twoIcons={true}
                    />

                    <SkillCard 
                        firstIcon={"skill-icons:opencv-light"}
                        skill={"Computer Vision"}
                        specific={"OpenCV"}
                        circled={false}
                    />

                    <SkillCard 
                        firstIcon={"devicon:matplotlib"}
                        secondIcon={"logos:seaborn-icon"}
                        skill={"Data Visualization"}
                        specific={"Matplotlib & Seaborn"}
                        circled={false}
                        twoIcons={true}
                    />

                    <SkillCard 
                        firstIcon={"logos:tableau-icon"}
                        skill={"Data Analytics"}
                        specific={"Tableau Dashboards"}
                        circled={true}
                    />

                    <SkillCard 
                        firstIcon={"skill-icons:java-light"}
                        secondIcon={"skill-icons:python-light"}
                        skill={"High-Level Programming"}
                        specific={"Java & Python"}
                        circled={false}
                        twoIcons={true}
                    />

                    <SkillCard 
                        firstIcon={"vscode-icons:file-type-reactjs"}
                        secondIcon={"devicon:tailwindcss"}
                        thirdIcon={"skill-icons:django"}
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