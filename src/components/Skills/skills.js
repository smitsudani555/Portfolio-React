import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return(
         <section id="skills">
            <span className="skillTitle">What i do</span>
            <span className="skillDesc">I specialize in developing intelligent solutions using Machine Learning, crafting dynamic web applications with the MERN stack, and designing user-friendly interfaces that enhance digital experiences.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Developement</h2>
                        <p>I build responsive, dynamic, and user-friendly websites using modern web technologies, ensuring seamless user experience.</p>

                    </div>
                </div>

                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Machine Learning Solutions</h2>
                        <p>I develop AI-driven solutions using Machine Learning and Deep Learning to analyze data, make predictions, and automate tasks efficiently.</p>

                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Full-Stack Web Development</h2>
                        <p>Skilled in building scalable and interactive web applications with the MERN stack, combining frontend and backend for seamless performance.</p>

                    </div>
                </div>
            </div>
         </section>
    )
}

export default Skills