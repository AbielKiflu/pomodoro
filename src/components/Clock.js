import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "./clock.css";

const Clock = () => {
  return (
    <div className="clock">
      <div className="hour"></div>
      <div className="minute"></div>
      <div className="second"></div>
      <span className="twelve">12</span>
      <span className="six">6</span>
      <span className="three">3</span>
      <span className="nine">9</span>
    </div>
  );
};

export default Clock;
