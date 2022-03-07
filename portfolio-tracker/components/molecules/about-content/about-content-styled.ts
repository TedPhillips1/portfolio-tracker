import styled, { keyframes, css } from "styled-components";

type Props = {
  toggle: boolean;
};

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  margin: auto;
  margin-bottom: 10vh;
  background-color: rgba(45, 45, 45, 1);
  border-radius: 8px;
  box-shadow: rgba(5, 5, 5, 0.15) 0px 48px 100px 0px;
  ${(props: Props) =>
    props.toggle
      ? css`
          animation: ${fadeIn} 2s 1;
        `
      : css`
          opacity: 0;
        `};
`;
