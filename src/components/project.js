import React from 'react';
import '../styles/index.css'

export const Project = (props) => {
    
    return (
        <div className="project">
            {props.children}
        </div>
    );
}
