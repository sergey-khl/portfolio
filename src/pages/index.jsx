import React, {useEffect, useState, useRef} from 'react';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Project } from '../components/project';
import { Contact } from '../components/contact';
import { Experience } from '../components/experience';
import { Scale } from '../components/scale';
import { Row, Col, Container, Navbar, Nav, Button } from 'react-bootstrap';

const Me = () => {
    const orange1 = "#FFF4BC";
    const orange2 = "#f7c16a";
    const orange3 = "#FF8C4C";
    const red = "#DB6356";
    const white1 = "#FBFCFC";
    const white2 = "#ECF0F1";
    const blue1 = "#f0fdff";
    const blue2 = "#c7e1e5";
    const blue3 = "#0c1445";
    const [color, setColor] = useState(orange1);
    const [collapse, setCollapse] = useState(false);
    const robotRef = useRef(null);
    const handsRef = useRef(null);
    const fightRef = useRef(null);
    const surgicalRef = useRef(null);
    const contactRef = useRef(null);
    const qrRef = useRef(null);
    const skillRef = useRef(null);
    const experienceRef = useRef(null);
    

    const changeColor = (e) => {
        let trans = document.documentElement.clientHeight/3;
        if (experienceRef.current.getBoundingClientRect().top > trans) {
            setColor(orange1);
        } else if (experienceRef.current.getBoundingClientRect().top <= trans && experienceRef.current.getBoundingClientRect().top + experienceRef.current.getBoundingClientRect().height > trans) {
            setColor(white1);
        } else if (skillRef.current.getBoundingClientRect().top <= trans && skillRef.current.getBoundingClientRect().top + skillRef.current.getBoundingClientRect().height > trans) {
            setColor(white2);
        } else if (robotRef.current.getBoundingClientRect().top <= trans && robotRef.current.getBoundingClientRect().top + robotRef.current.getBoundingClientRect().height > trans) {
            setColor(blue1);
        } else if (handsRef.current.getBoundingClientRect().top <= trans && handsRef.current.getBoundingClientRect().top + handsRef.current.getBoundingClientRect().height > trans) {
            setColor(blue2);
        } else if (fightRef.current.getBoundingClientRect().top <= trans && fightRef.current.getBoundingClientRect().top + fightRef.current.getBoundingClientRect().height > trans) {
            setColor(orange2);
        } else if (surgicalRef.current.getBoundingClientRect().top <= trans && surgicalRef.current.getBoundingClientRect().top + surgicalRef.current.getBoundingClientRect().height > trans) {
            setColor(orange3);
        } else if (qrRef.current.getBoundingClientRect().top <= trans && qrRef.current.getBoundingClientRect().top + qrRef.current.getBoundingClientRect().height > trans) {
            setColor(red);
        } else if (contactRef.current.getBoundingClientRect().top <= trans && contactRef.current.getBoundingClientRect().top + contactRef.current.getBoundingClientRect().height > trans) {
            setColor(blue3);
        }
    }

    const navCollapse = (e) => {
        setCollapse(!collapse);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
      }, []);


    return (
        <div className="meWrapper" id="home" style={{backgroundColor: color}}>
            <div>
            <Navbar
                expand="xl"
                bg="dark"
                variant="dark"
                fixed="top"
                collapseOnSelect
                >
                <Container fluid>
                    <Navbar.Brand href="#home" className="img-container">
                        Sergey
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className="ml-3 mb-2"
                        aria-controls="responsive-navbar-nav"
                        onClick={navCollapse}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Col md="auto">
                            <Button className="m-2" variant="outline-primary" size="lg">
                                <Nav.Link href="#experience">Experience</Nav.Link>
                            </Button>
                            <Button className="m-2" variant="outline-primary" size="lg">
                                <Nav.Link href="#skills">Skills</Nav.Link>
                            </Button>
                            <Button className="m-2" variant="outline-primary" size="lg">
                                <Nav.Link href="#projects">Projects</Nav.Link>
                            </Button>
                            <Button className="m-2" variant="primary" size="lg">
                                <Nav.Link href="#contactMe">Contact Me!</Nav.Link>
                            </Button>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
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
            <div ref={experienceRef} className="experiences" id="experience">
                <h2>Work / Internships</h2>
                <hr/>
                <Experience>
                    <h3>Home Spritz - Software Developer Internship</h3>
                    <h4>01/2022 - 01/2023</h4>
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
                <Experience>
                    <h3>University of Alberta - Teaching Assistant</h3>
                    <h4>09/2021 - current</h4>
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
                    <h3>University of Alberta - Computing Science Honours</h3>
                    <h4>01/2020 - current</h4>
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
            <div ref={skillRef} className="skills" id="skills">
                <h2>skills</h2>
                <hr/>
                {/* may have to update so works with phones */}
                <Container>
                    <div className='top-gap'>
                        <Row>
                            <Col className="mx-4"><h3>javascript</h3><Scale progress="40" variant="green"/></Col>
                            <Col className="mx-4"><h3>javascript</h3><Scale progress="40" variant="green"/></Col>
                        </Row>
                    </div>
                    <div className='top-gap'>
                        <Row>
                            <Col className="mx-4"><h3>javascript</h3><Scale progress="40" variant="blue"/></Col>
                            <Col className="mx-4"><h3>javascript</h3><Scale progress="40" variant="blue"/></Col>
                        </Row>
                    </div>
                    <div className='top-gap'>
                        <Row>
                            <Col className="mx-4"><h3>javascript</h3><Scale progress="40" variant="yellow"/></Col>
                            <Col className="mx-4"><h3>javascript</h3><Scale progress="40" variant="yellow"/></Col>
                        </Row>
                    </div>
                    <div className='top-gap'>
                        <Row>
                            <Col className="mx-4"><h3>javascript</h3><Scale progress="40" variant="purple"/></Col>
                            <Col className="mx-4"><h3>javascript</h3><Scale progress="40" variant="purple"/></Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className='projects_section' id="projects">
                <h2>Projects</h2>
                <hr/>
                <div ref={robotRef}>
                    <Project>
                        <h3>ROBOTS</h3>
                        <div className='right'>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                            Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                            viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                            venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                            </p>
                            <a href='https://sergey-khl.github.io/quacksite' rel='noopener noreferrer' className="btn btn-outline-info btn-lg" role="button">
                                Report 1&nbsp;
                                <i className="bi bi-file-text"></i>
                            </a>
                        </div>
                        <div className='demo'>
    
                                <img width="30%" height="54%" src="DUCK.jpg" class="img-fluid" alt="Responsive image"></img>
                        </div>
                    </Project>
                </div>
                <div ref={handsRef}>
                    <Project>
                        <h3>Window Media Manipulation With Hand Gestures</h3>
                        <div className='mid'>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ullamcorper leo.
                            Nam eleifend nisi id est tincidunt, nec pulvinar quam imperdiet. Donec ut enim malesuada,
                            viverra tortor vitae, imperdiet urna. Morbi ex lectus, venenatis et nibh sit amet,
                            venenatis molestie nulla. Cras in hendrerit est. Sed eleifend, nunc eu laoreet scelerisque,
                            </p>
                            <div className='demo'>

                            </div> 
                        </div>
                        
                    </Project>
                </div>
                <div ref={fightRef}>
                    <Project>
                        <h3>Stick Man Fighter</h3>
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
                                <a href='https://sergey-khl.github.io/stickgame' target='_blank' rel='noopener noreferrer' className="btn btn-outline-info btn-lg" role="button">
                                    Game&nbsp;
                                    <i className="bi bi-controller"></i>
                                </a>
                            </div> 
                        </div>
                        
                    </Project>
                </div>
                <div ref={surgicalRef}>
                    <Project>
                        <h3>Surgical Tool Classification</h3>
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
                        <video width="750" height="60%" controls className='right'>
                            <source src="result.mp4" type="video/mp4"/>
                        </video>
                    </Project>
                </div>
            </div>
            <div ref={contactRef} id="contactMe">
                {/* TODO: proper form validation */}
                <Contact/>
            </div>
        </div>
    );
};

export default Me;