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

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    margin-top: 10vh;
    margin-bottom: 10vh;
    animation: ${fadeUp} 1.5s 1;
  }
`;
