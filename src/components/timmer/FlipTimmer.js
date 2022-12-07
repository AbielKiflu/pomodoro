import styled from "styled-components";
import { useRef, useEffect, useState, useMemo } from "react";

const FlipTimmer = () => {
  const [time, setTime] = useState(590);
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

  const clicked = () => {
    if (ref.current) ref.current.classList.toggle("rotate");
  };

  return (
    <Inner>
      <span onClick={clicked} ref={ref}>
        {val1.toString().length > 1 ? val1 : val1.toString().padStart(2, "0")}
      </span>
    </Inner>
  );
};

const Calculator = (seconds) => {
  let h = 0;
  let m = 0;
  let s = 0;

  if (seconds > 0) {
    let min = Math.floor(seconds / 60);
    h = Math.floor(min / 60);
    m = Math.floor(min % 60);
    s = seconds - 60 * m;
  }

  return {
    hr: h,
    min: m,
    sec: s,
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

  .reset {
    transform: rotateX(0deg);
  }

  .rotate {
    transform: rotateX(360deg);
  }

  & span {
    font-size: 3rem;
    color: #333333;
    font-weight: 500;
    text-shadow: -0.2rem 0.2rem 0.2rem rgba(90, 90, 100, 0.7),
      0.2rem -0.2rem 0.2rem rgba(255, 255, 255, 0.5);
    backface-visibility: hidden;
    transform: rotateX(0deg);
    transition: transform 1s ease-in-out;
  }
`;
