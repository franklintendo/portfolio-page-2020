import React, { Component } from 'react';
import Project from './Project';
import { Container, Row } from "react-bootstrap";
import projects from "../../projects.json";

class Projects extends Component {

    state = {
        projects: projects
    }

    render() {
        return(

            <Container fluid className="py-5 projects--container" style={{}}>
                <Row className="justify-content-center">
                    <Project projects={this.state.projects} />
                </Row>
            </Container>
        
        )
    }
}

export default Projects;