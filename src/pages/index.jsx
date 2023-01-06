import React, {useEffect, useState, useRef} from 'react';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Project } from '../components/project';

const Me = () => {
    const [color, setColor] = useState("#FFFFFF");
    const fightRef = useRef(null);
    const surgicalRef = useRef(null);
    const contactRef = useRef(null);

    const changeColor = (e) => {
        let trans = window.scrollY - document.documentElement.clientHeight/4;
        if (fightRef.current.getBoundingClientRect().top <= trans && fightRef.current.getBoundingClientRect().top + fightRef.current.getBoundingClientRect().height > trans) {
            setColor("#FDEBD0");
        } else if (surgicalRef.current.getBoundingClientRect().top <= trans && surgicalRef.current.getBoundingClientRect().top + surgicalRef.current.getBoundingClientRect().height > trans) {
            setColor("#F7F9F9");
        } else if (contactRef.current.getBoundingClientRect().top <= trans && contactRef.current.getBoundingClientRect().top + contactRef.current.getBoundingClientRect().height > trans) {
            setColor("#626567");
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
      }, []);


    return (
        <div className="meWrapper" style={{backgroundColor: color}}>
            <div>
                <h1 className='name'>Hi, my name is Sergey and I like to make cool things!</h1>
                <a href='sergey_khlynovskiy_resume.pdf' target='_blank' rel='noopener noreferrer' className="btn btn-outline-primary btn-lg" role="button">
                    Resume&nbsp;
                    <i className="bi bi-filetype-pdf"></i>
                </a>
            </div>
            <div>
                <h2>Projects</h2>
                <div ref={fightRef}>
                    <Project>
                        stick man game
                    </Project>
                </div>
                <div ref={surgicalRef}>
                    <Project>
                        ml surgical tools
                    </Project>
                </div>
            </div>
            <div ref={contactRef} className="contact">
                <h2>contact</h2>
                <p>contact me</p>
            </div>
        </div>
    );
};

export default Me;