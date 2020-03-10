import React, { useState, useRef, useEffect } from "react";
import "./styles/main.scss";
import "./App.css";
import { addMinutes } from "./utils/timer";
import { Hero, Notif, Highlights, Footer, NewsLetter } from "./components";

function App() {
  const [showNotif, setShowNotif] = useState(true);
  const [showNewsLetter, setShowNewsLetter] = useState(false);
  const timer = useRef();
  const scrollRef = useRef();
  const toggleShowNotif = () => {
    setShowNotif(!showNotif);
  };
  const toggleShowNewsLetter = () => {
    const currentDate = new Date();
    const futureDate = addMinutes(currentDate, 10);
    // setTimer(futureDate);
    timer.current = futureDate;
    setShowNewsLetter(false);
    // observer.disconnect();
  };
  const action = () => {
    alert(timer.current);
  }
  const [observer, setObserver] = useState(
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.7) {
            setShowNewsLetter(true);
            action();
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: "1000px 0px 0px 1000px"
      }
    )
  );
  useEffect(() => {
    // observer.observe(scrollRef.current);
     new IntersectionObserver(
       entries => {
         entries.forEach(entry => {
           if (entry.intersectionRatio >= 0.7) {
             setShowNewsLetter(true);
             action();
           }
         });
       },
       {
         threshold: 0.7,
         rootMargin: "1000px 0px 0px 1000px"
       }
     );
     observer.observe(scrollRef.current);
     return function cleanup() {
       observer.unobserve(scrollRef.current);
       observer.disconnect();
     };
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
      />
    </div>
  );
}

export default App;
