import React, {useEffect, useState, useRef} from 'react';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Project } from '../components/project';
import { Contact } from '../components/contact';
import { Experience } from '../components/experience';
import { Scale } from '../components/scale';
import { Row, Col, Container } from 'react-bootstrap';

const Me = () => {
    const orange1 = "#fad6a5";
    const orange3 = "#f7c16a";
    const orange4 = "#DB6356";
    const white = "#f2f2f2";
    const blue1 = "#c7e1e5";
    const blue2 = "#f0fdff";
    const blue3 = "#0c1445";
    const [color, setColor] = useState(orange1);
    const handsRef = useRef(null);
    const fightRef = useRef(null);
    const surgicalRef = useRef(null);
    const contactRef = useRef(null);
    const qrRef = useRef(null);
    const skillRef = useRef(null);
    const experienceRef = useRef(null);

    const changeColor = (e) => {
        let trans = document.documentElement.clientHeight/3;
        if (handsRef.current.getBoundingClientRect().top > trans) {
            setColor(orange1);
        } else if (handsRef.current.getBoundingClientRect().top <= trans && handsRef.current.getBoundingClientRect().top + handsRef.current.getBoundingClientRect().height > trans) {
            setColor(white);
        } else if (fightRef.current.getBoundingClientRect().top <= trans && fightRef.current.getBoundingClientRect().top + fightRef.current.getBoundingClientRect().height > trans) {
            setColor(blue2);
        } else if (surgicalRef.current.getBoundingClientRect().top <= trans && surgicalRef.current.getBoundingClientRect().top + surgicalRef.current.getBoundingClientRect().height > trans) {
            setColor(blue1);
        } else if (qrRef.current.getBoundingClientRect().top <= trans && qrRef.current.getBoundingClientRect().top + qrRef.current.getBoundingClientRect().height > trans) {
            setColor(orange3);
        } else if (skillRef.current.getBoundingClientRect().top <= trans && skillRef.current.getBoundingClientRect().top + skillRef.current.getBoundingClientRect().height > trans) {
            setColor(orange4);
        } else if (contactRef.current.getBoundingClientRect().top <= trans && contactRef.current.getBoundingClientRect().top + contactRef.current.getBoundingClientRect().height > trans) {
            setColor(blue3);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
      }, []);


    return (
        <div className="meWrapper" style={{backgroundColor: color}}>
            <div>
                <h1 className='name'>Sergey</h1>
                <div className='introWrapper'>
                    <p className='bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                        Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                        viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                        venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                        lorem arcu scelerisque justo, ac cursus felis purus non urna. Proin convallis sed justo ut finibus.
                        Suspendisse tempor id eros a lobortis. Donec cursus id nunc et rhoncus. Cras at nulla est.
                        Cras vel ante quis ligula tempor eleifend eu eget leo. In hac habitasse platea dictumst. =
                        Aenean eleifend dignissim gravida. Morbi ut augue nibh. Nam ut auctor nibh. Morbi ante tortor,
                        dignissim eu arcu bibendum, sodales eleifend risus.</p>
                    <div className='resume'>
                        <a href='sergey_khlynovskiy_resume.pdf' target='_blank' rel='noopener noreferrer' className="btn btn-outline-primary btn-lg" role="button">
                            Resume&nbsp;
                            <i className="bi bi-filetype-pdf"></i>
                        </a>
                    </div>   
                </div>
            </div>
            <div ref={experienceRef} className="experiences">
                <h2>Work</h2>
                <hr/>
                <Experience>
                    <h3>home spritz</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                        Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                        viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                        venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                        lorem arcu scelerisque justo, ac cursus felis purus non urna. Proin convallis sed justo ut finibus.
                        Suspendisse tempor id eros a lobortis. Donec cursus id nunc et rhoncus. Cras at nulla est.
                        Cras vel ante quis ligula tempor eleifend eu eget leo. In hac habitasse platea dictumst. =
                        Aenean eleifend dignissim gravida. Morbi ut augue nibh. Nam ut auctor nibh. Morbi ante tortor,
                        dignissim eu arcu bibendum, sodales eleifend risus.</p>
                </Experience>
                <h2>Education</h2>
                <hr/>
                <Experience>
                    <h3>University of Alberta</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                        Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                        viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                        venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                        lorem arcu scelerisque justo, ac cursus felis purus non urna. Proin convallis sed justo ut finibus.
                        Suspendisse tempor id eros a lobortis. Donec cursus id nunc et rhoncus. Cras at nulla est.
                        Cras vel ante quis ligula tempor eleifend eu eget leo. In hac habitasse platea dictumst. =
                        Aenean eleifend dignissim gravida. Morbi ut augue nibh. Nam ut auctor nibh. Morbi ante tortor,
                        dignissim eu arcu bibendum, sodales eleifend risus.</p>
                </Experience>
            </div>
            <div ref={skillRef} className="skills">
                <h2>skills</h2>
                <hr/>
                <Container>
                    <div className='top-gap'>
                        <Row>
                            <Col className="me-5"><h3>javascript</h3><Scale progress="40" variant="green"/></Col>
                            <Col className="ms-5"><h3>javascript</h3><Scale progress="40" variant="green"/></Col>
                        </Row>
                    </div>
                    <div className='top-gap'>
                        <Row>
                            <Col className="me-5"><h3>javascript</h3><Scale progress="40" variant="yellow"/></Col>
                            <Col className="ms-5"><h3>javascript</h3><Scale progress="40" variant="yellow"/></Col>
                        </Row>
                    </div>
                    <div className='top-gap'>
                        <Row>
                            <Col className="me-5"><h3>javascript</h3><Scale progress="40" variant="blue"/></Col>
                            <Col className="ms-5"><h3>javascript</h3><Scale progress="40" variant="blue"/></Col>
                        </Row>
                    </div>
                    <div className='top-gap'>
                        <Row>
                            <Col className="me-5"><h3>javascript</h3><Scale progress="40" variant="purple"/></Col>
                            <Col className="ms-5"><h3>javascript</h3><Scale progress="40" variant="purple"/></Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className='projects_section'>
                <h2>Projects</h2>
                <hr/>
                <div ref={handsRef}>
                    <Project>
                        <h3>Window Media Manipulation With Hand Gestures</h3>
                        <div className='mid'>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                            Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                            viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                            venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                            lorem arcu scelerisque justo, ac cursus felis purus non urna. Proin convallis sed justo ut finibus.
                            Suspendisse tempor id eros a lobortis. Donec cursus id nunc et rhoncus. Cras at nulla est.
                            Cras vel ante quis ligula tempor eleifend eu eget leo. In hac habitasse platea dictumst. =
                            Aenean eleifend dignissim gravida. Morbi ut augue nibh. Nam ut auctor nibh. Morbi ante tortor,
                            dignissim eu arcu bibendum, sodales eleifend risus.</p>
                            <div className='demo'>

                            </div> 
                        </div>
                        
                    </Project>
                </div>
                <div ref={fightRef}>
                    <Project>
                        <h3>stick man game</h3>
                        <div className='right'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                            Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                            viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                            venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                            lorem arcu scelerisque justo, ac cursus felis purus non urna. Proin convallis sed justo ut finibus.
                            Suspendisse tempor id eros a lobortis. Donec cursus id nunc et rhoncus. Cras at nulla est.
                            Cras vel ante quis ligula tempor eleifend eu eget leo. In hac habitasse platea dictumst. =
                            Aenean eleifend dignissim gravida. Morbi ut augue nibh. Nam ut auctor nibh. Morbi ante tortor,
                            dignissim eu arcu bibendum, sodales eleifend risus.</p>
                            <div className='demo'>
                                <a href='http://localhost:8080/stickgame' target='_blank' rel='noopener noreferrer' className="btn btn-outline-info btn-lg" role="button">
                                    Game&nbsp;
                                    <i className="bi bi-controller"></i>
                                </a>
                            </div> 
                        </div>
                        
                    </Project>
                </div>
                <div ref={surgicalRef}>
                    <Project>
                        <h3>ml surgical tools</h3>
                        <div className='left'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                            Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                            viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                            venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                            lorem arcu scelerisque justo, ac cursus felis purus non urna. Proin convallis sed justo ut finibus.
                            Suspendisse tempor id eros a lobortis. Donec cursus id nunc et rhoncus. Cras at nulla est.
                            Cras vel ante quis ligula tempor eleifend eu eget leo. In hac habitasse platea dictumst. =
                            Aenean eleifend dignissim gravida. Morbi ut augue nibh. Nam ut auctor nibh. Morbi ante tortor,
                            dignissim eu arcu bibendum, sodales eleifend risus.</p>
                            <a href='https://www.aimss.ca/project2021' target='_blank' rel='noopener noreferrer' className="btn btn-outline-info btn-lg" role="button">
                                Report&nbsp;
                                <i className="bi bi-file-text"></i>
                            </a>
                        </div>
                        
                    </Project>
                </div>
                <div ref={qrRef}>
                    <Project>
                        <h3>qr hunter mobile game</h3>
                        <div className='left'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                        Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                        viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                        venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                        lorem arcu scelerisque justo, ac cursus felis purus non urna. Proin convallis sed justo ut finibus.
                        Suspendisse tempor id eros a lobortis. Donec cursus id nunc et rhoncus. Cras at nulla est.
                        Cras vel ante quis ligula tempor eleifend eu eget leo. In hac habitasse platea dictumst. =
                        Aenean eleifend dignissim gravida. Morbi ut augue nibh. Nam ut auctor nibh. Morbi ante tortor,
                        dignissim eu arcu bibendum, sodales eleifend risus.</p>
                        </div>
                    <video width="750" height="500" controls className='right'>
                        <source src="result.mp4" type="video/mp4"/>
                    </video>
                    </Project>
                </div>
            </div>
            <div ref={contactRef}>
                {/* might have to do proper form validation */}
                <Contact/>
            </div>
        </div>
    );
};

export default Me;