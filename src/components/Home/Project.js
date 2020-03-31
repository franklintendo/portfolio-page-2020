import React from 'react';
import { Col } from "react-bootstrap";

function Project() {
    return(
        <Col md={4} lg={3} className="mb-4">
                <div className="h-100 projects--card px-0 pt-0 pb-3 text-center" style={{}}>
                <div className="projects--img-container">
                <img src={require('../../sass/img/projects/mad-libs.png')} alt="Mad Libs" className="w-100"/>
                </div>
                <p className="projects--title mb-0 px-3 pt-3">Holiday Mad Libs</p>
                <p className="projects--deets mb-3 pb-3 px-3">Enter in text to generate festive stories.
                    <br/>
                <small>Includes: React, React Bootstrap, Sass</small>
                </p>
                
                <a className="projects--link px-3 py-1" href="https://franklintendo.github.io/holiday-mad-libs/" rel="noopener noreferrer" target="_blank"><i class="fas fa-laptop-code"></i>&nbsp;&nbsp;Demo</a>
                &nbsp;&nbsp;&nbsp;
                <a className="projects--link px-3 py-1" href="https://github.com/franklintendo/holiday-mad-libs" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i>&nbsp;&nbsp;Github</a>

                </div>
        </Col>
    )
}

export default Project;