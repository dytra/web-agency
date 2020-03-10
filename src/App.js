import React, { useState, useRef, useEffect } from "react";
import "./styles/main.scss";
import "./App.css";
import { addMinutes } from "./utils/timer";
import { Hero, Notif, Highlights, Footer, NewsLetter } from "./components";

function App() {
  const [showNotif, setShowNotif] = useState(true);
  const [showNewsLetter, setShowNewsLetter] = useState(false);
  const [animateSlideDown,setAnimateSlideDown] = useState(false);
  const timer = useRef(null);
  const scrollRef = useRef();
  const toggleShowNotif = () => {
    setShowNotif(!showNotif);
  };
  const toggleShowNewsLetter = () => {
    const currentDate = new Date();
    const futureDate = addMinutes(currentDate, 10);
    timer.current = futureDate;
    setShowNewsLetter(false);
    setAnimateSlideDown(true);
  };

  useEffect(() => {
    // observer.observe(scrollRef.current);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio < 0.7) return;
          if (!timer.current) {
            setShowNewsLetter(true);

          } else if (timer.current && new Date() > timer.current) {
            setShowNewsLetter(true);
            timer.current=null;

          }

        });
      },
      {
        threshold: 0.7,
        rootMargin: "1000px 0px 0px 1000px"
      }
    );
    observer.observe(scrollRef.current);

  }, [timer]);

  // useEffect(() => {

  // },[timer]);
  return (
    <div id="app">
      <Notif
        showNotif={showNotif}
        setShowNotif={setShowNotif}
        toggleShowNotif={toggleShowNotif}
      />
      <Hero showNotif={showNotif} />
      <Highlights scrollRef={scrollRef} />
      <Footer />
      <NewsLetter
        showNewsLetter={showNewsLetter}
        toggleShowNewsLetter={toggleShowNewsLetter}
        animateSlideDown={animateSlideDown}
      />
    </div>
  );
}

export default App;
