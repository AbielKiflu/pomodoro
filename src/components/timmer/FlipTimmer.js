import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const FlipTimmer = () => {
  //transform: rotateX(360deg);
  const [time, setTime] = useState(952);
  let obj = {};

  const interval = useEffect(() => {
    setInterval(() => {
      setTime((p) => p - 1);
      //else
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  obj = Calculator(time);
  return (
    <Container>
      <Timer val1={obj?.hr} />
      <Timer val1={obj?.min} />
      <Timer val1={obj?.sec} />
    </Container>
  );
};

export default FlipTimmer;

const Timer = ({ val1 }) => {
  const ref = useRef(false);

  const rotate = () => {
    ref.current.style.transform = "rotateX(360deg)";
  };

  return (
    <Inner>
      <span ref={ref} onClick={rotate}>
        {val1}
      </span>
    </Inner>
  );
};

const Calculator = (seconds) => {
  let h = 0;
  let m = 0;
  let s = 0;
  let stop = false;
  if (seconds - 60 * (h * 60 + m) >= 0 && !stop) {
    let min = Math.floor(seconds / 60);
    h = Math.floor(min / 60);
    m = Math.floor(min % 60);
    s = Math.floor(seconds - 60 * (h * 60 + m));
  } else {
    stop = true;
  }

  return {
    hr: h.toString().length > 1 ? h : h.toString().padStart(2, "0"),
    min: m.toString().length > 1 ? m : m.toString().padStart(2, "0"),
    sec: s.toString().length > 1 ? s : s.toString().padStart(2, "0"),
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  cursor: pointer;
  perspective: 400px;
  perspective-origin: center center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 5rem;
  gap: 1rem;
  transform-style: preserve-3d;
  transform: rotateX(20deg);
  box-shadow: -0.2rem 0.2rem 0.2rem rgba(90, 90, 100, 0.7),
    0.2rem -0.2rem 0.2rem rgba(255, 255, 255, 0.5);

  & span {
    font-size: 3rem;
    color: #333333;
    font-weight: 500;
    text-shadow: -0.2rem 0.2rem 0.2rem rgba(90, 90, 100, 0.7),
      0.2rem -0.2rem 0.2rem rgba(255, 255, 255, 0.5);
    backface-visibility: hidden;
    transition: transform 1s ease-in-out;
  }
`;
