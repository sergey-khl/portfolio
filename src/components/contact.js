import React, { useState } from 'react';
import '../styles/index.css';
import { Row, Col, Form, InputGroup, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

export const Contact = (props) => {
    // https://react-bootstrap.github.io/forms/validation/
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity() === true) {
            emailjs.send('service_m2aj5sj', 'template_ko4g05s', {name: name, email: email, message: message}, '77Xhnu5Ij_nH5q6IM')
            .then((r) => {
                console.log('email sent!')
                setShow(true)
                setValidated(true);
            }, (error) => {
                console.log(error.text);
            });
        }   
    };
    return (
        <div className="contact">
            <h2>contact</h2>
            <hr/>
            <Form noValidate validated={validated} onSubmit={handleSubmit} id="emailForm">
                <Row className="m-0 p-5 justify-content-center text-center">
                    <Form.Group as={Col} md="4" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row className="m-0 p-5 justify-content-center text-center">
                    <Form.Group as={Col} md="8" controlId="message">
                        <Form.Label>Message</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                            as="textarea"
                            placeholder="..."
                            rows="5"
                            required
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <div className='text-center p-5'>
                    <Button type="submit">Submit</Button>
                </div>
                <div className='text-center p-1'>
                    <Alert key={"success"} variant={"success"} show={show} onClose={() => setShow(false)} dismissible>
                        Sent Email! I will be in contact with you soon.
                    </Alert>
                </div>
            </Form>
        </div>
    );
}
