import styled, {keyframes, css} from "styled-components";

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
  }`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
    background: rgb(61, 61, 61);
    background: linear-gradient(
      180deg,
      rgba(61, 61, 61, 1) 0%,
      rgba(35, 35, 35, 1) 95%
    );
    border-radius: 20px;
    ${(props: Props) =>
        props.toggle
          ? css`
              animation: ${fadeIn} 2s 1;
            `
          : css`
              opacity: 0;
            `};`;