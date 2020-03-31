import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Hero() {
    return(
        <Container fluid className="h-100 w-100 home-hero text-center">
            <Row className="h-100">
                <Col className="col-auto my-auto mx-auto">
                <h1 class="home-hero-title d-inline-block">FRANCIS MORAN</h1><br/>
                    <p class="home-hero-desc d-inline-block">
                        <span><i class="fas fa-code"></i> Full Stack Development</span> <br/> 
                        <span><i class="fas fa-palette"></i> Web &amp; Graphic Design</span> 
                    </p>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Hero;