import React from "react";
import "./Notif.scss";

const Notif = ({showNotif,toggleShowNotif}) => {
  
  return (
    <div id="notif" style={{display: showNotif ? 'block' : 'none'}}>
      <div id="notif-content">
        <div>By accessing and using this website, you acknowledge that you have read and
understand our <a href="#">Cookie Policy</a>, <a href="#">Privacy Policy</a>, and our <a href="#">Terms of Service.</a></div>
        <button className="secondary-btn" onClick={toggleShowNotif}>Got it</button>
      </div>
    </div>
  )
}

export default Notif;