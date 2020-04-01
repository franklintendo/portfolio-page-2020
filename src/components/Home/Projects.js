import React, { Component } from 'react';
import Project from './Project';
import { Container, Row } from "react-bootstrap";
import projects from "../../projects.json";
import ScrollOut from "scroll-out";

class Projects extends Component {

    state = {
        projects: projects
    }

    componentDidMount() {
        ScrollOut({
            threshold: .5,
            once: true
        });
    }

    render() {
        return(

            <Container fluid className="pt-5 pb-3 projects--container" style={{}}>
                <Row className="justify-content-center">
                    <Project projects={this.state.projects} />
                </Row>
            </Container>
        
        )
    }
}

export default Projects;