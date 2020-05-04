import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Hero() {
    return(
        <Container fluid className="h-100 w-100 home-hero text-center">
            <Row className="h-100">
                <Col className="col-auto my-auto mx-auto">
                <h1 className="home-hero-title d-inline-block">FRANCIS MORAN</h1><br/>
                    <p className="home-hero-desc d-inline-block">
                        <span><i className="fas fa-code"></i> Full Stack Development</span> <br/> 
                        <span><i className="fas fa-palette"></i> Web &amp; Graphic Design</span> 
                    </p>

                    
                </Col>
            </Row>
            <div className="home-hero--links py-3 px-2 px-md-3">
                <a className="d-inline-block d-md-block mx-3 mx-md-0 mb-md-2" href="https://www.linkedin.com/in/francis-moran-63970665/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>

                <a className="d-inline-block d-md-block mx-3 mx-md-0 mb-md-2" href="https://github.com/franklintendo" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>

                <a className="d-inline-block d-md-block mx-3 mx-md-0 mb-md-2" href="https://www.instagram.com/favlonmaurice/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>

                <a className="d-inline-block d-md-block mx-3 mx-md-0 mb-md-2" href="mailto:info@francisfrankmoran.com" rel="noopener noreferrer" target="_blank"><i className="fas fa-envelope"></i></a>

                <a className="d-inline-block d-md-block mx-3 mx-md-0 mb-md-2" href="/francis_moran_resume.pdf" rel="noopener noreferrer" target="_blank"><i class="fas fa-file-pdf"></i></a>
            </div>
        </Container>
        
    )
}

export default Hero;