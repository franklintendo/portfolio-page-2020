import React from 'react';
import Hero from '../components/Home/Hero.js';
import Projects from '../components/Home/Projects.js';
import Bio from '../components/Home/Bio.js';
import "../sass/Home.sass";

function Home() {
    return(
        <div className="h-100">
            <Hero />
            <Projects />
            <Bio />
        </div>
        
    )
}

export default Home;