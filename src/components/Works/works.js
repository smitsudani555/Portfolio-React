import React from "react";
import './works.css'
import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-3.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'


const Works = () => {
    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDisc">
            Explore my portfolio showcasing innovative projects in Machine Learning, Full-Stack Web Development, and AI-driven solutions. Each project highlights my expertise in building intelligent, scalable, and user-friendly applications.
            </span>            
            <div className="worksImgs">
                <img src={p1} alt="Portfolio" className="worksImg"/>
                <img src={p2} alt="Portfolio" className="worksImg"/>
                <img src={p3} alt="Portfolio" className="worksImg"/>
                <img src={p4} alt="Portfolio" className="worksImg"/>
                <img src={p5} alt="Portfolio" className="worksImg"/>
                <img src={p6} alt="Portfolio" className="worksImg"/>
            </div>

            <button  className="workBtn">See More</button>
        </section>
    )
}
export default Works

