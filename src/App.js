import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  return (
    <div className="App">
      {/* speed = scrolling speed factor = length of the page or layer*/}
      {/* <Parallax pages={6} speed={1} factor={1}>
        <ParallaxLayer>
          <Navbar />
        </ParallaxLayer>
        <ParallaxLayer>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Experience />
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <Footer />
        </ParallaxLayer>
      </Parallax> */}
      <Navbar/>
      <section>
        <About/>
      </section>
      <section>
        <Skills/>
      </section>
      <section> 
        <Experience/>
      </section>
      <section>
        <Projects/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
