import styled from "styled-components";
import { StyleSheet } from "react";

const FlipTimmer = () => {
  const minutes = 150;

  const Calculator = (minutes) => {
    let h = 0;
    let m = 0;
    let s = 0;
    h = Math.floor(minutes / 60);
    m = Math.floor(minutes % 60);
    s = Math.floor(m % 60);

    return { hr: h, min: m, sec: s };
  };

  let obj = Calculator(minutes);

  return (
    <Container>
      <Timer val1={obj.hr} val2={"A"} />
      <Timer val1={obj.min} val2={"A"} />
      <Timer val1={obj.sec} val2={"A"} />
    </Container>
  );
};

const Timer = ({ val1, val2 }) => {
  return (
    <Inner>
      <span>{val1}</span>
      <span>{val2}</span>
    </Inner>
  );
};

export default FlipTimmer;

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
    color: gray;
    backface-visibility: hidden;
    transition: transform 1s ease-in-out;
  }

  & span:hover {
    transform: rotateX(180deg);
  }
`;
