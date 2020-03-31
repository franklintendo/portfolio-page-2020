import React, { Component } from 'react';
import Project from './Project';
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../projects.json";

class Projects extends Component {

    state = {
        projects: projects
    }

    render() {
        return(

            <Container fluid className="py-5 projects--container" style={{}}>
                <Row>
                    <Project projects={this.state.projects} />
                    <Col md={4} lg={3}>
                          <p>Coding Quiz Challenge</p>
                          <p>Answer multiple choice questions about coding to rack up a high score.
                                <br/>
                          <small>Includes: Javascript, Bootstrap</small>
                          </p>
                          <a href="https://franklintendo.github.io/homework-4-code-quiz/" rel="noopener noreferrer" target="_blank">Demo</a>
                          &nbsp;
                          <a href="https://github.com/franklintendo/homework-4-code-quiz" rel="noopener noreferrer" target="_blank">Github</a>
                    </Col>
                    
                    <Col md={4} lg={3}>
                          <p>Employee Summary Generator</p>
                          <p>A Node command-line interface that gathers employee information and generates a team page in HTML.
                                <br/>
                          <small>Includes: Node.js, Inquirer</small>
                          </p>
                          <a href="https://youtu.be/t-sPqBDT3xw" rel="noopener noreferrer" target="_blank">Demo</a>
                          &nbsp;
                          <a href="https://github.com/franklintendo/employee-summary" rel="noopener noreferrer" target="_blank">Github</a>
                    </Col>
                    <Col md={4} lg={3}>
                          <p>Developer Profile Generator</p>
                          <p>A command-line application that dynamically generates a PDF profile from a GitHub username.
                                <br/>
                          <small>Includes: Node.js, Inquirer, Axios, HTML5ToPDF</small>
                          </p>
                          <a href="https://youtu.be/i7mSYUejJyc" rel="noopener noreferrer" target="_blank">Demo</a>
                          &nbsp;
                          <a href="https://github.com/franklintendo/profile-generator" rel="noopener noreferrer" target="_blank">Github</a>
                    </Col>
                </Row>
            </Container>
        
        )
    }
}

export default Projects;