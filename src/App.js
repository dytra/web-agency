import React, { useState, useRef, useEffect } from "react";
import "./styles/main.scss";
import "./App.css";
import { addMinutes } from "./utils/timer";
import { Hero, Notif, Highlights, Footer, NewsLetter } from "./components";

function App() {
  const [showNotif, setShowNotif] = useState(true);
  const [showNewsLetter, setShowNewsLetter] = useState(false);
  const [timer, setTimer] = useState(null);
  const scrollRef = useRef();
  const toggleShowNotif = () => {
    setShowNotif(!showNotif);
  };
  const toggleShowNewsLetter = () => {
    const currentDate = new Date();
    const futureDate = addMinutes(currentDate, 10);
    setTimer(futureDate);
    setShowNewsLetter(false);
  };
  let observer = null;
  useEffect(() => {
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (timer) {
            observer.unobserve(scrollRef.current);
            observer.disconnect();
            alert("yolo");
            // if (entry.intersectionRatio >= 0.7) {
            //   alert("yolo");
            // }
          } else {
            if (entry.intersectionRatio >= 0.7) {
              setShowNewsLetter(true);
            }
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: "1000px 0px 0px 1000px"
      }
    );

    // if (timer) {
    //   observer.unobserve(scrollRef.current);
    //   observer.disconnect();
    //   alert("yolo");
      // if (entry.intersectionRatio >= 0.7) {
      //   alert("yolo");
      // }
    // } else {
    //   observer.observe(scrollRef.current);
    // }
  }, [timer]);
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
      />
    </div>
  );
}

export default App;
