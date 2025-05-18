import Typewriter from 'typewriter-effect';
import React from 'react'
import '../App.css'

export default function Greetings() {
  return (
    <div>
      <div className="text-style">
          <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('Hello! My name is Richard Wu.')
            .pauseFor(1500)
            typewriter.typeString(' :^)')
            .start();
          }}/>
      </div>
      <div className="text-style2">
           Software Engineer | Computer Science, B.S. | Game Developer
      </div>
    </div>
  );
}


