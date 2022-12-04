import styled from "styled-components";

const Clock = () => {
  return (
    <Container>
      <Inner></Inner>
    </Container>
  );
};

export default Clock;

const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  background-color: #ccc;
  border-radius: 10rem;
  box-shadow: -2px -2px 7px rgba(255, 255, 255, 0.7),
    2px 2px 5px rgba(94, 104, 121, 0.3);
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  position: relative;
  background: transparent;
  border-radius: 50%;
  box-shadow: inset -2px -2px 7px rgba(255, 255, 255, 0.7),
    inset 2px 2px 5px rgba(94, 104, 121, 0.3);
  &::before {
    content: "";
    height: 0.2rem;
    width: 30%;
    border-radius: 0.5rem;
    transform: rotateZ(25deg);
    transform-origin: right;
    background: red;
  }
  &::after {
    content: "";
    height: 0.3rem;
    border-radius: 0.5rem;
    transform: rotateZ(15deg);
    transform-origin: left;
    width: 40%;
    background: blue;
  }
`;
