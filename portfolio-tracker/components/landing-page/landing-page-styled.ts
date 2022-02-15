import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(30px)
}
100% {
  opacity: 1;
  transform: translateY(0px)
}
`;

export const LandingPage = styled.main`
  margin: auto;
  text-align: center;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    text-align: left;
    animation: ${fadeUp} 1.5s 1;
  }
`;
