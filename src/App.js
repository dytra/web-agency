import React, { useState, useRef, useEffect } from "react";
import "./styles/main.scss";
import "./App.css";
import { Hero, Notif, Highlights, Footer, NewsLetter } from "./components";

function App() {
  const [showNotif, setShowNotif] = useState(true);
  const scrollRef = useRef();
  const toggleShowNotif = e => {
    e.preventDefault();
    setShowNotif(!showNotif);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log('startforeach',entry.intersectionRatio);
        if (entry.intersectionRatio >= .7) {
          alert("yolo");
        } else {
          console.log(entry.intersectionRatio);
        }
      });
    },{
      threshold:.7,
      // rootMargin: '1000px 0px 0px 1000px',
    });
    observer.observe(scrollRef.current);
  }, []);
  return (
    <div id="app">
      <Notif
        showNotif={showNotif}
        setShowNotif={setShowNotif}
        toggleShowNotif={toggleShowNotif}
      />
      <Hero showNotif={showNotif} />
      <Highlights scrollRef={scrollRef} />
      <Footer/>
      <NewsLetter />
    </div>
  );
}

export default App;
