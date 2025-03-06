import React, { useRef } from "react";
import './contact.css'

import facebookIcon from '../../assets/facebook-icon.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'

import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2vqvkoe', 'template_l0wnzr5', form.current, 'G0ZdEEuOID3htYcPA')
            .then((result) => {
                console.log(result);
                e.target.reset();
                alert('Email sent!');
            }, (error) => {
                console.log(error.text); // Corrected from error.txt to error.text
            });
    };

    return(
        <section>
            <div id="contactPage">
                {/* <div className="clients">
                    <h1 className="contactPageTitle">
                        My Clients
                    </h1>
                    <p className="clientDesc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero consequuntur fuga est illum perferendis, quis esse a.</p>
                    <div className="clientImgs">
                        <img src={walmart} alt="walmart" className="clientImg"/>
                        <img src={adobe} alt="adobe" className="clientImg"/>
                        <img src={microsoft} alt="microsoft" className="clientImg"/>
                        <img src={facebook} alt="facebook" className="clientImg"/>
                    </div> 
                </div> */}
                <div id="contact">
                    <h1 className="contactPageTitle"></h1>
                    <span className="contactDesc"></span>
                    <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                        <input type="email" className="email" placeholder="Your Email" name='your_email'/>
                        <textarea className="msg" name="message" id="" rows="5" placeholder="Your Message"></textarea>
                        <button className="submitBtn" type="submit" value="Send">Submit</button>
                        <div className="links">
                            <img src={facebookIcon} alt="Facebook" className="clientImg"/>
                            <img src={twitter} alt="Twitter" className="clientImg"/>
                            <img src={youtube} alt="You tube" className="clientImg"/>
                            <img src={instagram} alt="Instagram " className="clientImg"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact

