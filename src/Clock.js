import React, { useEffect, useState } from 'react';
import './Clock.css'

const Clock = () => {
  const [saTime, setSaTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const utcTime =
        currentTime.getTime() + currentTime.getTimezoneOffset() * 60000; 
      const saTimezoneOffset = 2 * 60 * 60000; 
      setSaTime(new Date(utcTime + saTimezoneOffset)); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div className="block">
        <span id="hrs">{("0" + saTime.getHours()).slice(-2)}</span>
        <p>HOURS</p>
      </div>
      <div className="block">
        <span>:</span>
      </div>
      <div className="block">
        <span id="min">{("0" + saTime.getMinutes()).slice(-2)}</span>
        <p>MINS</p>
      </div>
      <div className="block">
        <span>:</span>
      </div>
      <div className="block">
        <span id="sec">{("0" + saTime.getSeconds()).slice(-2)}</span>
        <p>SEC</p>
      </div>
    </div>
  );
};


export default Clock;