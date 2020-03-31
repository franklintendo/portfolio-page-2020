import React from 'react';
import Hero from '../components/Home/Hero.js';
import Projects from '../components/Home/Projects.js';
import { Container, Row, Col } from "react-bootstrap";
import "../sass/Home.sass";

function Home() {
    return(
        <div className="h-100">
            <Hero />
            <Projects />
        </div>
        
    )
}

export default Home;