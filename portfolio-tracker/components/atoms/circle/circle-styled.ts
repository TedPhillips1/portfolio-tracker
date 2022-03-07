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

export const Circle = styled.div`
  height: 20vw;
  width: 20vw;
  background: rgb(61, 61, 61);
  background: linear-gradient(
    129deg,
    rgba(61, 61, 61, 1) 0%,
    rgba(31, 31, 31, 1) 65%
  );
  border-radius: 10vw;
  position: absolute;
  left: 35vw;
  top: 20vh;
  z-index: -1;
  animation: ${fadeUp} 1.5s 1;
`;
