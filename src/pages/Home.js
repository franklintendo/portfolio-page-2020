import React from 'react';
import Hero from '../components/Home/Hero.js';
import { Container, Row, Col } from "react-bootstrap";
import "../sass/Home.sass";

function Home() {
    return(
        <div className="h-100">
            <Hero />
            <Container fluid className="py-5 projects--container" style={{}}>
                <Row>
                    <Col md={4} lg={3} className="mb-4">
                          <div className="h-100 projects--card px-0 pt-0 pb-3 text-center" style={{}}>
                          <div className="projects--img-container rounded-top">
                          <img src={require('../sass/img/projects/mad-libs.png')} alt="Mad Libs" className="w-100"/>
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
                    <Col md={4} lg={3}>
                          <p>Books Search</p>
                          <p>Find and save books <span style={{fontStyle: "italic", fontSize: "14px"}}>(powered by Google Books API)</span>.
                                <br/>
                          <small>Includes: MongoDB, Express, Node.js, React, Bootstrap</small>
                          </p>
                          <a href="https://stark-falls-12658.herokuapp.com/" rel="noopener noreferrer" target="_blank">Demo</a>
                          &nbsp;
                          <a href="https://franklintendo.github.io/homework-6-weather-dashboard/" rel="noopener noreferrer" target="_blank">Github</a>
                          
                    </Col>
                    <Col md={4} lg={3}>
                          <p>Burger Logger</p>
                          <p>Add your own burgers to devour.
                                <br/>
                          <small>Includes: MySQL, Node.js, jQuery, Bootstrap, Express Handlebars</small>
                          </p>
                          <a href="https://sleepy-ridge-45932.herokuapp.com/" rel="noopener noreferrer" target="_blank">Demo</a>
                          &nbsp;
                          <a href="https://github.com/franklintendo/burger-logger" rel="noopener noreferrer" target="_blank">Github</a>
                    </Col>
                    <Col md={4} lg={3}>
                          <p>Weather Dashboard</p>
                          <p>Check weather conditions by city <span style={{fontStyle: "italic", fontSize: "14px"}}>(powered by OpenWeather API)</span>.
                                <br/>
                          <small>Includes: AJAX, jQuery, Bootstrap</small>
                          </p>
                          <a href="https://franklintendo.github.io/homework-6-weather-dashboard/" rel="noopener noreferrer" target="_blank">Demo</a>
                          &nbsp;
                          <a href="https://github.com/franklintendo/homework-6-weather-dashboard" rel="noopener noreferrer" target="_blank">Github</a>
                    </Col>
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
                          <p>The Viral Effect</p>
                          <p>Track COVID-19 in the US by number of cases and the impact on industry <span style={{fontStyle: "italic", fontSize: "14px"}}>(powered by John Hopkins University and World Trading Data API)</span>.
                                <br/>
                          <small>Includes: React, React Bootstrap, Sequelize, Express, Node.js</small>
                          </p>
                          <a href="https://hidden-everglades-28296.herokuapp.com/" rel="noopener noreferrer" target="_blank">Demo</a>
                          &nbsp;
                          <a href="https://github.com/MarciaAdler/Project3-Viral2.0" rel="noopener noreferrer" target="_blank">Github</a>
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
        </div>
        
    )
}

export default Home;