import React from "react";
import "./NewsLetter.scss";
const NewsLetter = ({ showNewsLetter, toggleShowNewsLetter,animateSlideDown }) => {
  return (
    <div id="newsletter"  style={{ display: showNewsLetter ? "block" : "block" }}  className={animateSlideDown ? "slidedown" : ""}>
      <div id="newsletter-head">
        <button onClick={toggleShowNewsLetter}>x</button>
      </div>
      <div id="newsletter-content">
        <h2>Get latest updates in web technologies</h2>
        <p>
          I write articles related to web technologies, such as design trends,
          development tools, UI/UX case studies and reviews, and more. Sign up
          to my newsletter to get them all.
        </p>
      </div>
      <form>
        <input type="email" placeholder="Email address"></input>
        <button>Count me in!</button>
      </form>
    </div>
  );
};

export default NewsLetter;
