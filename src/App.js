import React, { useState } from 'react';
import './styles/main.scss';
import './App.css';
import { Hero, Notif, Highlights, Footer, NewsLetter } from "./components";

function App() {
  const [showNotif, setShowNotif] = useState(true);
  const toggleShowNotif = (e) => {
    e.preventDefault();
     setShowNotif(!showNotif) };
  return (
    <div id="app">
      <Notif showNotif={showNotif} setShowNotif={setShowNotif} toggleShowNotif={toggleShowNotif} />
      <Hero showNotif={showNotif} />
      <Highlights />
      <Footer />
      <NewsLetter />
    </div>
  );
}

export default App;
