import React from 'react';
import Hero from '../components/Home/Hero.js';
import Projects from '../components/Home/Projects.js';
import Bio from '../components/Home/Bio.js';
import { Container, Row, Col } from "react-bootstrap";
import "../sass/Home.sass";

function Home() {
    return(
        <div className="h-100">
            <Hero />
            <Projects />
            <Bio />
            <Container fluid className="py-0 h-100">
                  <Row className="h-100">
                        <Col md={6} xl={5} className="">
                              Hi
                        </Col>
                  </Row>
            </Container>
        </div>
        
    )
}

export default Home;