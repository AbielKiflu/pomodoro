import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const interval = useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours() * 30;
  const minute = time.getMinutes() * 6;
  const second = time.getSeconds() * 6;

  return (
    <div className="clock">
      <div
        className="hour"
        style={{ transform: "rotate(" + hour + "deg)" }}
      ></div>
      <div
        className="minute"
        style={{ transform: "rotate(" + minute + "deg)" }}
      ></div>
      <div
        className="second"
        style={{ transform: "rotate(" + second + "deg)" }}
      ></div>
      <span className="twelve">12</span>
      <span className="six">6</span>
      <span className="three">3</span>
      <span className="nine">9</span>
    </div>
  );
};

export default Clock;
