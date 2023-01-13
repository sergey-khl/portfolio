import React from 'react'
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';


export const Scale = (props) => {
    return (
        <ProgressBar now={props.progress} variant={props.variant}></ProgressBar>
    );
}
