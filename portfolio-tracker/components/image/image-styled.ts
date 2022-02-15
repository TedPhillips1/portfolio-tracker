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

export const Image = styled.img`
  margin: 2vw;
  margin-bottom: 0.5vw;
  max-width: 38vw;
  height: auto;
  border-radius: 1%;
  animation: ${fadeUp} 1.5s 1;
`;
