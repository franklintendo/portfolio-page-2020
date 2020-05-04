import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Hotdog from "./Hotdog";

function Bio() {
    return(
        <Container fluid className="bio--container py-0">
                  <Row className="">
                        <Col md={6} xl={5} className="bio--text my-auto text-left text-sm-center text-md-left text-lg-center px-sm-5 py-5">
                            <img className="rounded-circle mb-3" src={require('../../sass/img/bio-pic.jpg')} alt="Frank Moran" style={{width: "300px", height: "300px"}} />
                                <p className="bio--title">Hi! My name is Francis Moran.</p>
                                <p data-scroll><span style={{fontWeight: "bold"}}>I am a full stack web developer and designer based in New York City</span>. I have professional experience building websites and email templates from the design phase to deployment.</p>

                                <p data-scroll>I am a big proponent of <span style={{fontWeight: "bold"}}>Javascript/jQuery</span>, <span style={{fontWeight: "bold"}}>CSS3/Sass</span>, <span style={{fontWeight: "bold"}}>Bootstrap</span>, and <span style={{fontWeight: "bold"}}>React</span>. I seek to always be learning in order to work well within teams, strengthen my own knowledge, and remain adaptable.</p>

                                <p data-scroll>Outside of my professional work, I enjoy playing music and working on different multimedia projects such as animation and video editing.</p>

                                <p className="bio--links mt-3 d-inline-block px-lg-5 pt-3" data-scroll>          
                                    <a className="px-3 d-inline-block" href="https://www.linkedin.com/in/francis-moran-63970665/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i>&nbsp;&nbsp;LinkedIn</a>

                                    <a className="px-3 d-inline-block" href="https://github.com/franklintendo" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i>&nbsp;&nbsp;Github</a>

                                    <a className="px-3 d-inline-block" href="https://www.instagram.com/favlonmaurice/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i>&nbsp;&nbsp;Instagram</a>

                                    <a className="px-3 d-inline-block" href="mailto:info@francisfrankmoran.com" rel="noopener noreferrer" target="_blank"><i className="fas fa-envelope"></i>&nbsp;&nbsp;Email</a>

                                    <a className="px-3 d-inline-block d-md-block" href="/francis_moran_resume.pdf" rel="noopener noreferrer" target="_blank"><i class="fas fa-file-pdf"></i>&nbsp;&nbsp;Resume</a>
                                </p>
                        </Col>
                        <Col md={6} xl={7} className="bio--animation">
                              &nbsp;
                              <Hotdog />
                        </Col>
                  </Row>
            </Container>
    )
}

export default Bio;