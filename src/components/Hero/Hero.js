import React from "react";
import logo from './../../assets/y-logo-white.png';
import './hero.scss';
const Hero = ({ showNotif }) => {
  return (
    <div id="hero">
      <div id="hero-main" style={showNotif ? {} : { marginTop: '1.5em'}}>
        <div id="hero-logo">
          <img id="logo" src={logo} />

        </div>
        <div id="hero-content">
          <h1>Hello! I'm Widhi Nugraha</h1>
          <h3>Consult, Design, and Develop Websites</h3>
          <p>Have something great in mind? Feel free to contact me.</p>
          <p>I'll help you to make it happen.</p>
          <button>LET'S MAKE CONTACT</button>
        </div>
      </div> {/* hero-main */}


    </div>
  )
}

export default Hero;