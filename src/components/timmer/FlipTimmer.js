import styled from "styled-components";
import { StyleSheet } from "react";

const FlipTimmer = () => {
  return (
    <Container>
      <Inner>
        <span>2</span>
        <span>5</span>
      </Inner>
      <Inner>
        <span>2</span>
        <span>5</span>
      </Inner>

      <Inner>
        <span>2</span>
        <span>5</span>
      </Inner>
    </Container>
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
    transition: transform 2s ease-in-out;
  }

  & span:hover {
    transform: rotateX(180deg);
  }
`;
