import React from 'react';
import { Col } from "react-bootstrap";

const renderProjects = (items) => {
    return items.map(item => 
        <Col md={6} lg={4} xl={3} className="mb-4">
                <div className="h-100 projects--card px-0 pt-0 text-center" style={{}}>
                <div className="projects--img-container">
                <img src={item.image} alt="Mad Libs" className="w-100"/>
                </div>
                <p className="projects--title mb-0 px-3 pt-3 pb-1">{item.title}</p>
                <p className="projects--deets mb-3 pb-3 px-3">{item.deets.text}
                    <br/>
                <small>{item.deets.small}</small>
                </p>
                    <div className="projects--links-container py-3 w-100">
                        <a className="projects--link px-3 py-2" href={item.demo} rel="noopener noreferrer" target="_blank"><i class="fas fa-laptop-code"></i>&nbsp;&nbsp;Demo</a>
                        &nbsp;&nbsp;&nbsp;
                        <a className="projects--link px-3 py-2" href={item.github} rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i>&nbsp;&nbsp;Github</a>
                    </div>
                </div>
        </Col>
    );
}

function Project({ projects }) {
    
    return renderProjects(projects);
    
}

export default Project;