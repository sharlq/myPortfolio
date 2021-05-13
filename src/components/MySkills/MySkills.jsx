import React from 'react'

const MySkills = () => {
    return (
        <div className="mySkills">
            <h1 className="mySkills-title">My Skills</h1>
            <div className="mySkills-grid">
            <div className="skills">
                <h1 className="skills-title">Programming Skills</h1>
                <div>
                    <h2 className="skills-secondaryTitle">Web Development</h2>
                    <ul className="skills-list">
                        <li>Strong Knowledge in the HTML5, CSS3, JavaScrpt and EcmaScript</li>
                        <li>Experience with REACT</li>
                        <li>Knowledge of webStructure and browser performance</li>
                        <li>Familiarity with software  version control system Git,Github</li>
                        <li>Familiarity with the whole web stack</li>
                        <li>knowladge of NodeJS and express</li>
                        <li>experiance with SASS</li>
                        <li>Knowledge of bundling tools webpack,roll up and parcel</li>
                    </ul>
                    <h2 className="skills-secondaryTitle">Other Programming skills</h2>
                    <ul className="skills-list">
                        <li>knowladge of python</li>
                        <li>OOP in JavaScrpt and python</li>
                        <li>Knowledge of OpenCV in python</li>
                    </ul>
                </div>
            </div>


            <div className="skills">
            <h1 className="skills-title">Soft Skills</h1>
                <div>
                    <ul className="skills-list">
                        <li>Able to consume knowladge, new information and adapt to new technologies fast </li>
                        <li>Experience with REACT</li>
                        <li>Knowledge of webStructure and browser performance</li>
                        <li>Familiarity with software  version control system Git,Github</li>
                        <li>Familiarity with the whole web stack</li>
                        <li>knowladge of NodeJS and express</li>
                        <li>experiance with SASS</li>
                        <li>Knowledge of bundling tools webpack,roll up and parcel</li>
                    </ul>
                <h1 className="skills-title" style={{marginTop:"3vh",marginBottom:"2vh"}}>Other technical Skills</h1>
                    <ul className="skills-list" >
                        <li>knowladge of python</li>
                        <li>OOP in JavaScrpt and python</li>
                        <li>Knowledge of OpenCV in python</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MySkills
