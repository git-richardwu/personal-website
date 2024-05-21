import Navbar from './components/navbar/Navbar.jsx';
import AboutMe from './components/aboutme/AboutMe.jsx';
import Skills from './components/skills/Skills.jsx';
import Experience from './components/experience/Experience.jsx';
import React, {useEffect, useState} from 'react';
import Greetings from './components/Greetings.jsx';
import ContactMe from './components/contactme/ContactMe.jsx';
import Projects from './components/projects/Projects.jsx';
import './App.css'

function App() {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>  window.removeEventListener("scroll", handleScroll);
    
  }, [offset]);

  return (
      <div className="App">
        <Navbar/>
      <div style={{ transform: `translateY(-${offset * 0.75}px)`}}>
        <Greetings/>      
      </div>
      
      <div id="aboutme">
        <AboutMe/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      {/* style={{ transform: `translateY(-${offset * 0.8}px)`}} */}
      <div id="projects">
        <Projects/>
      </div>
      <div id="contactme">
        <ContactMe/>
      </div>
	    <div className="shape">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
   
    
  );
}

export default App;
